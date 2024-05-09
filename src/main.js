import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap";
import "./assets/css/sb-admin-2.min.css";
import devInstance from "./plugins/http";
import jQuery from "jquery";

window.$ = jQuery;
window.jQuery = jQuery;

const app = createApp(App);

app.use(router).use(bootstrap);
app.config.globalProperties.$http = { ...devInstance };
app.mount("#app");
