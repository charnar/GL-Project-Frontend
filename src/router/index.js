import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import DashboardView from "../views/DashboardView";
import RegisterView from "../views/RegisterView";
import HomeView from "../views/HomeView";

import About from "../components/About";

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
        name: "About",
        component: About,
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

export default router;
