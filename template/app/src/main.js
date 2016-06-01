import Vue from 'vue'
{{#isEnabled plugins 'vue-resource'}}
import Resource from 'vue-resource'
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
import Router from 'vue-router'

import App from './App'
import routes from './routes'
{{/isEnabled}}

{{#isEnabled plugins 'vue-resource'}}
Vue.use(Resource)
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
Vue.use(Router)
{{/isEnabled}}
Vue.config.debug = true

{{#isEnabled plugins 'vue-router'}}
const router = new Router()

router.map(routes)
router.beforeEach(() => {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/'
})

router.start(App, 'app')
{{else}}
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
{{/isEnabled}}
