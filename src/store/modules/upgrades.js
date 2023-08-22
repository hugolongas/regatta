import Vue from 'vue'

const state = {
    upgrades:[]
}

const getters ={
    upgrades:state=>state.upgrades,
    
}
const actions ={
    async syncUpgrades({commit}) {
        return new Promise((resolve,reject)=>{            
            Vue.axios.get("/upgrades/all ").then((response)=>{
                window.console.log(response)                
                if(response!==null){
                    if(response.status==200){
                    let upgrades = response.data; 
                    commit('syncUpgrades',upgrades)
                    resolve('success')
                    }
                }
                else{
                    resolve('Error');
                }
            }).catch(error=>{
                window.console.log("error:",error);
                reject(error);
            }); 
        });        
    },
}

const mutations = {
    syncUpgrades(state,upgrades){
        state.upgrades = upgrades.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}