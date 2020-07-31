import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from 'components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'
import 'vue-better-slider/style.css'

Vue.use(toast)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

Vue.use(VueLazyLoad)
//图片懒加载

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
