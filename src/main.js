import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import toast from 'components/common/toast/index'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
//此时可以利用该实例对象进行任何组件之间的通信
Vue.use(toast)
//此时会执行该对象的install对象

//解决移动端的300ms延迟
FastClick.attach(document.body)
//三步 安装 导入 调用attach

//使用图片懒加载 即图片用到时才加载
// 安装 然后 导入 use 然后再将img的src改为v-lazy
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')  //使用其做背景图
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
