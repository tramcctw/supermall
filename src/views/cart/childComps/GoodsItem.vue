<template>
  <div class="item">
    <div class="choice">
      <div @click="choiceClick" :class="{active:getIsActive}">
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
    </div>
    <div class="goods">
      <img :src="item.image" alt="">
    </div>
    <div class="price">
      <p class="item-title">{{item.title}}</p>
      <p class="description">商品描述:{{item.desc}}</p>
      <div class="shop-price">
        <div>¥{{item.price}}</div>
        <div class="count">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    data(){
      return {
        isActive:true
      }
    },
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      choiceClick(){
        this.isActive = !this.isActive
        if(this.isActive === false){
          this.item.checked = false
        }else{
          this.item.checked = true
        }
      //  将该商品的选中进行切换
      }
    },
    computed:{
      getIsActive(){
        if(this.item.checked === true){
          this.isActive = true
        }else {
          this.isActive = false
        }
        return this.isActive
      }
    }
  }
</script>

<style scoped>
  .item{
    position: relative;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .choice{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .choice div {
    width: 20px;
    height: 20px;
    border: 2px solid #aaa;
    border-radius: 50%;
  }

  .active{
    border: none !important;
    background-color: var(--color-high-text);
  }

  .choice img{
    width: 20px;
    height: 20px;
  }

  .goods{
    padding: 5px;
    box-sizing: border-box;
  }

  .goods img{
    height: 100px;
    width: 80px;
  }

  .price{
    width: 255px;
    position: relative;
    padding: 5px 10px;
    box-sizing: border-box;
  }

  .item .item-title{
    width: 100%;
    font-size: 4.5vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
  }

  .item .description{
    margin-top: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #666;
  }

  .shop-price{
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
  }

  .shop-price>div{
    color:#ff4500;
    font-size:17px;
  }

  .shop-price .count{
    color: #333;
  }
</style>