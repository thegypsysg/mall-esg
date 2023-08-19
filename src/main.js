/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/all.css";
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import "aos/dist/aos.css";

const app = createApp(App).use(router);
app.config.globalProperties.$appId = 2;
app.config.globalProperties.$fileURL = "https://admin1.the-gypsy.sg/img/app/";

registerPlugins(app);
app.use(store);

app.mount("#app");
