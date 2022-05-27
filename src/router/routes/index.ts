import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/signup",
        name: "SignUp",
        component: () => import("../../pages/SignUp.vue"),

    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../../pages/Login.vue"),
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../../pages/Home.vue"),
        meta: {
            requiresAuth: true,
        }
    },
];
export default routes