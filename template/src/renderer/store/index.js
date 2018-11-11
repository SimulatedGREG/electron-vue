import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  {{#isEnabled plugins 'vuex-electron'}}
  plugins: process.env.IS_WEB ? [] : [
    require('vuex-electron').createPersistedState(),
    require('vuex-electron').createSharedMutations()
  ],
  {{/isEnabled}}
  strict: process.env.NODE_ENV !== 'production'
})
