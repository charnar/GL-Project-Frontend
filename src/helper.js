// Converts ENUMERATORS into capitalized strings
const cleanLibraryString = (libraryNames) => {
  const cleanedLibraryNames = libraryNames.map(
    (lib) => lib.charAt(0) + lib.slice(1).toLowerCase()
  );

  return cleanedLibraryNames;
};

// Gets the library names the user has
const getLibraryNames = (games) => {
  const libraryNames = ["ALL"];
  games.forEach((game) => {
    if (!libraryNames.includes(game.library_name))
      libraryNames.push(game.library_name);
  });

  return cleanLibraryString(libraryNames);
};

// For searching games in game library
export const searchGameLibrary = (games, searchVal) => {
  const searchedGames = games.filter(({ game_name }) =>
    game_name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return searchedGames;
};

// Processes the library games fetched from backend
export const getLibraryGames = (userLibrary) => {
  const { games } = userLibrary;
  const libraryNames = getLibraryNames(games);

  return [libraryNames, games];
};
