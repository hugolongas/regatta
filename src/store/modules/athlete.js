import Vue from 'vue'

const state = {
    athletes:[]
}

const getters ={
    athletes:state=>state.athletes,
    
}
const actions ={
    async syncAthletes({commit}) {
        return new Promise((resolve,reject)=>{            
            Vue.axios.get("/athlete/all ").then((response)=>{    
                if(response!==null){
                    if(response.status==200){
                    let athletes = response.data; 
                    commit('syncAthletes',athletes)
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
    syncAthletes(state,athletes){
        state.athletes = athletes.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}