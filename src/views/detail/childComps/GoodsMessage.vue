<template>
  <div id="goodsMes" v-if="Object.keys(goods).length !== 0">
    <p>{{goods.title}}</p>
    <div class="goods-price">
      <p class="item">{{goods.newPrice}}</p>
      <s class="item">{{goods.oldPrice}}</s>
      <span class="item">{{goods.discount}}</span>
    </div>
    <div class="sell">
      <p>{{goods.columns[0]}}</p>
      <p>{{goods.columns[1]}}</p>
      <p>{{goods.services[goods.services.length - 1].name}}</p>
    </div>
    <div class="active">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsMessage",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    created() {
      // console.log(this.goods);
    }
  }
</script>

<style scoped>
  #goodsMes{
    padding: 15px 8px 8px 8px;
    box-sizing: border-box;
    /*padding: 0 8px;*/
    background-color: #fff;
  }

  .goods-price{
    display: flex;
    margin-top: 10px;
    position: relative;
  }

  .goods-price .item{
    margin-right: 5px;
  }

  .goods-price .item:nth-child(1){
    color: var(--color-high-text);
    font-size: 23px;
  }

  .goods-price .item:nth-child(2){
    margin-top: 9px;
    font-size: 12px;
    color: #999;
  }

  .goods-price .item:nth-child(3){
    font-size: 12px;
    color: #fff;
    background-color: var(--color-high-text);
    padding: 2px 5px;
    border-radius: 8px;
    position: relative;
    box-sizing: border-box;
  }

  .sell {
    height: 8vw;
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    margin-top: 4vw;
    border-bottom: 1px solid rgba(100,100,100,.1);
    line-height: 8vw;
  }

  .active{
    height: 16vw;
    line-height: 16vw;
    display: flex;
    justify-content: space-between;
    font-size: 3.4vw;
  }

  .active img{
    width: 3.7vw;
    height: 3.7vw;
    position: relative;
    top: 2px;
  }



</style>