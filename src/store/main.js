import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

import user from './modules/users'

const vuexPerist = new VuexPersistence({
    storage:window.sessionStorage,
    key:"__regatta"
})

Vue.use(Vuex)

const vuex = new Vuex.Store({
    modules:{
        user,
    },
    plugins:[vuexPerist.plugin]
});

export default vuex