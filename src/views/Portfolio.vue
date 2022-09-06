<template>
  <div class="main-div">
    <v-hover
        class="card animate__animated animate__fadeInBottomRight"
        v-for="(projeto, index) of projects" :key="index"
        v-slot="{ hover }"
    >
      <v-card
          :dark="isDark"
          max-width="400"
          hover
          :loading="projeto.loading"
      >
        <v-img
            :aspect-ratio="16/9"
            :src="projeto.src"
        >
          <v-expand-transition>
            <div
                v-if="hover"
                class="d-flex align-center transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
                :class="classeCorExpanded()"
            >
              <div class="d-flex justify-space-around" style="width: 70%">
                <a class="rm-link-style" :href="projeto.github" target="_blank">
                  <v-btn
                      :style="btnBorderStyle()"
                      :color="colorPrimary"
                      :class="classeTextoCard()"
                      fab
                      large
                      right
                      top
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </a>
                <v-btn
                    :style="btnBorderStyle()"
                    :color="colorPrimary"
                    :class="classeTextoCard()"
                    @click="navigateToPlayer(index)"
                    fab
                    large
                    right
                    top
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </div>
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text
            class="pt-6"
            @click="navigateToPlayer(index)"
            style="position: relative;"
        >
          <h3 class="text-h4 font-weight-light mb-2" :class="classeTextoCard()">
            <strong>
              {{ projeto.title }}
            </strong>
          </h3>
          <h3 class="font-weight-light text-h6 mb-2">
            <strong>
              {{ projeto.subtitle }}
            </strong>
          </h3>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

import router from "@/router";

export default {
  name: "Portfolio",
  components: {},
  data: () => ({}),
  computed: {
    ...mapState(['isDark', 'projects', 'colorPrimary', 'colorSecondary']),
    ...mapGetters(['projetoIsLoading'])
  },
  methods: {
    ...mapMutations(['changeProjectIsLoading']),
    navigateToPlayer(indexProject) {
      this.changeProjectIsLoading(indexProject)
      setTimeout(() => {
        router.push({ name: 'player', params: { project: indexProject } })
        this.changeProjectIsLoading(indexProject)
      }, 1200)
    },
    btnBorderStyle() {
      return this.isDark ? 'border: solid white' : 'border: solid black'
    },
    classeTextoCard() {
      return this.isDark ? ['borderLight', 'white--text'] : ['borderDark', 'black--text']
    },
    classeCorExpanded() {
      return this.isDark ? 'expandedDark' : 'expandedLight'
    }
  }
}
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.main-div {
  display: grid;
  gap: 3%;
  grid-template-columns: 30% 30% 30%;
  padding: 10px;
  margin-left: 2%;
}

.card {
  display: grid;
  align-content: center;
}

.expandedDark {
  background-color: rgba(17, 65, 70, 0.5);
}

.expandedLight {
  background-color: rgba(104, 217, 194, 0.7);
}

@media (max-width: 520px) {
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

.cardTitle {
  margin-top: 30vh;
  align-self: end;

}

.cardSubtitle {
  align-self: flex-end;
}

</style>