<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"
      @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
    </scroll>
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

  import {getDetail, Goods,Shop,GoodsParam} from "network/detail";

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
      Scroll,
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo: {},
      }
    },
    created() {
      this.iid = this.$route.params.id

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
        if (data.rate.list) { //有些商品没有评论信息
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    methods:{
      imageLoad() {
        // console.log('...');
        this.$refs.scroll.refresh();
      //  重新计算可滚动高度
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
    height: calc(100% - 44px);
   /* 这里的100%是相对于父元素的高度
    而这里父元素是由内容撑开，所以需要设置父元素为视口高度*/
  }

</style>
