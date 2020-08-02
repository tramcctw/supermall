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
        <div slot="bottom" class="parent"><div :class="{active:judgeActive}" v-show="judgeActive">{{getCompute}}</div>购物车</div>
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
    data(){
      return{
        isActive:true
      }
    },
    components:{
      TabBarItem,
      TabBar
    },
    computed:{
      getCompute(){
        return this.$store.getters.getCartList.length
      },
      judgeActive(){
        if(this.$store.getters.getCartList.length === 0){
          this.isActive = false
        }else{
          this.isActive = true
        }
        return this.isActive
      }
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

  .parent{
    position: relative;
  }

  .active{
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: red;
    top: -27px;
    right: 23px;
    color: #fff;
    text-align: center;
    line-height: 14px;
    font-size: 13px;
    font-weight: bolder;
  }
</style>