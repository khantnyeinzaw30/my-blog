import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = false;

createApp(App).use(VueAxios, axios).use(router).mount("#app");
