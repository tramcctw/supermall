import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // 当组件import 过来的时候已经转换为一个对象了，
  // 注册组件都是使用该对象注册,使用中的组件用$ref为vueComponent
  // 或者使用另外一种方式，先使用对象构造构造器，然后再
  // new一个组件对象,也为vueComponent
  const toastConstructor = Vue.extend(Toast)
  const toast = new toastConstructor()
  //new出一个组件，这里是VueComponent
  toast.$mount()    //挂载组件的模板
  document.body.appendChild(toast.$el)
  // 加入页面
  Vue.prototype.$toast = toast
}
export default obj