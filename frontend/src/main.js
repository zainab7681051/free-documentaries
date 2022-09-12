import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false

sync(store, router)

Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
