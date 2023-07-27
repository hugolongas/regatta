import Vue from 'vue'

const state = {
    user:[]
}

const getters ={
    getUser:state=>state.user    
}
const actions ={
    async login({commit},loginData) {
        return new Promise((resolve,reject)=>{            
            Vue.axios.post("/login?email="+loginData.email+"&password="+loginData.password).then((response)=>{
                window.console.log(response)                
                if(response!==null){
                    if(response.status==200){
                    let user = response.data; 
                    commit('saveUser',user)
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
    logout({commit}){
        return new Promise((resolve,reject)=>{
            try{
            commit('logout')
            resolve('success')
            }
            catch{
                reject("error");
            }
        });  
    }
}

const mutations = {
    saveUser(state,user){
        state.user = user
    },
    logout(state){
        state.user = [];
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}