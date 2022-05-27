import { createApp} from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import "./index.css";

export const myApp = createApp(App);
const pinia = createPinia();
myApp.use(pinia);
pinia.use(piniaPluginPersistedstate);
myApp.use(router);
myApp.mount("#app");
