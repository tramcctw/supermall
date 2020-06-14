<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :item-info="item"/>
    </scroll>
<!--    必须要有固定的高度-->
  </div>
</template>

<script>

  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";

  import {mapGetters} from "vuex"

  export default {
    name: "CartList",
    components:{
      Scroll,
      CartListItem
    },
    computed:{
        ...mapGetters(['cartList'])
    },
  activated() {
      this.$refs.scroll.refresh()
  }
  }
</script>

<style scoped>

  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  /*这里的100%指的是父元素 所有父元素必须要有高度*/
  }

</style>
