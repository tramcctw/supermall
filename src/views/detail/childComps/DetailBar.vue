<template>
  <div id="nav">
    <detail-nav class="content">
      <div @click="backClick" class="item"><img src="~assets/img/common/back.svg" alt=""></div>
      <div v-for="(item,index) in titles"
           :class="{active:index === currentIndex,item:true}"
            @click="btnClick(index)">{{item}}</div>
      <div class="item"></div>
    </detail-nav>
  </div>
</template>

<script>

  import DetailNav from "components/content/detailnav/DetailNav";
  export default {
    name: "DetailBar",
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      DetailNav
    },
    methods:{
      backClick(){
        this.$router.back()
      },
      btnClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  img{
    /*margin-left: -3px;*/
    margin-top: 8px;
  }

  .item{
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    flex: 1;
  }

  .active{
    color: var(--color-tint);
  }
</style>