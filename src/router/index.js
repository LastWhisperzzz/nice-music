import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('../views/Recommend.vue')
  },
  {
    path: '/singer',
    component: () => import('../views/Singer.vue')
  },
  {
    path: '/rank',
    component: () => import('../views/Rank.vue')
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
