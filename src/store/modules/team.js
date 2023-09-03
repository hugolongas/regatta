import Vue from 'vue'

const state = {
    teams:[]
}

const getters ={
    teams:state=>state.teams,
    selectTeams:state=>state.teams.map(item => {
        const team = {};
    
        team.id = item.id;
        team.name = item.name;
    
        return team;
    })
    
}
const actions ={
    async syncTeams({commit}) {
        return new Promise((resolve,reject)=>{            
            Vue.axios.get("/teams/all").then((response)=>{
                window.console.log(response);
                if(response!==null){
                    if(response.status==200){
                    let teams = response.data; 
                    commit('syncTeams',teams)
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
    syncTeams(state,teams){
        state.teams = teams.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}