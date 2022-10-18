// Converts ENUMERATORS into capitalized strings
const cleanLibraryString = (libraryNames) => {
  const cleanedLibraryNames = libraryNames.map(
    (lib) => lib.charAt(0) + lib.slice(1).toLowerCase()
  );

  return cleanedLibraryNames;
};

// For searching games in game library
export const searchGameLibrary = (games, searchVal) => {
  const searchedGames = games.filter(({ game_name }) =>
    game_name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return searchedGames;
};

// Gets the library names the user has
export const retrieveLibraryNames = (games) => {
  const libraryNames = ["ALL"];
  games.forEach((game) => {
    if (!libraryNames.includes(game.library_name))
      libraryNames.push(game.library_name);
  });

  return cleanLibraryString(libraryNames);
};
