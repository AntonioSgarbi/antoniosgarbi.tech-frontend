import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footerColor: "green",
    isDark: false

  },
  getters: {

  },
  mutations: {
    setDark(state) {
      console.log("chaged state: " + state.isDark)
      state.isDark = !state.isDark;
    },
    setFooterColor(state, color) {
      state.footerColor = color;
    },
  },
  actions: {
  },
  modules: {
  }
})


