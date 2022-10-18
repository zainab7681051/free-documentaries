import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTailwind from 'vue-tailwind'

import {
	sync
} from 'vuex-router-sync'

Vue.config.productionTip = true

sync(store, router)


new Vue({
		router,
		store,
		vuetify,
		VueTailwind,
		render: h => h(App)
	})
	.$mount('#app')