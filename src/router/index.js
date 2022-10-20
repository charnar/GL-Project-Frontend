import { VueElement } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/MainView"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/main-child/HomeView"),
      },
      {
        path: "about",
        name: "AboutView",
        component: () => import("@/views/main-child/AboutView"),
      },

      {
        path: "user/:id",
        name: "User",
        children: [
          {
            path: "accounts",
            name: "Accounts",
            component: () => import("@/views/user-child/AccountsView.vue"),
          },
        ],
      },
    ],
  },

  {
    path: "/game/:gameid",
    name: "GameView",
    component: () => import("@/views/GameView"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // check if user is not authenticated or their session has expired
  if (
    !store.state.isAuthenticated &&
    to.name !== "Login" &&
    to.name !== "Register"
  ) {
    next("/login"); // go to login page
  } else {
    next();
  }
});

export default router;
