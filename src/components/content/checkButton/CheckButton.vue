<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg"/>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .check-button{
    /*background-color: #ff5777;*/
    border-radius:50%;
    border: 2px solid #aaa;
  }
  .check{
    background-color: #ff5777;
    border: 2px solid   #ff5777;
  }
</style>
