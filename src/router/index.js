import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetailsView from "../views/DetailsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "details",
    component: DetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
