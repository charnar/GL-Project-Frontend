const defaultLibraryState = () => {
  return {
    games: [],
    libraryFilter: "All",
  };
};

const state = defaultLibraryState();

const getters = {
  getLibraryFilter(store) {
    return store.libraryFilter;
  },
};

const actions = {
  changeLibraryFilter({ commit }, filter) {
    commit("setLibraryFilter", filter);
  },
};

const mutations = {
  setGames(store, status) {
    store.games = status;
  },

  setLibraryFilter(store, status) {
    store.libraryFilter = status;
  },

  resetLibraryState(state) {
    Object.assign(state, defaultLibraryState());
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
