import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
// import routers
import router from "./routers";

createApp(App).use(router).mount("#app");