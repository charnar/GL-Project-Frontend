import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMagnifyingGlass,
  faHeart as faHeartSolid,
  faRotate,
  faCircleCheck,
  faCircleXmark,
  faChevronLeft,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faHeartSolid,
  faStarSolid,
  faRotate,
  faCircleXmark,
  faChevronLeft,
  faCircleCheck
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
