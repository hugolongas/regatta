import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'clean',
    component: () => import('@/components/CleanView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/components/views/HomeView.vue')
      },
      {
        path: '/validate',
        name: 'validate',
        component: () => import('@/components/views/ValidateView.vue')
      },
    ]
  },
  {
    path: '',
    component: () => import('@/components/BaseView.vue'),
    children: [
      {
        path: '/ship',
        name: 'ship',
        component: () => import('@/components/views/ShipView.vue'),
        meta: {
          authorize: true
        }
      },
      {
        path: '/athletes',
        name: 'athlete',
        component: () => import('@/components/views/AthleteListView.vue'),
        meta: {
          authorize: true
        }
      },
      {
        path: '/races',
        name: 'races',
        component: () => import('@/components/views/RaceListView.vue'),
        meta: {
          authorize: true
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.beforeResolve((to, from, next) => {
  var user = store.getters.user
  if (to.matched.some(record => record.meta.authorize)) {
    window.console.log(user)
    if (user.length <= 0) {
      window.console.log("redirect - login")
      router.push({ name: "home" });
    }
    else if (user != null) {
      window.console.log("next")
      next()
    }
    else {
      window.console.log("redirect - login")
      router.push({ name: "home" });
    }
  }
  else {
    if (user.length > 0) {
      window.console.log("redirect - login")
      router.push({ name: "ship" });
    }
    next()
  }
})

export default router