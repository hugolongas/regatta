import Vue from 'vue'
import noty from 'vuejs-noty'

import "vuejs-noty/dist/vuejs-noty.css"

const opts = {
  //timeout: 4000,
  //progressBar: true,
  theme: 'metroui',
  layout: 'topRight',
  timeout: 1000,
  progressBar: true,
  /*
  animation: {
    open: 'animated fadeInRight',
  }
  */
}

Vue.use(noty, opts)
