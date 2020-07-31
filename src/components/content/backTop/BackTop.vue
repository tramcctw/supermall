<template>
  <div id="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  #backTop{
    position: fixed;
    z-index: 9;
    top: 555px;
    right:18px;
  }

  #backTop img{
    width: 50px;
  }
</style>