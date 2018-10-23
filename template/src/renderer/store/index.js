import Vue from 'vue'
import Vuex from 'vuex'

{{#isEnabled plugins 'vuex-electron'}}
import { createPersistedState, createSharedMutations } from 'vuex-electron'

{{/isEnabled}}
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  {{#isEnabled plugins 'vuex-electron'}}
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  {{/isEnabled}}
  strict: process.env.NODE_ENV !== 'production'
})
