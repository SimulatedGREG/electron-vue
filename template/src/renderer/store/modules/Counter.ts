import * as Vuex from 'vuex'

interface CounterState {
  main: number
}

const state: CounterState = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state: CounterState) {
    {{#if_eq eslintConfig 'airbnb'}}state.main = state.main - 1{{else}}state.main--{{/if_eq}}
  },
  INCREMENT_MAIN_COUNTER (state: CounterState) {
    {{#if_eq eslintConfig 'airbnb'}}state.main = state.main + 1{{else}}state.main++{{/if_eq}}
  }
}

const actions = {
  someAsyncTask ({ commit }: Vuex.Store<CounterState>) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
