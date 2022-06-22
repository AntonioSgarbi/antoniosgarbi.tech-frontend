<template>
  <v-container class="margin-body">
    <h1 :class="conditionalStyle">Contato</h1>
    <a target="_blank"
       class="rm-link-style"
       :class="conditionalStyle"
       href="https://web.whatsapp.com/send?phone=5548991706401">
      <h2>
        <v-icon :class="conditionalStyle">mdi-whatsapp</v-icon>WhatsApp (48)9 9170-6401
      </h2>
    </a>
    <a target="_blank"
       :class="conditionalStyle"
       class="rm-link-style"
       href="mailto:antonio.sgarbi@hotmail.com">
      <h2>
        <v-icon :class="conditionalStyle">mdi-email-outline</v-icon>antonio.sgarbi@hotmail.com
      </h2>
    </a>
    <br>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Contato",
  computed: {
    ...mapState(['isDark']),
    conditionalStyle () {
      return { dark: this.isDark, light: !this.isDark }
    }
  }
}
</script>

<style scoped>
.light {
  color: black;
}
.dark {
  color: #dcf5eb;
}

</style>
