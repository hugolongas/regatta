import Vue from 'vue'
import VueRouter from 'vue-router'

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
            component: () => import('@/components/views/ShipView.vue')
        }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

export default router