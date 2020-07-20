<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="myCategory">
      <Pop :category-list="categoryList" @itemClick="itemClick"/>
      <category-item class="category-item" :category-sub-list="categorySubList"/>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Pop from "./childCompus/Pop"
  import {getCategory, getSubCategory} from "../../network/category";
  import CategoryItem from "./childCompus/CategoryItem";

  export default {
    name: "Category",
    components:{
      NavBar,
      Pop,
      CategoryItem
    },
    data() {
      return {
        categoryList:[],
        categorySubList:[],
        maitKey:3627,
      }
    },
    created() {
      getCategory().then(res=>{
        // console.log(res)
        this.categoryList = res.data.category.list
      })

      getSubCategory(this.maitKey).then(res=>{
        this.categorySubList = res.data.list
        console.log(this.categorySubList)
      })
    },
    methods:{
      itemClick(maitKey){
        this.maitKey = maitKey
        console.log(this.maitKey)
        getSubCategory(this.maitKey).then(res=>{
          this.categorySubList = res.data.list
        })
      }
    }
  }
</script>

<style scoped>

  /*.content{*/
  /*  height: 200px;*/
  /*  overflow: scroll;*/
  /*  background-color: red;*/
  /*!*  原生的局部滚动会非常的卡顿在移动端*!*/
  /*}*/

  #category{
    height: calc(100vh - 49px);
  }

  #category .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }

  .myCategory{
    display: flex;
    height: calc(100vh - 44px - 49px);
  }


</style>
