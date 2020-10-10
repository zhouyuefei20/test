import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      component: () => import('@/views/user.vue')
    },
    {
      path: '/mine',
      component: () => import('@/views/mine.vue')
    }
  ]
})
export default router