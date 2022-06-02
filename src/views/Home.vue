<template>
  <div>
    <div class="apresentacao">
      <h2 class="titulo-apresentacao">
        Amante de tecnologia desenvolvedor de software.
      </h2>
      <br>
      <p class="paragrafo-apresentacao">
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
    </div>
    <div>
      <h2>Alguns dos projetos desenvolvidos</h2>
      <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          delimiter-icon="mdi-checkbox-multiple-blank-circle"
          :continuous="true"
      >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :href="item.url"
            :target="'_blank'"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
          <div>
            <h3 class="centralizado">{{ item.title }}</h3>
          </div>
          <v-img
            contain
            :aspect-ratio="item.ratio"
            :src="item.src"
            :alt="item.alt"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Home - Antônio Sgarbi',
  name: "Home",

  data() {
    return {
      items: [
        {
          src: 'https://cdn.pixabay.com/photo/2020/05/02/12/35/fish-shop-5121241_960_720.png',
          title: "Sistema de Controle de Peixaria",
          alt: 'Imagem de Borja Blanco Cinza em Pixabay, arte mostra homem de avental sem rostoatrás' +
              ' de balcão cheio de frutos do mar, sobre sua cabeça um letreiro azul escrito Fish Shop',
          url: 'http://google.com',
          ratio: 3
        },
        {
          src: 'https://i.pinimg.com/originals/bc/6b/77/bc6b779e800744abe0122646ffe5ae51.png',
          ratio: 2

        }
      ],
    }
  },

}
</script>

<style scoped>
@font-face {
  font-family: "BodoniXT";
  src: url("../assets/BodoniXT.ttf") format("truetype");
}

.apresentacao {
  padding: 0% 0% 1% 2%;
}

.titulo-apresentacao {
  font-family: 'BodoniXT', serif;
  font-size: xx-large;
}

.paragrafo-apresentacao {
  font-family: Roboto, sans-serif;
  font-size: x-large;
  padding: 1%;
  border: solid gray;
}

.centralizado {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

</style>
