import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/views/DashboardView"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeView"),
      },
      {
        path: "/about",
        name: "AboutView",
        component: () => import("@/views/AboutView"),
      },
      {
        path: "/game/:id",
        name: "GameView",
        component: () => import("@/views/GameView"),
      },
    ],
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
