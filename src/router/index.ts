import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/userStore";
import routes from "./routes";
declare module "vue-router" {
    interface RouteMeta {
        requiresAuth?: boolean;
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = useUserStore();
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!store.isAuth) {
        next({
          path: '/login',
          query: { redirect: "/login"},
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });
  

export default router