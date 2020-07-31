<template>
  <div id="goods">
    <goods-item v-for="(item,index) in goodsList" :item="item"/>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
  export default {
    name: "Goods",
    components:{
      GoodsItem
    },
    props:{
      goodsList:{
        tyep:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  #goods{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    background-color: #fff;
    box-sizing: border-box;
  }
</style>