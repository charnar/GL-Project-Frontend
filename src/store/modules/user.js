const defaultUserState = () => {
  return {
    username: "",
    profilePicture:
      "https://webneel.com/daily/sites/default/files/images/daily/07-2020/13-funny-3d-cartoon-character-teddy-man-fernando-parra.jpg",
  };
};

const state = defaultUserState();

const getters = {
  getProfilePicture(state) {
    return state.profilePicture;
  },
};

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
