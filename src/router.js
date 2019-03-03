import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Test from './views/Test.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/parties',
      name: 'Parties',
      component: Test
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Test
    },
    {
      path: '/utilities',
      name: 'Utilities',
      component: Test
    },
    {
      path: '/deposit',
      name: 'Deposit',
      component: Test
    },
    {
      path: '/additional',
      name: 'Additional',
      component: Test
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
