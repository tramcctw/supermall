<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return{
        iid:null,
        topImages:[]
      }
    },
    created() {
      this.iid = this.$route.params.id

      getDetail(this.iid).then(res=>{
        //console.log(res);
        //获取顶部轮播图的数据
        this.topImages = res.result.itemInfo.topImages
      })
    }
  }
</script>

<style scoped>

</style>
