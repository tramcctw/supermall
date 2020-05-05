import Vue from 'vue'
export const mixin = {
  components:{

  },
  methods:{

  },
  data(){
    return {
      hello:'world'
    }
  },
  mounted(){
    console.log(1);
  }
}

//在相应的组件中
const vm = new Vue({
  mounted() {
  },
  mixins:[mixin]
})

//此时会把mixin中的声明周期函数和组件中的合并,包括属性值,
//methods components等 Vue.mixin={}全局混入等
