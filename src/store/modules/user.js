const defaultUserState = () => {
  return {
    username: "",
    profilePicture: "",
  };
};

const state = defaultUserState();

const getters = {};

const actions = {};

const mutations = {
  setUsername(state, username) {
    state.username = username;
  },

  resetUserState(state) {
    Object.assign(state, defaultUserState());
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
