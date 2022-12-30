import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "@/router/index.js";
import registration from "./modules/registration.js";
import login from "./modules/login.js";
import user from "./modules/user.js";
import library from "./modules/library";
import { TIMEOUT_MODAL_MESSAGE } from "@/configs.js";

const defaultIndexState = () => {
  return {
    isAuthenticated: false,
    sessionID: "",
    modalMessage: null,
    modalIcon: false,
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

    getSessionID(state) {
      return state.sessionID;
    },

    getModalMessage(state) {
      return state.modalMessage;
    },

    getModalIcon(state) {
      return state.modalIcon;
    },
  },
  mutations: {
    setModalMessage(state, message) {
      state.modalMessage = message;
    },

    setAuthenticate(state, status) {
      state.isAuthenticated = status;
    },

    setSessionID(state, sessionID) {
      state.sessionID = sessionID;
    },

    setModalIcon(state, iconFlag) {
      state.modalIcon = iconFlag;
    },

    resetState(state) {
      Object.assign(state, defaultIndexState());
    },
  },
  actions: {
    /** Logs out the user and resets to default state */
    async logoutUser({ commit }) {
      try {
        await router.push("/login");
        commit("resetState");
        commit("resetLoginState");
        commit("resetRegistrationState");
        commit("resetUserState");
        commit("resetLibraryState");
      } catch (err) {
        console.error("Failed to log out!");
      }
    },

    checkSessionStatus({ dispatch }, status) {
      if (status !== "SESSION_KEY_OK") {
        dispatch("logoutUser");
        dispatch("updateModalMessage", ["Session has expired"]);
      }
    },

    updateModalMessage({ commit, dispatch }, modalArray) {
      let message, markerBoolean;
      if (!modalArray) {
        message = null;
        markerBoolean = false;
      } else {
        [message, markerBoolean] = modalArray;
      }

      commit("setModalIcon", markerBoolean);
      commit("setModalMessage", message);

      // Reset timeout for modal message window
      if (this.modalMessageTimer) {
        clearTimeout(this.modalMessageTimer);
        this.modalMessageTimer = null;
      }

      // Set timeout for modal message window
      if (message)
        this.modalMessageTimer = setTimeout(
          () => dispatch("updateModalMessage", null),
          TIMEOUT_MODAL_MESSAGE
        );
    },
  },
  modules: {
    user,
    login,
    registration,
    library,
  },

  plugins: [dataState],
});
