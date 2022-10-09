const cleanLibraryString = (libraryNames) => {
  const cleanedLibraryNames = libraryNames.map(
    (lib) => lib.charAt(0) + lib.slice(1).toLowerCase()
  );

  return cleanedLibraryNames;
};

const getLibraryNames = (games) => {
  const libraryNames = ["ALL"];
  games.forEach((game) => {
    if (!libraryNames.includes(game.library_name))
      libraryNames.push(game.library_name);
  });

  return cleanLibraryString(libraryNames);
};

export const searchGameLibrary = (games, searchVal) => {
  const searchedGames = games.filter(({ game_name }) =>
    game_name.toLowerCase().includes(searchVal.toLowerCase())
  );

  return searchedGames;
};

export const getLibraryGames = (userLibrary) => {
  const { games } = userLibrary;
  // get library names
  const libraryNames = getLibraryNames(games);

  return [libraryNames, games];
};
