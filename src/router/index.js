import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import DashboardView from "@/views/DashboardView";
import RegisterView from "@/views/RegisterView";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "about",
        name: "AboutView",
        component: AboutView,
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },

  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // if the user is not authenticated or their session has expired
  console.log(to);
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
