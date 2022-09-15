import { createStore } from "vuex";
import router from "../router/index.js";

// state management for main program
export default createStore({
  state: {
    isAuthenticated: false,
    sessionID: "",
  },
  getters: {
    getAuthentication(state) {
      return state.isAuthenticated;
    },
  },
  mutations: {
    setAuthenticate(state) {
      state.isAuthenticated = true;
    },

    removeAuthenticate(state) {
      state.isAuthenticated = false;
    },
  },
  actions: {
    async checkLogin({ commit }) {
      // condition to check login goes here
      if (true) {
        commit("setAuthenticate");
        console.log(this.state.isAuthenticated);
        router.push("/");
      }
    },

    async logoutUser({ commit }) {
      commit("removeAuthenticate");
      console.log(this.state.isAuthenticated);
      router.push("/login");
    },
  },
  modules: {
    // any store for other small components here
  },
});
