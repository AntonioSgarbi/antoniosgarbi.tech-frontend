<!--suppress CssUnknownTarget -->
<template>
  <v-container>
    <v-overlay
        :color="colorSecondary"
        @click="setDrawer(true)"
        :value="showDrawer"
        z-index="4">
    </v-overlay>
    <v-card :dark="isDark">
      <v-navigation-drawer
          :color="colorPrimary"
          v-model="showDrawer"
          bottom
          app
          clipped
          hide-overlay
          :style="{ top: $vuetify.application.top + 'px', zIndex: 6 }">
        <v-list-item class="list-item">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <a
                  href="https://github.com/AntonioSgarbi"
                  target="_blank"
                  class="remove-link-style space-icon github"
                  :class="isDark ? 'darkModeLetter' : 'lightModeLetter'"
              >
                Github
                <v-icon>mdi-github</v-icon>
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list :dark="isDark" flat>
          <v-list-item
              @click="setDrawer(true)"
              v-for="(item, index) in items"
              :key="index"
              :to="item.to"
              :class="'index'+index"
          >
            <v-list-item-content>
              <v-list-item-title
                  v-animate-css.hover="'fadeInLeft'"
                  class="space-icon list-item"
              >
                {{ item.title }}
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @mouseover="onHoverSetDark(true)" @mouseout="onHoverSetDark(false)">
            <v-switch
                :dark="isDark"
                :label="temaAtivado()"
                @change="onClickSetDark()"
            ></v-switch>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-app-bar :color="colorPrimary" app clipped-left :dark="isDark">
      <v-app-bar-nav-icon @click="setDrawer(false)"></v-app-bar-nav-icon>
      <v-app-bar-title class="app-bar animate__animated animate__zoomIn">
        <v-tab to="/"
               class="nav-title remove-link-style"
               :class="{ darkModeLetter: isDark, lightModeLetter: !isDark }"
               @click.stop="setDrawer(true)"
        >Antônio Sgarbi
        </v-tab>
      </v-app-bar-title>
    </v-app-bar>
  </v-container>
</template>

<script>
import Vue from "vue";
import {mapState, mapMutations} from "vuex";

export default Vue.extend({
  name: "Nav",
  data: () => ({
    drawer: false,
    nav: false,
    showDrawer: false,
    isMouseOverSetDark: false,
    isSetDarkClicked: false,
    items: [
      {title: "Portifólio", icon: 'mdi-bookmark-multiple-outline', to: '/projetos'},
      {title: "Contato", icon: 'mdi-contacts-outline', to: '/contato'},
      {title: "Artigos", icon: 'mdi-book-outline', to: '/artigos'},
      {title: "Sobre", icon: 'mdi-medal-outline', to: '/about'},
    ],
  }),
  computed: {
    ...mapState(['isDark', 'colorPrimary', 'colorSecondary'])
  },
  methods: {
    ...mapMutations(['setDark']),
    temaAtivado() {
      let temaAtivado = this.isDark ? 'Escuro' : 'Claro'
      return "Tema " + temaAtivado + " ativado";
    },
    onHoverSetDark(mouseIn) {
      if(mouseIn) { //@mouseover
        this.setDark();
        this.isMouseOverSetDark = true;
      }
      else if(!mouseIn) { //@mouseout
        !this.isSetDarkClicked ? this.setDark() : ''

        this.isSetDarkClicked = false;
        this.isMouseOverSetDark = false;
      }
    },
    onClickSetDark() {
      this.isSetDarkClicked = !this.isSetDarkClicked;
    },
    setDrawer(isTitle) {
      if (isTitle) {
        this.showDrawer = false
      } else {
        this.showDrawer = !this.showDrawer;
      }
    },
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

.nav-title {
  font-family: "Allura", cursive;
  font-size: 2.75rem;
}

.remove-link-style {
  text-decoration: none;
}

.space-icon {
  display: flex;
  justify-content: space-between;
}

.darkModeLetter {
  color: #dcf5eb;
}

.lightModeLetter {
  color: black;
}

</style>