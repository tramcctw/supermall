<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabBar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    padding: 8px;
    box-sizing: border-box;
    background-color: #f6f6f6;
  }
</style>