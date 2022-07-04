import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import titleMixin from "@/services/titleMixin";
import VAnimateCss from "v-animate-css";

Vue.config.productionTip = false
Vue.use(VAnimateCss);

new Vue({
  router,
  store,
  vuetify,
  VAnimateCss,
  mixins: [titleMixin],
  render: h => h(App)
}).$mount('#app')

Vue.mixin(titleMixin)