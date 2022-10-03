import { createStore } from "vuex";
import router from "@/router/index.js";
import registration from "./modules/registration.js";
import login from "./modules/login.js";
import user from "./modules/user.js";

export default createStore({
  state: {
    isAuthenticated: true, // set to true for fake login
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

    setSessionID(state, sessionID) {
      state.sessionID = sessionID;
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
    user,
    login,
    registration,
  },
});
