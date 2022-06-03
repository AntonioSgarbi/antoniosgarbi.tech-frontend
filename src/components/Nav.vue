<template>
  <v-container>
      <v-overlay
          @click="setDrawer()"
          :value="showDrawer"
          z-index="4">
      </v-overlay>
      <v-card dark>
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
                    class="remove-link-style"
                >
                  Github
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dark flat>
            <v-list-item @click="setDrawer()" v-for="(i, item) in items" :key="item" :to="i.to">
              <v-list-item-content>
                <v-list-item-title>{{ i.title }}</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-app-bar app clipped-left dark>
        <v-app-bar-nav-icon @click.stop="setDrawer()"></v-app-bar-nav-icon>
        <v-tab to="/" class="remove-link-style">
          <v-app-bar-title class="nav-title">Antônio Sgarbi</v-app-bar-title>
        </v-tab>
      </v-app-bar>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Nav",
  data: () => ({
    drawer: false,
    nav: false,
    showDrawer: false,
    items: [
      {title: "Portifólio", icon: '', to: '/projetos'},
      {title: "Contato", icon: '', to: '/contato'},
      {title: "Artigos", icon: '', to: '/artigos'},
      {title: "Sobre", icon: '', to: '/about'},
    ],
  }),
  methods: {
    setDrawer() {
      this.showDrawer = !this.showDrawer;
    },
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

.nav-title {
  font-family: "Allura", cursive;
  font-size: 3rem;
}

.remove-link-style {
  color: white;
  text-decoration: none;
}

</style>
