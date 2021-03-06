import Vue from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

import App from "./App";
import router from "./router/index";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
