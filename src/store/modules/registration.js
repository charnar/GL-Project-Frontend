import axios from "axios";
import { API_URL } from "@/configs.js";
import router from "@/router/index.js";

const defaultRegistrationState = () => {
  return {
    registerStatus: "NORMAL",
  };
};

const state = defaultRegistrationState();

const getters = {
  getRegisterStatus(store) {
    return store.registerStatus;
  },
};

const actions = {
  async checkRegistration({ commit, dispatch }, registerInfo) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username: registerInfo.username,
        email: registerInfo.email,
        password: registerInfo.password,
      });

      const { status, username } = response.data;

      if (status === "SUCCESS") {
        dispatch("updateModalMessage", ["Registration was a success!", true]);
        router.push("/login");
      }

      commit("setRegisterStatus", status);
    } catch (err) {
      commit("setRegisterStatus", "NORMAL");

      dispatch("updateModalMessage", [
        "Something went wrong with your registration, please try again.",
      ]);
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

  resetRegistrationState(state) {
    Object.assign(state, defaultRegistrationState());
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
