<template>
  <div id="home">
    <nav-bar class="hoem-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
.hoem-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
