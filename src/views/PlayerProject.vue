<template>
  <div class="d-flex justify-center main-div">
    <div class="d-flex frame-div rounded-lg">
      <iframe class="frame" :src="$store.state.projects[project].link"></iframe>
    </div>
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
.frame-div {
  background-color: black;
  border: solid black;
  width: 95vw;
  height: 90vh;
  margin: 5vh 5vw;
}
.frame {
  margin: 5vh 5vw 5vh 5vw;
  width: 90vw;
  height: 80vh;
}
</style>