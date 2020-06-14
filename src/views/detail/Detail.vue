<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <!-- 注意props属性传值topItem要用-连接，因为这里不区分大小写
        写topItem 可以误认为topitem导致值无法传递 事件可以使用驼峰标识-->
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"
      @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  // import Toast from "components/common/toast/Toast";

  // import BackTop from "components/content/backTop/BackTop";
  import {mapActions} from 'vuex'
  //将vuex里面的actions里面的方法映射到当前组件的methods里面
  import {getDetail, Goods,Shop,GoodsParam,getRecommend} from "network/detail";
  import {debounce} from "common/utils";
  import {itemListenerMixin,backTopMixin} from "common/mixin";
  import {BACKTOP_DISTANCE} from "common/const"

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll,
      // Toast
    },
    mixins:[itemListenerMixin,backTopMixin],
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo: {},
        recommends:[],
        themeTopY:[],
        getThemeTopY:null,
        currentIndex:0,
      }
    },
    created() {
      this.iid = this.$route.params.id
      //2请求详情数据
      getDetail(this.iid).then(res=>{
        //console.log(res);
        const data = res.result
        //获取顶部轮播图的数据
        this.topImages = res.result.itemInfo.topImages
        //获得商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3创建店铺信息
        this.shop = new Shop(data.shopInfo)
        // 4 保存商品的详情数据
        this.detailInfo = data.detailInfo;
        //5 获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //6 保存评论信息
        if (data.rate.cRate !== 0) { //有些商品没有评论信息
          this.commentInfo = data.rate.list[0];
        }

        //数据获取后 dom还未渲染完成
        // this.themeTopY.push(0)
        // this.themeTopY.push(this.$refs.params.$el.offsetTop)
        // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopY.push(this.$refs.recommend.$el.offsetTop)

        // this.$nextTick(()=>{
        //   //子组件的dom渲染完后 回调该函数 图片不一定加载完
        //   this.themeTopY = []
        //   this.themeTopY.push(0)
        //   this.themeTopY.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        //   // console.log(this.themeTopY);
        // })

      })
      // 3 请求推荐数据
          getRecommend().then(res=>{
        this.recommends = res.data.list
      })

      //4 给getThemeTopY赋值,对themeTopYs做一个防抖
      this.getThemeTopY = debounce(()=>{
        // console.log('...');
        this.themeTopY = []
        this.themeTopY.push(0)
        this.$refs.params.$el && this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.$refs.comment.$el && this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.$refs.recommend.$el && this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopY.push(Number.MAX_VALUE)
        //js能表示的最大值
      },200)
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,50);
      this.$bus.$on('detailItemImageLoad',()=>{
        refresh();
        //  重新计算滚动的高度
      })
    },
    methods:{
      ...mapActions(['addCart']),
      // ...mapActions({
      //   add:'addCart' //起别名
      // }),
      imageLoad() {
        // console.log('...');
        // this.$refs.scroll.refresh();
      //  重新计算可滚动高度
        this.newRefresh()

        this.getThemeTopY()
      },
      titleClick(index) {
        // console.log(index);
        // console.log(this.themeTopY);
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500)
      },
      contentScroll(position) {
        //获取y值
        const positionY = -position.y;
        const len  = this.themeTopY.length
        //然后拿positionY和主题中的值对比
        for(let i = 0; i < len - 1;i ++){
          //i遍历出来的是字符串 y用in
          // if( (i< len-1) && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) ){
          //   if(this.currentIndex !== i){
          //     this.currentIndex = i;
          //     // console.log(this.currentIndex);
          //     this.$refs.nav.currentIndex = this.currentIndex
          //   }
          //
          // } else  if(i === len - 1 && positionY >= this.themeTopY[i]){
          //   if(this.currentIndex !== i){
          //     this.currentIndex = i;
          //     // console.log(this.currentIndex);
          //     this.$refs.nav.currentIndex = this.currentIndex
          //   }
          // }
          //在数组中加一个最大值
          if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE
      },
      addToCart(){
        //获取加入购物车的商品
       const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        //将商品添加到购物车
        // this.$store.commit('addCart',product)
        this.addCart(product).then((res)=>{
          this.$toast.show(res);
        })
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    height: calc(100% - 44px - 49px);
   /* 这里的100%是相对于父元素的高度
    而这里父元素是由内容撑开，所以需要设置父元素为视口高度*/
  }

</style>
