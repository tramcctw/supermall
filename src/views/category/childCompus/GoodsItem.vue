<template>
  <div id="goodsItem">
    <div><img :src="item.image" alt="" @load="imageLoad"></div>
    <div class="title">{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      item:{
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$emit("imageLoad")
      }
    }
  }
</script>

<style scoped>

  #goodsItem img{
    height: 110px;
  }
  #goodsItem .title{
    text-align: center;
    font-size: 18px;
  }

</style>
