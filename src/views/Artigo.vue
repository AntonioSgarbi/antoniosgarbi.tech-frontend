<template>
  <v-container>
    <div v-for="artigo in artigos" :key="artigo" class="mb-3">
      <a :href="artigo.link" class="rm-link-style" target="_blank">
        <v-card :dark="isDark">
          <v-card-title class="text-break">{{ artigo.title }}</v-card-title>
          <v-card-text>
            <p>{{ artigo.text }}</p>
          </v-card-text>
        </v-card>
      </a>
    </div>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Artigo",
  data() {
    return {
      artigos: [
        {
          title: "Política de escalonamento do sistema operacional",
          link: 'https://dev.to/antoniosgarbi/politica-de-escalonamento-do-sistema-operacional-27fn',
          text: 'O conteúdo desse texto foi produzido originalmente para a disciplina de Ambientes Computacionais ' +
              'e Conectividade, tendo sido modificado para internet posteriormente.'
        },
      ]
    }
  },
  computed: {
    ...mapState(['isDark', 'colorPrimary', 'colorSecondary']),
  },
}
</script>