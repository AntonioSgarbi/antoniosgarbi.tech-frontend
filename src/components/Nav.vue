<!--suppress CssUnknownTarget -->
<template>
  <v-container :class="isDark ? 'darkMode' : 'lightMode'">
      <v-overlay
          @click="setDrawer(false)"
          :value="showDrawer"
          z-index="4">
      </v-overlay>
      <v-card :dark="isDark">
        <v-navigation-drawer
            v-model="showDrawer"
            bottom
            app
            clipped
            hide-overlay
            :style="{ top: $vuetify.application.top + 'px', zIndex: 6 }">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <a
                    href="https://github.com/AntonioSgarbi"
                    target="_blank"
                    class="remove-link-style space-icon github"
                    :class="isDark ? 'darkMode' : 'lightMode'"
                >
                  Github
                  <v-icon>mdi-code-greater-than</v-icon>
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list :dark="isDark" flat>
            <v-list-item @click="setDrawer()" v-for="(i, item) in items" :key="item" :to="i.to">
              <v-list-item-content>
                <v-list-item-title class="space-icon">
                  {{ i.title }}
                  <v-icon>{{ i.icon }}</v-icon>
                </v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-switch
                  :dark="isDark"
                  :label="temaAtivado()"
                  @change="setDark()"
              ></v-switch>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-app-bar :color=" isDark ? '#272727' : '#F09784'" app clipped-left :dark="isDark" :class="{navDark: !isDark}">
        <v-app-bar-nav-icon @click.stop="setDrawer(false)"></v-app-bar-nav-icon>
          <v-app-bar-title>
            <v-tab to="/"
                   class="nav-title remove-link-style"
                   :class="{ darkMode: isDark }"
                   @click.stop="setDrawer(true)"
            >Antônio Sgarbi
            </v-tab>
          </v-app-bar-title>
      </v-app-bar>
  </v-container>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  name: "Nav",
  data: () => ({
    drawer: false,
    nav: false,
    showDrawer: false,
    items: [
      {title: "Portifólio", icon: 'mdi-bookmark-multiple-outline', to: '/projetos'},
      {title: "Contato", icon: 'mdi-contacts-outline', to: '/contato'},
      {title: "Artigos", icon: 'mdi-book-outline', to: '/artigos'},
      {title: "Sobre", icon: 'mdi-medal-outline', to: '/about'},
    ],
  }),
  computed: {
    ...mapState(['isDark'])
  },
  methods: {
    ...mapMutations(['setDark']),

    temaAtivado() {
      let temaAtivado = this.isDark ? 'Escuro' : 'Claro'
      let frase = "Tema " + temaAtivado + " ativado";
      return frase;
    },


    setDrawer(isTitle) {
      if(!isTitle)
        this.showDrawer = !this.showDrawer;
      else
        this.showDrawer = false
    },
  },

});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

.nav-title {
  color: black;
  font-family: "Allura", cursive;
  font-size: 2.75rem;
}

.navDark {
  color: #F09784;
}

.remove-link-style {
  text-decoration: none;
}


.space-icon {
  display: flex;
  justify-content: space-between;
}



.darkMode {
  color: white;
}

.lightMode {
  text-decoration: none;
  color: black;
}



</style>
