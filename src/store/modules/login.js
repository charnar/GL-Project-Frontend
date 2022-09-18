import { API_URL } from "@/configs.js";
import axios from "axios";
import router from "@/router/index.js";

const state = {};

const getters = {};

const actions = {
  async checkLogin({ commit }, loginInfo) {
    try {
      // condition to check login goes here
      const response = await axios.post(`${API_URL}/login`, {
        username_email: loginInfo.usernameEmail,
        password: loginInfo.password,
      });

      const { status, username, session_id } = response.data;

      if (status === "SUCCESS") {
        commit("setAuthenticate");
        commit("setSessionID", session_id);
        commit("setUsername", username);
        router.push("/");
      } else {
        console.log(`Something went wrong. ${status}`);
      }
    } catch (err) {
      console.error(err);
    }
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
