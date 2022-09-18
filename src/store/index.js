import { createStore } from "vuex";
import router from "../router/index.js";
import registration from "./modules/registration.js";
import login from "./modules/login.js";

// state management for main program
export default createStore({
  state: {
    isAuthenticated: false,
    sessionID: "",
    username: "",
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

    setSessionID(state, sessionID) {
      state.sessionID = sessionID;
    },

    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    async logoutUser({ commit }) {
      commit("removeAuthenticate");
      console.log(this.state.isAuthenticated);
      router.push("/login");
    },
  },
  modules: {
    // any store for other components here
    login,
    registration,
  },
});
