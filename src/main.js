import Vue from 'vue'
import './plugins/vuetify'
import {i18n} from  './plugins/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
require('../static/styles.scss');

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faExclamation, faHome, faMoneyBillAlt, faCalendarDay, faFlag, faClipboardList, faBuilding, faUserFriends, faBars, faMoneyBill, faMoneyCheckAlt, faKey, faBolt} from '@fortawesome/free-solid-svg-icons'
library.add(faExclamation)
library.add(faHome)
library.add(faMoneyBillAlt)
library.add(faCalendarDay)
library.add(faFlag)
library.add(faClipboardList)
library.add(faBuilding)
library.add(faUserFriends)
library.add(faBars)
library.add(faMoneyBill)
library.add(faMoneyCheckAlt)
library.add(faKey)
library.add(faBolt)

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