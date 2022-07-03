<template>
  <div class="main-div">
    <v-card
        :dark="isDark"
        :color="isDark ? '#114146' : '#68d9c2'"
        v-for="projeto of projetos" :key="projeto.i"
        :class="'card' + projeto.i"
        class="card animate__animated animate__fadeInBottomRight"
        elevation="20"

        outlined
        shaped
    >
      <v-img
          contain
          :aspect-ratio="projeto.ratio"
          :src="projeto.src"
      ></v-img>
      <v-card-title :class="'cardTitle' + projeto.i">{{ projeto.title }}</v-card-title>
      <v-card-subtitle>{{ projeto.subtitle }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import {mapState} from "vuex";
import 'animate.css';

export default {
  name: "Portfolio",
  data: () => ({  }),
  computed: {
    ...mapState(['isDark', 'projetos'])
  },
}
</script>
<style scoped>

.main-div {
  display: grid;
  gap: 3%;
  grid-template-columns: 30% 30% 30%;
  padding: 10px;
  margin-left: 2%;
}

.card {
  display: grid;
  align-items: flex-end;
}

@media (max-width: 420px) {
  .main-div {
    grid-template-columns: 90%;
    margin-left: 8%;
  }

@media (max-height: 850px) {
  .main-div {
    margin-bottom: 15%;
  }
}

}

.card1 {
  padding: 20px;
}

</style>