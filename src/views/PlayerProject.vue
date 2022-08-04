<template>
  <section>
    <h2 class="text-center">{{ projects[indexProject].title }}</h2>
    <div class="d-flex justify-space-around">
      <div v-for="(technology, index) of project.technologies" :key="index" class="div-for">
        <div class="align-self-end">
        <v-img height="auto" min-width="50px" max-width="10vw" :src="technology.logo" :alt="technology.alt"/>
        </div>
      </div>
    </div>

    <div v-if="project.hasFront" class="d-flex justify-center main-div">
      <v-card :color="colorPrimary" class="d-flex card rounded-lg">
        <iframe class="frame" title="project" :src="project.link"></iframe>
      </v-card>
    </div>
  </section>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "PlayerProject",
  data: () => ({
    indexProject: 0,
    project: null
  }),
  created() {
    this.project = this.projects[this.$route.params.project]
    this.project.technologies.forEach(index => {
      this.project.technologies[index] = this.$store.state.technologies[index]
    })
  },
  computed: {
    ...mapState(['colorPrimary', 'projects'])
  },
  methods: {},
}
</script>

<style scoped>
.main-div {
  height: 80vh;
  margin-bottom: 10%;
}

.div-for {
  display: grid;
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