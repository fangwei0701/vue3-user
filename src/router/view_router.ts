import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/index.vue";

export const view_routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "Login",
    meta: { pageIndex: 1 },
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { pageIndex: 1 },
  },
  {
    path: "/attention",
    name: "Attention",
    meta: { pageIndex: 1 },
    component: () => import("@/views/Attention/index.vue"),
  },
  {
    path: "/message",
    name: "Message",
    meta: { pageIndex: 1 },
    component: () => import("@/views/Message/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: { pageIndex: 1 },
    component: () => import("@/views/User/index.vue"),
  },
];
