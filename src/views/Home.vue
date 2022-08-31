<template>
  <div>
    <section class="apresentacao" :class="{ darkMode: isDark }">
      <h2 class="titulo-apresentacao animate__animated animate__fadeInRightBig">
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
    </section>
  </div>
</template>

<script>

import {mapState} from "vuex";
import 'animate.css';

export default {
  title: 'Antônio Sgarbi',
  name: "Home",

  data() {
    return {
      positionCarousel: 0,
      optionsSize: ['vw80', 'vw60', 'vw40', 'vw20'],
    }
  },

  computed: {
    ...mapState(['isDark', 'footerColor', 'projects']),
  }
  }

</script>

<style scoped>
@font-face {
  font-family: "BodoniXT";
  src: url("../assets/BodoniXT.ttf") format("truetype");
}

.darkMode {
  color: #dcf5eb;
}

.apresentacao {
  padding: 0 0 1% 0;
}

.titulo-apresentacao {
  font-family: 'BodoniXT', serif;
  font-size: xx-large;
  padding-left: 3vw;
  padding-bottom: 2vh;
}

.paragrafo-apresentacao {
  padding-left: 3vw;
  font-family: Roboto, sans-serif;
  font-size: x-large;
}

</style>
