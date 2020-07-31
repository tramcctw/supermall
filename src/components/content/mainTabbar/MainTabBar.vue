<template>
  <div>
    <TabBar class="tabBar">
      <tab-bar-item class="tabBarItem" path="/home">
        <img slot="img1" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="bottom">首页</div>
      </tab-bar-item>
      <tab-bar-item class="tabBarItem" path="/category">
        <img slot="img1" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="bottom">分类</div>
      </tab-bar-item>
      <tab-bar-item class="tabBarItem" path="/cart">
        <img slot="img1" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="bottom">购物车</div>
      </tab-bar-item>
      <tab-bar-item class="tabBarItem" path="/profile">
        <img slot="img1" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="img2" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="bottom">我的</div>
      </tab-bar-item>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>
  .tabBar{
    display: flex;
    text-align: center;
  }
  .tabBarItem{
    flex: 1;
  }
</style>