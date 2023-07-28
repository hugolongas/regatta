import Vue from 'vue'
import axios from 'axios'
import config from '@/config'
import store from '../store/main'

const myAxios = axios.create({
    baseURL:config.apiRootUrl+'/api'
})


//Configure AXIOS
myAxios.interceptors.request.use(
    (config)=>{
        let token = store.getters.userToken;

        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error);
    }
)

Vue.axios = Vue.prototype.$http = myAxios;

export default myAxios;