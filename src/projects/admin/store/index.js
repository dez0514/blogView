import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false
  },
  mutations: {
    updateCollapse (state, payload) {
      state.isCollapse = payload.isCollapse
    },
  },
  actions: {
  },
  modules: {
  }
})
