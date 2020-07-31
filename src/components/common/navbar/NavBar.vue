<template>
  <div id="navBar">
    <div class="item"><slot name="left"></slot></div>
    <div class="item"><slot name="center"></slot></div>
    <div class="item"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #navBar{
    height: 44px;
    display: flex;
  }

  .item{
    flex: 1;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
  }
</style>