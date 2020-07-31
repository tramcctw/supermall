<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <pop :category-list="categoryList" @itemClick="itemClick"/>
    <category-item class="category-item" :category-sub-list="categorySubList"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Pop from "./childCompus/Pop"
  import {getCategory, getSubCategory} from "network/category";
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
        // console.log(this.categorySubList)
      })
    },
    methods:{
      itemClick(maitKey){
        this.maitKey = maitKey
        // console.log(this.maitKey)
        getSubCategory(this.maitKey).then(res=>{
          setTimeout(()=>{
            this.categorySubList = res.data.list
          },200)
        })
      }
    }
  }
</script>

<style scoped>


  #category{
    position: relative;
    height: 100vh;
  }

  #category .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }

  .category-item{
    margin-left: 112px;
  }

</style>
