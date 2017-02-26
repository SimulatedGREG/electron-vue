import Vue from 'vue'
{{#isEnabled plugins 'vue-resource'}}
import Resource from 'vue-resource'
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
import Router from 'vue-router'

import App from '../renderer/App'
import routes from '../renderer/routes'
{{/isEnabled}}

{{#isEnabled plugins 'vue-resource'}}
Vue.use(Resource)
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
import App from '../renderer/App'

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
{{/isEnabled}}
