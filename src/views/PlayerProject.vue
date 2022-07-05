<template>
  <div class="d-flex justify-center main-div">
      <v-card :color="$store.state.colorPrimary" class="d-flex card rounded-lg">
        <iframe class="frame" :src="$store.state.projects[project].link"></iframe>
      </v-card>
  </div>
</template>
<script>
export default {
  name: "PlayerProject",
  data: () => ({
    project: 0
  }),
  created() {
    this.project = this.$route.params.project
  },
  methods: {

  },
}
</script>

<style scoped>
.main-div {
 width: 100vw;
 height: 80vh;
 margin-bottom: 10%;
}
.card {
  width: 95vw;
  height: 90vh;
  margin: 2vh 2vh;
}
.frame {
  border: solid black;
  margin: 5vh 5vh;
  width: 90vw;
  height: 80vh;
}
</style>