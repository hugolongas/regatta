import Vue from 'vue'

const state = {
    ship: {
        maxSpeed: 0,
        maxAcceleration: 0,

    }
}

const getters = {
    //ship:state=>state.ship,
    ship: state => {

        let s = state.ship

        s.maxSpeed = s.speed
        s.maxAcceleration = s.acceleration

        if (s.upgrades != null && s.upgrades.length > 0)
            s.upgrades.forEach(upgrade => {
                if (upgrade.upgrade_type == "speed")
                    s.maxSpeed *= (1 + upgrade.value / 100);

                if (upgrade.upgrade_type == "acceleration")
                    s.maxSpeed *= (1 + upgrade.value / 100);
            });

        let maxStrength = 0;
        let maxStamina = 0;
        if (s.athletes != null && s.athletes.length > 0)
            s.athletes.forEach(a => {
                maxStrength += a.strength;
                maxStamina += a.stamina;
            });
        let crewSpeed = maxStrength / 100;
        let crewAcceleration = maxStamina / 100;
        s.crewSpeed = crewSpeed;
        s.crewAcceleration = crewAcceleration;
        s.maxSpeed += crewSpeed;
        s.maxAcceleration += crewAcceleration;

        return s;
    },
    shipMaxSpeed: state => {
        return state.ship.speed * 2;
    }

}
const actions = {
    async syncShip({ commit }) {
        return new Promise((resolve, reject) => {
            Vue.axios.get("/ship/get").then((response) => {
                if (response !== null) {
                    if (response.status == 200) {
                        let ship = response.data;
                        commit('syncShip', ship)
                        resolve('success')
                    }
                }
                else {
                    resolve('Error');
                }
            }).catch(error => {
                window.console.log("error:", error);
                reject(error);
            });
        });
    },
}

const mutations = {
    syncShip(state, ship) {
        state.ship = ship.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}