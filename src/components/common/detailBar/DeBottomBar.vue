<template>
  <div id="bottomBar">
    <div>
      <slot name="consult"></slot>
    </div>
    <div>
      <slot name="shop"></slot>
    </div>
    <div>
      <slot name="star"></slot>
    </div>
    <div>
      <slot name="cart"></slot>
    </div>
    <div>
      <slot name="buy"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DeBottomBar"
  }
</script>

<style scoped>


</style>