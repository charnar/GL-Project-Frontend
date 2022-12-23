import axios from "axios";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

export const getLinkedLibraries = (libraryArray) => {
  return libraryArray.map((lib) => lib.library_type);
};

export const get_release_date = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
};

export const get_time_played = (minutes) => {
  return minutes === 0
    ? `Not played`
    : minutes === 1
    ? `${minutes} minute`
    : minutes < 60
    ? `${minutes} minutes`
    : `${Number((minutes / 60).toFixed(1))} hours`;
};
