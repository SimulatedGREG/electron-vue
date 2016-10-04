{{#if_eq vueVersion '2.x'}}
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
{{else}}
import Vue from 'vue'

export default {
  '/': {
    component: Vue.component('landing-page', require('./components/LandingPageView')),
    name: 'landing-page'
  }
}
{{/if_eq}}
