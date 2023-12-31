import Vue from 'vue'

const state = {
    dashboardTeams:[],
    dashboardUsers:[]
}

const getters ={
    getDashboardTeams:state=>{
        var color = ["rgba(252, 136, 3, 0.2)", "rgba(252, 3, 3, 0.2)", "rgba(65, 105, 225, 0.2)", "rgba(255, 255, 0, 0.2)", "rgba(255, 192, 203,0.2)"];
        var borderColor = ["#fc8803", "#fc0303", "#4169e1", "#ffff00", "#FFC0CB"];
        var chartData = {
            labels: state.dashboardTeams.map(item => item.name),
            datasets: [{
              backgroundColor: state.dashboardTeams.map(item=>color[item.id-1]),
              borderColor: state.dashboardTeams.map(item=>borderColor[item.id-1]),
              data: state.dashboardTeams.map(item => item.total_points),
              borderWidth: 1
            }
            ]
          }
          return chartData
    },
    getDashboardUsers:state=>state.dashboardUsers
}
const actions ={
    async syncDashboardTeams({commit}) {
        return new Promise((resolve,reject)=>{     

            Vue.axios.get("/leaderboard/teams").then((response)=>{
                if(response!==null){
                    if(response.status==200){
                    let teams = response.data; 
                    commit('syncDashboardTeams',teams)
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
    async syncDashboardUsers({commit}) {
        return new Promise((resolve,reject)=>{     
            Vue.axios.get("/leaderboard").then((response)=>{
                if(response!==null){
                    if(response.status==200){
                    let users = response.data; 
                    commit('syncDashboardUsers',users)
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
    syncDashboardTeams(state,teams){
        state.dashboardTeams = teams.data
    },
    syncDashboardUsers(state,users){
        state.dashboardUsers = users.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}