import { API_URL, TIMEOUT_API_CALL } from "@/configs.js";
import { rejectPromiseTimeout, axiosPostRequest } from "@/helper";
import router from "@/router/index.js";

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
  async checkLogin({ commit, dispatch }, loginInfo) {
    try {
      commit("setLoginStatus", "LOGIN_PROCESSING");
      const inputData = {
        username_email: loginInfo.usernameEmail,
        password: loginInfo.password,
      };

      const response = await Promise.race([
        axiosPostRequest(`${API_URL}/login`, inputData),
        rejectPromiseTimeout(TIMEOUT_API_CALL),
      ]);

      const { status, username, session_id } = response.data;

      commit("setLoginStatus", status);

      if (status === "SUCCESS") {
        dispatch("updateModalMessage", ["Logged in successfully!", true]);
        commit("setAuthenticate", true);
        commit("setSessionID", session_id);
        commit("setUsername", username);
        router.push("/");
      }
    } catch (err) {
      commit("setLoginStatus", "NORMAL");

      dispatch("updateModalMessage", [
        "We couldn't log you in, please try again.",
      ]);
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
