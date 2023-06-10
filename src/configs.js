export const API_URL = process.env.VUE_APP_API_URL;
export const GAMES_PER_PAGE = 10;
export const DISPLAY_PAGES = 5;
export const TIMEOUT_API_CALL = 60 * 1000; // in seconds
export const TIMEOUT_SEARCH = 800;
export const TIMEOUT_MODAL_MESSAGE = 3 * 1000; // in seconds
export const HOME_LINK = process.env.VUE_APP_HOME_LINK;
export const ACCOUNT_SERVICES = [
  {
    name: "STEAM",
    component_name: "SteamService",
  },
  {
    name: "ORIGIN",
    component_name: "OriginService",
  },
  {
    name: "GOG",
    component_name: "GOGService",
  },

  {
    name: "EPIC",
    component_name: "EpicService",
  },
  { name: "XBOX", component_name: "XboxService" },
];
