import Vue from 'vue'
import './plugins/vuetify'
import {i18n} from  './plugins/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
require('../static/styles.scss');

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faExclamation } from '@fortawesome/free-solid-svg-icons'
library.add(faExclamation)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.filter('myLocale', function (value) {3
  return i18n.t(value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')