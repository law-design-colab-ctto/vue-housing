import Vue from 'vue'
import Router from 'vue-router'
import Test from './views/Test.vue';
import Utilities from './components/Utilities.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Parties',
      component: Test
    },
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
      component: Utilities
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
  ]
})
