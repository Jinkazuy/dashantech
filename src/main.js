import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引入bootstrap相关
// eslint-disable-next-line
import $ from "jquery";
import "bootstrap";
import "../src/common/css/bootstrap.min.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
