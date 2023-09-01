import Vue from 'vue'

import vuetify from './plugins/vuetify'

import App from './App.vue'

import router from './plugins/router'
import axios from './plugins/axios'
import echo from './plugins/echo';

import store from './store/main'


import '@/plugins/notifications'

import { showMessagesMixin } from '@/mixins/showMessagesMixin'
Vue.mixin(showMessagesMixin)

Vue.use(vuetify);
Vue.use(echo);
Vue.config.productionTip = false
Vue.use(store);

new Vue({
  router,  
  axios,
  store,
  vuetify,
  echo,
  render: h => h(App)
}).$mount('#app')