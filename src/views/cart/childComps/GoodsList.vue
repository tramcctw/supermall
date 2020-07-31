<template>
  <div id="goodsList" v-if="Object.keys(cartList).length !== 0">
    <div>
      <goods-item v-for="item in cartList" :item="item"/>
    </div>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'
  export default {
    name: "GoodsList",
    components:{
      GoodsItem
    },
    data(){
      return {
        cartList: []
      }
    },
    created() {
      this.cartList = this.$store.getters.getCartList
    }
  }
</script>

<style scoped>

  #goodsList{
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }

</style>