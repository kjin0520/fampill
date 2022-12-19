import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import WeeklyView from "../views/layout/WeeklyView.vue";

const routes = [
  {
    path: "/",
    name: "WeeklyView",
    component: WeeklyView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
