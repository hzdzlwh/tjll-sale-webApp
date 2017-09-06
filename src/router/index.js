import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Case from '@/components/case'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
