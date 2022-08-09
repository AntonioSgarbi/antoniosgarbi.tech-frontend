<template>
  <v-app>
    <Nav />
    <v-main :class="{ darkModeBody: $store.state.isDark, lightModeBody: !$store.state.isDark }">
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.rm-link-style {
  color: white;
  text-decoration: none;
}

.margin-body {
  margin: 5px 10px 0px 0px;
}

.darkModeBody {
  background-color: #0e2c2f;
}

.lightModeBody {
  background-color: #aafada;
}

html {
  scroll-behavior: smooth;
}
body::-webkit-scrollbar  {
  width: 10px;
}
body::-webkit-scrollbar-track {
  background: black;
}
body::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
  border: 3px solid black;
}

</style>
