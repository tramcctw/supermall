<template>
  <div id="recommends">
    <div v-for="item in recommends">
      <a :href="item.link">
        <div><img :src="item.image" alt=""></div>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommends",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

  #recommends{
    display: flex;
    margin-top: -3px;
    padding: 10px 0 20px;
    margin-bottom: 10px;
    background-color: #fff;
  }

  #recommends img{
    width: 70px;
  }

  #recommends>div{
    flex: 1;
  }

  #recommends>div div{
    text-align: center;
  }

</style>