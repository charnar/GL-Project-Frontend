import { createStore } from "vuex";

// state management for main program
export default createStore({
  state: {
    loginStatus: false,
  },
  getters: {
    async loginUser({ commit }, e) {},
  },
  mutations: {
    updateLoginStatus: (state, status) => {
      state.loginStatus = status;
    },
  },
  actions: {},
  modules: {
    // any states for other small components here
  },
});
