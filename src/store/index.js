import { createStore } from "vuex";

// state management for main program
export default createStore({
  state: {
    isAuthenticated: false,
    sessionID: "",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    // any store for other small components here
  },
});
