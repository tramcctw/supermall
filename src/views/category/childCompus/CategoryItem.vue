<template>
  <div id="myCategoryItem">
    <scroll :probe-type="3" class="scroll" ref="scroll">
      <div class="categoryItem">
        <goods-item class="content"
                    v-for="(item,index) in categorySubList"
                    :item="item" @imageLoad="imageLoad"/>
      </div>
    </scroll>
  </div>

</template>

<script>
  import GoodsItem from "./GoodsItem";
  import Scroll from "../../../components/common/scroll/Scroll";
  export default {
    name: "CategoryItem",
    components:{
      GoodsItem,
      Scroll
    },
    props:{
      categorySubList:{
        default(){
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
  #myCategoryItem{
    height: calc(100vh - 44px - 49px);
  }
  .scroll{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }

  .categoryItem{
    display: flex;
    flex-wrap: wrap;
  }
  .categoryItem .content{
    margin-left: 10px;
  }
</style>
