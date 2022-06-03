<template>
  <v-footer app :color="this.$store.state.footerColor" class="footerContainer">
    <p></p>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

}
</script>

<style>
.footerContainer {
  height: 15px;
}
</style>