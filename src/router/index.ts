import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { view_routers } from "./view_router";
const routes: RouteRecordRaw[] = [...view_routers];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
