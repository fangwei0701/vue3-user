import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/index.vue";

export const view_routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { pageIndex: 1 },
  },
  {
    path: "/login",
    name: "Login",
    meta: { pageIndex: 1 },
    component: () => import("@/views/Login/index.vue"),
  },
];
