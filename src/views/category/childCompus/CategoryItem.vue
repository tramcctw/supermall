<template>
  <div id="categoryItem">
      <div class="goods">
        <div class="item" v-for="item in categorySubList">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryItem",
    props:{
      categorySubList:{
        type:Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style scoped>
  img{
    width: 110px;
  }
  .goods{
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: calc(100vh - 44px - 49px);
  }
  .item{
    margin-left: 12px;
  }

  .item div{
    text-align: center;
  }

</style>