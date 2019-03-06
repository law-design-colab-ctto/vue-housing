import Vue from 'vue'
import Router from 'vue-router'
import Utilities from './views/Utilities.vue';
import Rent from './views/Rent.vue';
import Unit from './views/Unit.vue';
import Terms from './views/Terms.vue';
import Parties from './views/Parties.vue';
import Deposits from './views/Deposits.vue';
import Changes from './views/Changes.vue';
import Additional from './views/Additional.vue';
import Signatures from './views/Signatures.vue';
import Appendix from './views/Appendix.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Parties',
      component: Parties
    },
    {
      path: '/parties',
      name: 'Parties',
      component: Parties
    },
    {
      path: '/unit',
      name: 'Unit',
      component: Unit
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/deposits',
      name: 'Deposits',
      component: Deposits
    },
    {
      path: '/utilities',
      name: 'Utilities',
      component: Utilities
    },
    {
      path: '/changes',
      name: 'Changes',
      component: Changes
    },
    {
      path: '/additional',
      name: 'Additional',
      component: Additional
    },
    {
      path: '/signatures',
      name: 'Signatures',
      component: Signatures
    },
    {
      path: '/appendix',
      name: 'Appendix',
      component: Appendix
    },
  ]
})
