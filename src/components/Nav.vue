<template>
  <v-container>
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon v-on:click="setDrawer()"></v-app-bar-nav-icon>
      <v-tab to="/" class="remove-link-style">
        <v-app-bar-title class="nav-title">Antônio Sgarbi</v-app-bar-title>
      </v-tab>
    </v-app-bar>
    <v-card dark>
      <v-navigation-drawer bottom app clipped v-if="showDrawer">
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
          <v-list-item v-for="(i, item) in items" :key="item" :to="i.to">
            <v-list-item-content>
              <v-list-item-title>{{ i.title }}</v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Nav",
  data: () => ({
    nav: false,
    showDrawer: false,
    items: [
      { title: "Portifólio", icon: "mdi-image", to: '/projetos' },
      { title: "Contato", icon: "mdi-view-dashboard" },
      { title: "Artigos", icon: "mdi-image" },
      { title: "Sobre", icon: "mdi-help-box" },
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
