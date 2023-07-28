import Vue from 'vue'

import vuetify from './plugins/vuetify'

import App from './App.vue'

import router from './plugins/router'
import axios from './plugins/axios'

import store from './store/main'

Vue.use(vuetify);

Vue.config.productionTip = false
Vue.use(store);
new Vue({
  router,  
  axios,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')