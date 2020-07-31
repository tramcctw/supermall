<template>
  <div id="detailNav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "DetailNav"
  }
</script>

<style scoped>

  #detailNav{
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 44px;
    display: flex;
  }



</style>