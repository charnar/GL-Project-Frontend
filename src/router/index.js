import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import DashboardView from "../views/DashboardView";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
