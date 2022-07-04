<template>
  <div>
    <section class="apresentacao" :class="{ darkMode: isDark }">
      <h2 class="titulo-apresentacao animate__animated animate__fadeInUpBig">
        Amante de tecnologia desenvolvedor de software.
      </h2>
      <p class="paragrafo-apresentacao animate__animated animate__fadeInUpBig">
        Apesar de ser um entusiasta de temas de computação em baixo nível e já ter me
        <br>
        aventurado em desenvolvimento para sistemas embarcados, tenho maior experiência
        <br>
        com desenvolvimento web de sofwares de gestão.
        <br>
        <br>
        Tenho 24 anos, sou estudante de Análise e Desenvolvimento de Sistemas pela Unisul.
        <br>
        Antes da pandemia eu andava de skate, agora eu passo a boa parte do meu tempo livre
        <br>
        estudando temas relacionados a desenvolvimento de software e segurança da informação.
      </p>
      <div class="centralizado">
        <div :class="{width: classSelected}" class="back-dark">
          <a
              href="#sobre-carousel"
              class="remove-link-style"
          >
            <v-icon class="centralizado">mdi-arrow-down</v-icon>
          </a>
        </div>
      </div>
    </section>
    <v-divider id="sobre-carousel"></v-divider>
    <div>
      <article class="over-carousel">
        <h2 :class="{ darkMode: isDark }">Alguns dos projetos desenvolvidos</h2>
        <v-carousel
            cycle
            interval="5000"
            hide-delimiters
            show-arrows-on-hover
            class="carousel"
            @change="(i) => colorChange(i)"
        > <v-tab to="/projetos">
          <v-carousel-item
              v-for="(item,i) in projects"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
          >
            <v-img
                contain
                :aspect-ratio="item.ratio"
                :src="item.src"
                :alt="item.alt"
            ></v-img>
            <v-footer :color="item.class.footerColor" class="footer-carousel">
              <h3 style="margin-bottom: 10%" class="centralizado branco" :class="[item.class.footerText]">{{ item.title }}</h3>
            </v-footer>
          </v-carousel-item>
        </v-tab>
        </v-carousel>
      </article>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";
import 'animate.css';

export default {
  title: 'Antônio Sgarbi',
  name: "Home",

  created() {
    this.classSelected()
  },

  data() {
    return {
      positionCarousel: 0,
      optionsSize: ['vw80', 'vw60', 'vw40', 'vw20'],
    }
  },

  computed: {
    ...mapState(['isDark', 'footerColor', 'projects'])
  },

  methods: {
    classSelected() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          if (i === 4) {
            this.classSelected()
          }
          return this.optionsSize[i]
        }, 2000)
      }
    },

    colorChange(number) {
      let colorClasses = ['#323C93', '#4B3424', '#800000']
      this.$store.state.footerColor=colorClasses[number]
    }


}
}
</script>

<style scoped>
@font-face {
  font-family: "BodoniXT";
  src: url("../assets/BodoniXT.ttf") format("truetype");
}

.branco {
  color: white;
}

.darkMode {
  color: #dcf5eb;
}

.apresentacao {
  padding: 0 0 1% 2%;
}

.titulo-apresentacao {
  font-family: 'BodoniXT', serif;
  font-size: xx-large;
}

.paragrafo-apresentacao {
  font-family: Roboto, sans-serif;
  font-size: x-large;
}

.carousel {
  padding: 2%;
  margin: 0;
}

.over-carousel {
  margin-left: 5px;
  margin-top: 50px;
}

.centralizado {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.remove-link-style {
  color: white;
  text-decoration: none;
}

.back-dark {
  border-radius: 7px;
  background-color: darkslategray;
}

.footer-carousel {
  height: 200px;
}

</style>
