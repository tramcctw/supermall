<template>
  <div id="detailShop" v-if="Object.keys(detailShop).length !== 0">
    <div class="detailShop">
      <div>
        <div class="font">
          <div class="title">{{detailShop.desc}}</div>
          <div class="start"></div>
          <div class="end"></div>
          <div class="key">{{detailShop.detailImage[0].key}}</div>
        </div>

        <div class="image" v-for="item in detailShop.detailImage[0].list">
          <img :src="item" alt="" @load="imgLoad">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props:{
      detailShop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>

  #detailShop{
    background-color: #eee;
  }

  .detailShop{
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 0;
    margin-bottom: 5px;
  }

  .detailShop .font{
    position: relative;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .detailShop .font>div:nth-child(1){
    position: relative;
    padding: 15px 0;
    font-size: 3.7vw;
    box-sizing: border-box;
  }

  .detailShop .font .title::before{
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background-color: #000;
    position: absolute;
    top: 0;
  }

  .detailShop .font .title::after{
    content: "";
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #000;
    right: 0;
    bottom: 0;
  }

  .start,.end{
    width: 24vw;
    height: 1px;
    position: absolute;
    background-color: #000;
    opacity: .5;
  }
  .start{
    top: 5px;
  }

  .end{
    right: 15px;
  }

  .detailShop .font .key{
    margin: 10px 0;
    font-size: 15px;
  }

  img {
    width: 100vw;
  }



</style>