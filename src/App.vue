<template>
  <v-app>
    <Nav />
    <v-main :class="$store.state.isDark ? 'darkModeBody' : 'lightModeBody'">
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
.remove-link-style {
  color: white;
  text-decoration: none;
}

.margin-body {
  margin: 5px 10px 0 0;
}

.darkModeBody {
  background-color: darkslategray;
}

.lightModeBody {
  background-color: #EFBED1;
}

html {
  scroll-behavior: smooth;
}

:target {
  scroll-margin-top: .8em;
}


</style>
