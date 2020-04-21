import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
//此时可以利用该实例对象进行任何组件之间的通信

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
