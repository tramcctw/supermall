import Vue from 'vue'
import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)

    this.itemImgListener = () => {
      this.newRefresh()
    }
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false,
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500);
      //  500毫秒回到顶部
    },
  }
}

// export const mixin = {
//   components:{
//
//   },
//   methods:{
//
//   },
//   data(){
//     return {
//       hello:'world'
//     }
//   },
//   mounted(){
//     console.log(1);
//   }
// }

//在相应的组件中
// const vm = new Vue({
//   mounted() {
//   },
//   mixins:[mixin]
// })

//此时会把mixin中的声明周期函数和组件中的合并,包括属性值,
//methods components等 Vue.mixin={}全局混入等
//methods 里面函数的内部不能混入
