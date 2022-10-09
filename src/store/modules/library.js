import axios from "axios";
import { searchGameLibrary } from "@/helper";

const defaultLibraryState = () => {
  return {
    games: [],
    gameLibraries: [],
    displayGames: [],
    libraryFilter: "All",
    searchValue: "",
  };
};

const state = defaultLibraryState();

const getters = {
  getGames(store) {
    return store.games;
  },

  getGameLibraries(store) {
    return store.gameLibraries;
  },

  getDisplayGames(store) {
    return store.displayGames;
  },

  getSearchValue(store) {
    return store.searchValue;
  },

  getLibraryFilter(store) {
    return store.libraryFilter;
  },
};

const actions = {
  updateLibraryFilter({ commit }, filter) {
    commit("setLibraryFilter", filter);
  },

  updateGames({ commit }, library) {
    commit("setGames", library);
  },

  updateDisplayGames({ commit }, library) {
    commit("setDisplayGames", library);
  },

  updateGameLibraries({ commit }, value) {
    commit("setGameLibraries", value);
  },

  updateSearchValue({ commit, getters }, value) {
    commit("setSearchValue", value);
    const searchedGames = searchGameLibrary(getters.getGames, value);
    commit("setDisplayGames", searchedGames);
  },
};

const mutations = {
  setSearchValue(store, status) {
    store.searchValue = status;
  },

  setGames(store, status) {
    store.games = status;
  },

  setDisplayGames(store, status) {
    store.displayGames = status;
  },

  setGameLibraries(store, status) {
    store.gameLibraries = status;
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
