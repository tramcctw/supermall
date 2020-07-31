<template>
  <div id="cart">
    <nav-bar class="navBar"><div slot="center">购物车<span>{{getCount}}</span></div></nav-bar>
    <scroll class="content">
      <goods-list/>
    </scroll>
    <compute/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Compute from "./childComps/Compute";
  import GoodsList from "./childComps/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "Cart",
    data(){
      return {
        count:null
      }
    },
    components:{
      NavBar,
      Compute,
      GoodsList,
      Scroll
    },
    activated() {
      this.count = this.$store.getters.getCartList.length
    },
    computed:{
      getCount(){
        return '(' + this.count + ')'
      }
    }
  }
</script>

<style scoped>
  #cart .navBar{
    background-color: var(--color-tint);
    color: #fff;
  }

  .content{
    position: fixed;
    top: 44px;
    bottom: 89px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
</style>