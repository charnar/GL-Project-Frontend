import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
