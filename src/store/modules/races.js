import Vue from 'vue'

const state = {
    races:[]
}

const getters ={
    races:state=>state.races,
    
}
const actions ={
    async SyncRaces({commit}) {
        return new Promise((resolve,reject)=>{            
            Vue.axios.get("/race/all").then((response)=>{
                window.console.log(response)                
                if(response!==null){
                    if(response.status==200){
                    let races = response.data; 
                    commit('SyncRaces',races)
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
    SyncRaces(state,races){
        state.races = races.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}