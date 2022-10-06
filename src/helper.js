export const getLibraryGames = (userLibrary) => {
  const { libraries } = userLibrary;

  const libraryNames = ["All"];
  const games = [];

  libraries.forEach((lib) => {
    if (!libraryNames.includes(lib.library_name))
      libraryNames.push(lib.library_name);

    lib.games.forEach((game) => games.push(game));
  });

  return [libraryNames, games];
};
