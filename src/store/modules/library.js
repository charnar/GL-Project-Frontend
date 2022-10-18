import { searchGameLibrary, retrieveLibraryNames } from "@/helper";
import { GAMES_PER_PAGE, JSON_API_URL } from "@/configs";
import axios from "axios";

const defaultLibraryState = () => {
  return {
    games: [],
    gameLibraries: [],
    displayGames: [],
    libraryFilter: "All",
    searchValue: "",
    currentPage: 1,
    numPages: 1,
    gamesPerPage: GAMES_PER_PAGE,
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

  getCurrentPage(store) {
    return store.currentPage;
  },

  getNumPages(store) {
    return store.numPages;
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

  getGamesPerPage(store) {
    return store.gamesPerPage;
  },
};

const actions = {
  updateLibraryFilter({ commit }, filter) {
    commit("setLibraryFilter", filter);
  },

  async updateGames({ commit, dispatch, getters }) {
    try {
      // 1. Fetch user's game library from backend
      const response = await axios.post(`${JSON_API_URL}/all-library-games`, {
        session_id: getters.getSessionID,
      });

      const { sessionStatus, games } = response.data;

      // 2. Retrieve library names from list of user's games
      const userGameLibraries = retrieveLibraryNames(games);

      // 3. Set the game libraries and games state
      commit("setGameLibraries", userGameLibraries);
      commit("setGames", games);

      // 4. Update the displayed library games
      dispatch("updateDisplayGames", games);
    } catch (err) {
      throw Error("Something went wrong");
    }
  },

  updateCurrentPage({ commit, dispatch, getters }, page) {
    commit("setCurrentPage", Number(page));
    dispatch("updateDisplayGames", getters.getGames);
  },

  updateDisplayGames({ commit, getters }, library) {
    // 1. Filter the displayed library by the search results
    const searchVal = getters.getSearchValue;

    let filteredGames = library;
    if (searchVal) filteredGames = searchGameLibrary(library, searchVal);

    // 2. Update the current page and number of pages
    const currentPage = getters.getCurrentPage;
    const gamesPerPage = getters.getGamesPerPage;
    const numPages = Math.ceil(filteredGames.length / gamesPerPage);

    // 3. Calculate the starting game and ending game
    const startGame = (currentPage - 1) * gamesPerPage;
    const endGame = currentPage * gamesPerPage;

    // 4. Set the number of pages for the displayed library
    commit("setNumPages", numPages);

    // 5. Set the current displayed library
    commit("setDisplayGames", filteredGames.slice(startGame, endGame));
  },

  updateGameLibraries({ commit }, value) {
    commit("setGameLibraries", value);
  },

  updateSearchValue({ commit, getters, dispatch }, value) {
    commit("setSearchValue", value);
    commit("setCurrentPage", 1);
    dispatch("updateDisplayGames", getters.getGames);
  },
};

const mutations = {
  setSearchValue(store, status) {
    store.searchValue = status;
  },

  setCurrentPage(store, status) {
    store.currentPage = status;
  },

  setNumPages(store, status) {
    store.numPages = status;
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
