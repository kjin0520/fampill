import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import VueSplash from "vue-splash";

loadFonts();

createApp(App).use(store).use(router).use(vuetify).use(VueSplash).mount("#app");
