import { API_URL } from "@/configs.js";
import axios from "axios";
import router from "@/router/index.js";

const state = {};

const getters = {};

const actions = {
  async checkLogin({ commit }) {
    try {
      // condition to check login goes here
      if (true) {
        commit("setAuthenticate");
        console.log(this.state.isAuthenticated);
        router.push("/");
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
