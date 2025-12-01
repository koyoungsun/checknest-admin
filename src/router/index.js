import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import Users from "../pages/Users.vue";
import Checklists from "../pages/Checklists.vue";
import Templates from "../pages/Templates.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/users", component: Users },
  { path: "/checklists", component: Checklists },
  { path: "/templates", component: Templates },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;