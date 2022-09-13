import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import DashboardView from "../views/DashboardView";
import RegisterView from "../views/RegisterView";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
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
