import Vue from 'vue'
{{#isEnabled plugins 'axios'}}
import axios from 'axios'
{{/isEnabled}}
{{#isEnabled plugins 'vue-electron'}}
import Electron from 'vue-electron'
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
import Router from 'vue-router'

import App from './App'
import routes from './routes'
{{/isEnabled}}

{{#isEnabled plugins 'axios'}}
Vue.http = axios
Object.defineProperties(Vue.prototype, {
  http: { get () { return axios } },
  $http: { get () { return axios } }
})
{{/isEnabled}}
{{#isEnabled plugins 'vue-electron'}}
Vue.use(Electron)
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
Vue.use(Router)
{{/isEnabled}}
Vue.config.debug = true

{{#isEnabled plugins 'vue-router'}}
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
{{else}}
import App from './App'

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
{{/isEnabled}}
