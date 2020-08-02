<template>
  <div id="message">
    <div class="item"><img src="~assets/img/profile/avatar.svg" alt=""></div>
    <div class="item">
      <span>登录/注册</span>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定的手机号</span>
      </div>
    </div>
    <div class="item">
      <img class="arrow-right" src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message"
  }
</script>

<style scoped>
  #message{
    height: 80px;
    background-color: var(--color-tint);
    display: flex;
    color: #fff;
    font-size: 20px;
  }

  .item{
    margin-left: 10px;
  }

  .item>img{
    width: 70px;
    height: 70px;
  }

  .item:nth-child(2){
    margin-top: 12px;
  }

  .phone span{
    font-size: 15px;
    vertical-align: 3px;
  }

  .item .phone>img{
    width: 16px;
  }

  .item .arrow-right{
    width: 30px;
    margin-left: 20vw;
  }
</style>
