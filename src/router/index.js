// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import Router from 'vue-router'
Vue.use(Router)
// 首页
import home from '../pages/home.vue'



const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

// router.beforeEach((to, from, next) => {

// })

export default router