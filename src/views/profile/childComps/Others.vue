<template>
  <div id="other">
    <div><img src="~assets/img/profile/cart.svg" alt=""><span>我的购物车</span></div>
    <div><img src="~assets/img/profile/shopping.svg" alt=""><span>下载购物APP</span></div>
  </div>
</template>

<script>
  export default {
    name: "Others"
  }
</script>

<style scoped>
  #other{
    margin-top: 7px;
    background-color: #fff;
    padding: 10px;
    height: 100px;
    font-size: 17px;
  }

  #other div{
    height: 50px;
    position: relative;
  }

  #other div:nth-child(1)::after{
    content: "";
    display: block;
    position: absolute;
    width: 350px;
    height: 1px;
    top: 40px;
    background-color: #eee;
  }

  #other div>img{
    width: 33px;
  }

  #other div span{
    position: absolute;
    top:10px;
  }
</style>
