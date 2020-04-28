<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
          <!--          加载完成一次 触发事件一次-->
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper/index"
  export default {
    name: "HomeSwiper",
    components:{
      SwiperItem,
      Swiper
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
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style scoped>

</style>
