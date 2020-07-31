<template>
  <div id="home">
  <!--    导航-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control :titles="titles" @btnClick="btnClick"
                 v-show="currentY <= -610" class="tab-control" :currentIndex="btnIndex" :position="currentY"/>

    <scroll class="content" ref="scroll">
      <!--   轮播图 -->
      <home-swiper class="swiper" :banners="banners" @swiperRefresh="swiperRefresh"/>
      <!--   推荐 -->
      <HomeRecommends :recommends="recommends"/>
      <!--   本周流行 -->
      <feature-view/>
      <!--  选项卡-->
      <tab-control :titles="titles" @btnClick="btnClick" :currentIndex="btnIndex" :position="currentY"/>
      <!--  货物列表    -->
      <goods :goods-list="homeGoods[goodsIndex][goodsType]"/>
    </scroll>
    <back-top v-show="currentY <= -1173" @click.native="backClick"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeBanner,getHomeGoods} from "../../network/home";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommends from "./childComps/HomeRecommends";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabcontrol/TabControl";
  import Scroll from "components/common/scroll/Scroll";
  import Goods from "components/content/goods/Goods";
  import BackTop from "components/content/backtop/BackTop";
  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
        homeGoods:[
          {pop:[],page:1},
          {new:[],page:1},
          {sell:[],page:1}
        ],
        goodsIndex:0,
        goodsType:'pop',
        currentY:0,
        btnIndex:0,
        timer:null
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommends,
      FeatureView,
      TabControl,
      Scroll,
      Goods,
      BackTop
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTop(0,this.currentY,0)
    },
    created() {
      //拿到轮播图的数据
      getHomeBanner().then(res=>{
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })

      this.getHomeGoods('pop',1,0)
      this.getHomeGoods('new',1,1)
      this.getHomeGoods('sell',1,2)
      //注意首先必须要把三个页面的数据请求过来，vue会尽可能的复用一些dom，更新数据时
      //不会重新渲染dom，但是如果此时没有数据，则意味着图片没有高度，自然而然的会拉伸到上面
    },
    mounted() {
      this.$refs.scroll.pullLoading()
      this.$refs.scroll.addListenerPosition()
      this.$bus.$on("imgRefresh",()=>{
        //防抖函数，防止刷新次数过于频繁
        if(this.timer) return
        this.timer = setTimeout(()=>{
          this.$refs.scroll.refresh()
          this.timer = null
        },100)
      })
    },
    methods:{
      getHomeGoods(type,page,index){
        getHomeGoods(type,page).then(res=>{
          this.homeGoods[index][type].push(...res.data.list)
          // console.log(this.homeGoods[0].pop);
          this.homeGoods[index].page++
        })
      },

      addGoods(){
        getHomeGoods(this.goodsType,this.homeGoods[this.goodsIndex].page).then(res=>{
          this.homeGoods[this.goodsIndex][this.goodsType].push(...res.data.list)
          // console.log(this.homeGoods[0].pop);
          this.homeGoods[this.goodsIndex].page ++
        })
      },

      btnClick(index){
        this.btnIndex = index
        this.goodsIndex = index
        switch (index) {
          case 0:this.goodsType = 'pop';break;
          case 1:this.goodsType = 'new';break;
          case 2:this.goodsType = 'sell';
        }
      },

      backClick(){
        this.currentY = 0
        this.$refs.scroll.backTop()
      },

      swiperRefresh(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
    background-color: #eee;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control{
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>