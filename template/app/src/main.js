import Vue from 'vue'
{{#isEnabled plugins 'vue-electron'}}
import Electron from 'vue-electron'
{{/isEnabled}}
{{#isEnabled plugins 'vue-resource'}}
import Resource from 'vue-resource'
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
import Router from 'vue-router'

import App from './App'
import routes from './routes'
{{/isEnabled}}

{{#isEnabled plugins 'vue-electron'}}
Vue.use(Electron)
{{/isEnabled}}
{{#isEnabled plugins 'vue-resource'}}
Vue.use(Resource)
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
Vue.use(Router)
{{/isEnabled}}
Vue.config.debug = true

{{#isEnabled plugins 'vue-router'}}
{{#if_eq vueVersion 'next'}}
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

{{#if eslint}}{{#if_eq eslintConfig 'standard'}}/* eslint-disable no-new */{{/if_eq}}{{/if}}
new Vue({
  router,
  ...App
}).$mount('#app')
{{else}}
const router = new Router()

router.map(routes)
router.beforeEach(() => {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/'
})

router.start(App, 'app')
{{/if_eq}}
{{else}}
import App from './App'

{{#if eslint}}{{#if_eq eslintConfig 'standard'}}/* eslint-disable no-new */{{/if_eq}}{{/if}}{{#if_eq vueVersion 'next'}}
new Vue({
  ...App
}).$mount('#app')
{{else}}
new Vue({
  el: 'body',
  components: { App }
})
{{/if_eq}}
{{/isEnabled}}
