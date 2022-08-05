<template>
  <section>
    <h2 class="text-center">{{ project.title }}</h2>

    <div class="d-flex flex-column-reverse mb-10">
      <div v-if="project.hasFront" class="d-flex justify-center main-div mb-3">
        <v-card :color="colorPrimary" class="d-flex card rounded-lg">
          <iframe class="frame" title="project" :src="project.link"></iframe>
        </v-card>
      </div>
      <div class="d-flex justify-space-around">
        <div v-for="(technology, index) of project.technologies" :key="index" class="div-for zoom">
          <div class="align-self-end">
            <v-img height="auto" min-width="50px" max-width="10vw" :src="project.technologies[index].logo" :alt="technology.alt"/>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-center pt-16 pb-16">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a v-if="project.swagger" class="rm-link-style d-flex justify-center pe-3" :href="project.swagger" target="_blank">
            <v-btn v-animate-css.hover="'tada'" :color="colorPrimary" fab large v-bind="attrs" v-on="on">
              <v-img max-width="40px" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"></v-img>
            </v-btn>
          </a>
        </template>
        <span>Abrir OpenAPI</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a v-if="project.docker" class="rm-link-style d-flex justify-center pe-3" :href="project.docker" target="_blank">
            <v-btn v-animate-css.hover="'tada'" :color="colorPrimary" fab large v-bind="attrs" v-on="on">
              <v-img max-width="40px" src="https://miro.medium.com/max/256/1*SjXzIs2HZtJHUwqJgwox_A.png"></v-img>
            </v-btn>
          </a>
        </template>
        <span>Abrir Docker.hub</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a class="rm-link-style d-flex justify-center" :href="project.github" target="_blank">
            <v-btn v-animate-css.hover="'tada'" :color="colorPrimary" fab large v-bind="attrs" v-on="on">
              <v-img max-width="40px" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png"></v-img>
            </v-btn>
          </a>
        </template>
        <span>Abrir código-fonte</span>
      </v-tooltip>
    </div>

  </section>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "PlayerProject",
  data: () => ({
    project: null
  }),
  created() {
    console.log(this.projects)
    this.project = this.projects[this.$route.params.project]
    console.log(this.project)
    this.project.technologies.forEach(tech => {
      this.project.technologies[this.project.technologies.indexOf(tech)] = this.$store.state.technologies[tech]
    });
  },
  computed: {
    ...mapState(['colorPrimary', 'projects']),
  },
  methods: {},
}
</script>

<style scoped>
.main-div {
  height: 80vh;
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
.zoom:hover {
  transform: scale(1.2);
}
</style>