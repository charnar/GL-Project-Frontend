import axios from "axios";
import { API_URL } from "@/configs.js";

const state = {
  registerStatus: "NORMAL",
};

const getters = {
  getRegisterStatus(store) {
    return store.registerStatus;
  },
};

const actions = {
  async checkRegistration({ commit }, registerInfo) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username: registerInfo.username,
        email: registerInfo.email,
        password: registerInfo.password,
      });

      const { status, username } = response.data;
      commit("setRegisterStatus", status);
    } catch (err) {
      console.error(err);
    }
    // condition to check login goes here
  },

  updateRegisterStatus({ commit }, status) {
    commit("setRegisterStatus", status);
  },
};

const mutations = {
  setRegisterStatus(store, status) {
    store.registerStatus = status;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
