import Vue from 'vue'

const state = {
    user: null,
    access_token: ""
}

const getters = {
    user: state => state.user,
    userToken: state => state.access_token
}
const actions = {
    async login({ commit }, loginData) {
        return new Promise((resolve, reject) => {
            Vue.axios.post("/login?email=" + loginData.email + "&password=" + loginData.password).then((response) => {
                if (response !== null) {
                    if (response.status == 200) {
                        let resp = response.data;
                        if(resp.result){
                            commit('saveUser', resp.data)
                            resolve('success')
                        }
                        else{
                            resolve(resp.data)
                        }
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
    async logout({ commit }) {
        return new Promise((resolve, reject) => {
            Vue.axios.post("/logout").then((response) => {
                if (response !== null) {
                    if (response.status == 200) {
                        commit('logout')
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
    async getUser({ commit }) {
        return new Promise((resolve, reject) => {
            Vue.axios.get("/user").then((response) => {
                window.console.log(response)
                if (response !== null) {
                    if (response.status == 200) {
                        let user = response.data;
                        commit('getuser', user);
                        
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
    }
}

const mutations = {
    saveUser(state, user) {
        state.user = user.user;
        state.access_token = user.access_token;
    },
    getuser(state, user) {
        state.user = user.data;
    },
    logout(state) {
        state.user = null;
        state.access_token = "";
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}