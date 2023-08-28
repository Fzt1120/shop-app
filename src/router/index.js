import { createRouter, createWebHistory } from "vue-router";
import Admin from "@/layouts/admin.vue";
import Index from "@/pages/index.vue";
import Login from "@/pages/login.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    component: Admin,
    children: [
      {
        path: "/",
        component: Index,
        meta: { title: "后台首页" },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    meta: { title: "登录页" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
