import Toast from "./Toast";

const  obj = {}

obj.install = function (Vue) {    //默认传入Vue
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2 new 一个组件对象
  const toast = new toastConstructor()
  //3 将组件的模板挂载
  toast.$mount()
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj
