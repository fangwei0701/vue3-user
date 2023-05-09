import { createApp } from "vue";
import { Icon } from "vant";
import i18n from "@/i18n";

import App from "./App.vue";
import store from "./store";
import router from "./router";
// 引入全局样式
import "./style/index.scss";
import "lib-flexible/flexible";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(Icon);
app.mount("#app");
