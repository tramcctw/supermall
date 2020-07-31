<template>
  <div>
    <ic-slider class="swiper" :autoplay='2000'>
      <ic-slider-item v-for="(item,index) in banners">
          <img :src="item" alt="">
      </ic-slider-item>
    </ic-slider>
  </div>
</template>

<script>
  import {IcSlider,IcSliderItem} from 'vue-better-slider'
  export default {
    name: "DetailSwiper",
    components:{
      IcSlider,
      IcSliderItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swiper{
    margin-top: 44px;
    height: 300px;
  }
</style>