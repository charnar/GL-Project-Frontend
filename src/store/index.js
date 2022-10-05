import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "@/router/index.js";
import registration from "./modules/registration.js";
import login from "./modules/login.js";
import user from "./modules/user.js";

const defaultIndexState = () => {
  return {
    isAuthenticated: false,
    sessionID: "",
  };
};

const dataState = createPersistedState({
  key: "GameLibraryAppState",
  paths: ["user.username", "sessionID", "isAuthenticated"],
});

export default createStore({
  state: defaultIndexState(),

  getters: {
    getAuthentication(state) {
      return state.isAuthenticated;
    },
  },
  mutations: {
    setAuthenticate(state) {
      state.isAuthenticated = true;
    },

    setSessionID(state, sessionID) {
      state.sessionID = sessionID;
    },

    resetState(state) {
      Object.assign(state, defaultIndexState());
    },
  },
  actions: {
    async logoutUser({ commit }) {
      commit("resetState");
      commit("resetLoginState");
      commit("resetRegistrationState");
      commit("resetUserState");
      router.push("/login");
    },
  },
  modules: {
    // any store for other components here
    user,
    login,
    registration,
  },

  plugins: [dataState],
});
