import Vue from "vue";
import App from "./app";
import router from "./router";
import "./register-service-worker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#shell");
