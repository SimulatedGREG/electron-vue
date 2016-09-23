import Vue from 'vue'
import Vuex from 'vuex'
{{#if_eq vueVersion 'next'}}
import * as actions from './actions'
import * as getters from './getters'
{{/if_eq}}
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  {{#if_eq vueVersion 'next'}}
  actions,
  getters,
  {{/if_eq}}
  modules,
  strict: true
})
