<template>
  <div id="pop">
      <scroll class="content" :probe-type="3">
        <ul>
          <li v-for="(item ,index) in categoryList"
              :key="item.title"
              :class="{active:index===currentIndex}"
              @click="liClick(index,item)">{{item.title}}</li>
        </ul>
      </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import {getSubCategory} from "../../../network/category";

  export default {
    name: "Pop",
    components:{
      Scroll
    },
    props:{
      categoryList:{
        default(){
          return []
        }
      },
    },
    data(){
      return {
        currentIndex:0,
        maitKey:3627,
      }
    },
    created() {

    },
    methods:{
      liClick(index,item){
        this.currentIndex = index
        this.maitKey = item.maitKey
        this.$emit('itemClick',this.maitKey)
      }
    }
  }
</script>

<style scoped>
  #pop{
    height: calc(100vh - 44px - 49px);
  }
  #pop ul{
    height: calc(100% - 49px - 44px);
    overflow: auto;
    width: 112px;
  }
  ul li{
    height:44px;
    width: 112px;
    text-align: center;
    line-height: 44px;
    background-color: #eee;
    box-sizing: border-box;
    font-size: 19px;
  }

  #pop .active{
    background-color: #fafafa;
    position: relative;
  }

  #pop .active::after{
    content: "";
    display: block;
    position: absolute;
    width: 3px;
    top: 0px;
    height: 44px;
    background-color: var(--color-tint);
  }

  .content{
    overflow: hidden;
    height: calc(100vh - 49px - 44px);
  }

</style>
