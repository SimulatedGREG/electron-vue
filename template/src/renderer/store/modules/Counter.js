const state = {
  main: 0
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    {{#if_eq eslintConfig 'airbnb'}}state.main = state.main - 1{{else}}state.main--{{/if_eq}}
  },
  INCREMENT_MAIN_COUNTER (state) {
    {{#if_eq eslintConfig 'airbnb'}}state.main = state.main + 1{{else}}state.main++{{/if_eq}}
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
