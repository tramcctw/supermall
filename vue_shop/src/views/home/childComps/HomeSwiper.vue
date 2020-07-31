<template>
  <div>
    <ic-slider class="swiper" :autoplay='2000'>
      <ic-slider-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperRefresh">
        </a>
      </ic-slider-item>
    </ic-slider>
  </div>
</template>

<script>
  import {IcSlider,IcSliderItem} from 'vue-better-slider'
  export default {
    name: "HomeSwiper",
    components:{
      IcSlider,
      IcSliderItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      swiperRefresh(){
        this.$emit('swiperRefresh')
      }
    }
  }
</script>

<style scoped>
  .swiper{
    width: 100vw;
  }

  img{
    width: 100vw;
  }
</style>
