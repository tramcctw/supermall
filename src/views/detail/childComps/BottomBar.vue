<template>
  <div id="bottomBar">
    <div class="item" slot="consult">
      <i class="icon consult"></i>
      <span>客服</span>
    </div>
    <div class="item" slot="shop">
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>
    <div class="item" slot="star">
      <i class="icon star"></i>
      <span>收藏</span>
    </div>
    <div class="riItem cart" slot="cart" @click="addToCart">加入购物车</div>
    <div class="riItem buy" slot="buy">购买</div>
  </div>
</template>

<script>
  import DeBottomBar from "components/common/detailBar/DeBottomBar";
  export default {
    name: "BottomBar",
    components:{
      DeBottomBar
    },
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  #bottomBar{
    display: flex;
    height: 49px;
    background-color: #fff;
    line-height: 49px;
    width: 100vw;
    text-align: center;
  }
  .item{
    flex:1;
    position: relative;
  }

  i {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .consult{
    background-position:0 -52px;
  }

  .shop{
    background-position:0 -97px;
  }

  .star{
    background-position: 0 2px;
  }

  .riItem{
    flex: 2;
  }

  .item span{
    position: absolute;
    top: 12px;
    font-size: 3.4vw;
    left: 14px;
  }

  .cart{
    background-color: #ffe817;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
  }

  .buy{
    background-color: var(--color-tint);
    /*border-bottom-right-radius: 25px;*/
    /*border-top-right-radius: 25px;*/
    color: #fff;
  }

</style>