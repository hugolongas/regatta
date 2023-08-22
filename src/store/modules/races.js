import Vue from 'vue'

const state = {
    races:[],
    dashboard:[]
}

const getters ={
    races:state=>state.races,
    dashboard:state=>state.dashboard,
    dashboardUsers:state=>state.dashboard.users,
    dashboardTeams:state=>state.dashboard.teams
    
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
    async Dashboard({commit}){
        return new Promise((resolve,reject)=>{            
            Vue.axios.get("/dashboard/all").then((response)=>{
                window.console.log(response)                
                if(response!==null){
                    if(response.status==200){
                    let result = response.data; 
                    commit('Dashboard',result)
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
    }
}

const mutations = {
    SyncRaces(state,races){
        state.races = races.data
    },
    Dashboard(state,dashboard){
        state.dashboard = dashboard.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}