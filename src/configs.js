export const API_URL = "http://localhost:8080/api/v1";
export const JSON_API_URL = "http://localhost:3001/api/v1";
export const GAMES_PER_PAGE = 10;
export const TIMEOUT_API_CALL = 60 * 1000; // in seconds
export const TIMEOUT_SEARCH = 800;
export const TIMEOUT_MODAL_MESSAGE = 3 * 1000; // in seconds
export const HOME_LINK = "http://localhost:3000";
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
];
