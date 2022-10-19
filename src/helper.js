import axios from "axios";

// Converts ENUMERATORS into capitalized strings
const cleanLibraryString = (libString) =>
  libString.charAt(0) + libString.slice(1).toLowerCase();

// For searching games in game library
export const searchGameLibrary = (games, searchVal) => {
  const searchedGames = games.filter(({ game_name }) =>
    game_name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return searchedGames;
};

// Gets the library names the user has
export const retrieveLibraryNames = (games) => {
  const userLibraries = [{ name: "All" }];
  games.forEach((game) =>
    userLibraries.push({
      name: cleanLibraryString(game.library_name),
      id: game.library_id,
    })
  );

  const uniqueUserLibraries = [
    ...new Map(userLibraries.map((item) => [item["name"], item])).values(),
  ];

  return uniqueUserLibraries;
};

// Timeout promise for fetching api
export const rejectPromiseTimeout = (timeout) => {
  return new Promise((res, rej) => {
    setTimeout(
      rej,
      timeout,
      "Your request is taking too long. Please try again."
    );
  });
};

// Axios post call
export const axiosPostRequest = (url, payload) => {
  return axios.post(url, payload);
};
