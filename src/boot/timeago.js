import Vue from "vue";
import VueTimeago from "vue-timeago";

Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "es", // Default locale
  locales: {
    es: require("date-fns/locale/es")
  }
  // We use `date-fns` under the hood
  // So you can use all locales from it
});
