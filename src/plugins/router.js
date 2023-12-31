import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/components/CleanView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/components/views/DashboardView.vue')
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
        path: '/vaixell',
        name: 'ship',
        component: () => import('@/components/views/ShipView.vue'),
        meta: {
          authorize: true
        }
      },
      {
        path: '/mariners',
        name: 'athlete',
        component: () => import('@/components/views/AthleteListView.vue'),
        meta: {
          authorize: true
        }
      },
      {
        path: '/curses',
        name: 'races',
        component: () => import('@/components/views/RaceListView.vue'),
        meta: {
          authorize: true
        }
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/views/DashboardView.vue'),
        meta: {
          authorize: true
        }
      },
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
    if (user.length <= 0) {
      router.push({ name: "home" });
    }
    else if (user != null) {
      next()
    }
    else {
      router.push({ name: "home" });
    }
  }
  else {
    if (user!=null) {
      router.push({ name: "ship" });
    }
    next()
  }
})

export default router