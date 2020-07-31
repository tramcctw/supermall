<template>
  <div id="detail">
<!--    详情页导航-->
    <detail-bar/>
    <scroll class="detailScroll" ref="scroll">
      <!--    详情页轮播图-->
      <detail-swiper :banners="topImages"/>
      <!--    商品信息-->
      <goods-message :goods="goods"/>
      <!--    店铺信息-->
      <shop-message :shop="shop"/>
<!--      店铺详细信息-->
      <detail-shop :detail-shop="detailShop" @imgLoad="imgLoad"/>
<!--      商品的参数-->
      <shop-params :params="shopParams"/>
<!--      商品评论-->
      <shop-comment :shop-comment="shopComment"/>
<!--      商品推荐-->
      <goods :goods-list="recommends"/>
    </scroll>
    <back-top @click.native="backClick" v-show="currentY <= -1173"/>
<!--    底部Bar-->
    <bottom-bar class="bottomBar" @addCart="addToCart"/>
  </div>
</template>

<script>
  import {getDetailGoods,GoodsParam,getRecommend} from "network/detail";
  import DetailBar from "./childComps/DetailBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import {GoodsMes,Shop} from "common/goodsMes";
  import GoodsMessage from "./childComps/GoodsMessage";
  import ShopMessage from "./childComps/ShopMessage";
  import Scroll from "components/common/scroll/Scroll";
  import DetailShop from "./childComps/DetailShop";
  import BottomBar from "./childComps/BottomBar";
  import ShopParams from "./childComps/ShopParams";
  import ShopComment from "./childComps/ShopComment";
  import Goods from "components/content/goods/Goods";
  import BackTop from "components/content/backtop/BackTop";
  import {backTop} from "common/mixin";
  import {mapActions} from 'vuex'
  export default {
    name: "Detail",
    components:{
      DetailBar,
      DetailSwiper,
      GoodsMessage,
      ShopMessage,
      Scroll,
      DetailShop,
      BottomBar,
      ShopParams,
      ShopComment,
      Goods,
      BackTop
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailShop:{},
        shopParams:{},
        shopComment:[],
        recommends:[],
      }
    },
    mixins:[backTop],
    mounted() {
      this.$refs.scroll.addListenerPosition()
    },
    created() {
      this.iid = this.$route.params.iid
      getDetailGoods(this.iid).then(res=>{
        // console.log(res);
        let data = res.result
        this.topImages = data.itemInfo.topImages
        // console.log(this.topImages);
        this.goods = new GoodsMes(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailShop = data.detailInfo
        this.shopParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate !==0){
          this.shopComment = data.rate.list
        }
        getRecommend().then(res=>{
          this.recommends = res.data.list
        })
      })

      this.$bus.$on('posRenew',(item)=>{
        this.currentY = item
      })
    },
    methods:{
      ...mapActions(['addCart']),
      imgLoad(){
        if(this.timer) return
        this.timer = setTimeout(()=>{
          this.$refs.scroll.refresh()
          this.timer = null
        },100)
      },
      addToCart(){
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        this.addCart(product).then(res=>{
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style scoped>
  .detailScroll{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    background-color: #eee;
  }

  .bottomBar{
    position: fixed;
    z-index: 9;
    bottom: 0;
  }

</style>