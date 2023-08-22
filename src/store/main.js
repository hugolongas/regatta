import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

import user from './modules/users'
import athlete from './modules/athlete'
import teams from './modules/team'
import ship from './modules/ship'
import upgrades from './modules/upgrades'
import races from './modules/races'


const vuexPerist = new VuexPersistence({
    storage:window.sessionStorage,
    key:"__regatta"
})

Vue.use(Vuex)

const vuex = new Vuex.Store({
    modules:{
        user,
        athlete,
        teams,
        ship,
        upgrades,
        races
    },
    plugins:[vuexPerist.plugin]
});

export default vuex