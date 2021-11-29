export default {
  namespaced:true,
  actions: {
    increment(context, value) {
      context.commit('INCREMENT', value)
    },
    decrement(context, value) {
      context.commit('DECREMENT', value)
    },
    incrementOdd({ state, commit }, value) {
      if (state.sum % 2) {
        commit('INCREMENT', value)
      }
    },
    incrementWait({ commit }, value) {
      setTimeout(() => {
        commit('INCREMENT', value)
      }, 500)
    },
  },
  mutations: {
    INCREMENT(state, value) {
      state.sum += value
    },
    DECREMENT(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0,
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    },
  },
}