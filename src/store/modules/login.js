import { API_URL } from "@/configs.js";
import axios from "axios";
import router from "@/router/index.js";
import store from "..";

const defaultLoginState = () => {
  return {
    loginStatus: "NORMAL",
  };
};

const state = defaultLoginState();

const getters = {
  getLoginStatus(store) {
    return store.loginStatus;
  },
};

const actions = {
  async checkLogin({ commit }, loginInfo) {
    try {
      // condition to check login goes here
      const response = await axios.post(`${API_URL}/login`, {
        username_email: loginInfo.usernameEmail,
        password: loginInfo.password,
      });

      const { status, username, session_id } = response.data;

      commit("setLoginStatus", status);

      if (status === "SUCCESS") {
        commit("setAuthenticate");
        commit("setSessionID", session_id);
        commit("setUsername", username);
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  },

  updateLoginStatus({ commit }, status) {
    commit("setLoginStatus", status);
  },
};

const mutations = {
  setLoginStatus(store, status) {
    store.loginStatus = status;
  },

  resetLoginState(state) {
    Object.assign(state, defaultLoginState());
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
