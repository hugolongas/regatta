import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name:'clean',
    component: () => import('@/components/CleanView.vue'),
    children: [  
        {
            path: '/',
            name:'home',
            component: () => import('@/components/views/HomeView.vue')
        },
        {
          path: '/login',
          name:'login',
          component: () => import('@/components/views/LoginView.vue')
        },
        {
            path: '/register',
            name:'register',
            component: () => import('@/components/views/RegisterView.vue')
        },      
    ]
  },  
  {
    path: '',
    component: () => import('@/components/BaseView.vue'),
    children: [  
        {
            path: '/ship',
            name:'ship',
            component: () => import('@/components/views/ShipView.vue'),
            meta:{
              authorize:true
            }
        }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

router.beforeResolve((to,from,next)=>{
  if(to.matched.some(record => record.meta.authorize)){
    var user = store.getters.user
    window.console.log(user)
    if(user.length<=0) {
      window.console.log("redirect - login")
      router.push({name:"login"});
    }
    else if(user!=null) {
      window.console.log("next")
      next()
    }
    else{
      window.console.log("redirect - login")
      router.push({name:"login"});
    }
  }
  else{
    next()
  }
})

export default router