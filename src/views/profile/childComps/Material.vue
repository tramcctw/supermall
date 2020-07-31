<template>
  <div id="material">
    <div><img src="~assets/img/profile/message.svg" alt=""><span>我的消息</span></div>
    <div><img src="~assets/img/profile/pointer.svg" alt=""><span>我的商城</span></div>
    <div><img src="~assets/img/profile/vip.svg" alt=""><span>会员卡</span></div>
  </div>
</template>

<script>
  export default {
    name: "Material"
  }
</script>

<style scoped>
  #material{
    height: 150px;
    background-color: #fff;
    margin-top: 7px;
    font-size: 17px;
  }

  #material div{
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 10px;
  }

  #material div:nth-child(1)::after,
  #material div:nth-child(2)::after{
    content: "";
    display: block;
    width: 350px;
    height: 1px;
    background-color: #eee;
    position: absolute;
    top: 55px;
  }

  #material div>img{
    width: 33px;
    margin-right: 10px;
  }

  #material span{
    position: absolute;
    vertical-align: middle;
    top:4px;
  }
</style>
