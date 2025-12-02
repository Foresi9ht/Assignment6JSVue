import { createRouter, createWebHistory } from "vue-router";

// Импорт страниц
import AllPeoplePage from "../views/AllPeoplePage.vue";
import MostLikedPage from "../views/MostLikedPage.vue";
import MostDislikedPage from "../views/MostDislikedPage.vue";

const routes = [
  { path: "/all", component: AllPeoplePage },
  { path: "/liked", component: MostLikedPage },
  { path: "/disliked", component: MostDislikedPage },

  // редирект на /all, чтобы при открытии сайта показывалась первая страница
  { path: "/", redirect: "/all" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
