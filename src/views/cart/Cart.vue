
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!--    商品列表-->
    <cart-list class="cart-list"/>

    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'
  //将vuex里面的辅助函数 将store里面的getter映射到局部的计算属性
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      // cartLength() {
      //   return this.$store.getters.cartLength
      // }
      // ...mapGetters(['cartLength'])   //导入相应的方法作为计算属性直接使用
      ...mapGetters({
        length:'cartLength'             //导入相应的方法做一层映射
      })
    }
  }
</script>

<style scoped>

  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
