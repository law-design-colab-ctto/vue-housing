import Vue from 'vue'
import './plugins/vuetify'
import {i18n} from  './plugins/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
require('../static/styles.scss');

Vue.config.productionTip = false

Vue.filter('myLocale', function (value) {
  return i18n.t(value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')