<template>
  <div id="consume">
    <div class="item">
      <div><span class="number">0.00</span>元</div>
      <div>我的余额</div>
    </div>
    <div class="item">
      <div><span class="number">0</span>个</div>
      <div>我的优惠</div>
    </div>
    <div class="item">
      <div><span class="number">0</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ConsumeMessage"
  }
</script>

<style scoped>
  #consume{
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #fff;
    font-size: 18px;
  }
  .item{
    position: relative;
    text-align: center;
    flex: 1;
  }

  .item:nth-child(2)::after,
  .item:nth-child(3)::after{
    display: block;
    content: "";
    position: absolute;
    top: -19px;
    width: 1px;
    height: 80px;
    background-color: #eee;
  }

  .item .number{
    font-weight: bolder;
    color: var(--color-tint);
  }

</style>
