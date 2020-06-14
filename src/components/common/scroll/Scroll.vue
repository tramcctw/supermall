<template>
<!--  使用时必须有固定的高度-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      // console.log(this);
      //这里不能去使用选择器，因为在其他组件中也可能有class=wrapper的元素
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',position=>{
          this.$emit('scroll',position);
        })
      }

      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          //监听到滚动到底部
          this.$emit('pullingUp');
        })
      }

    },
    methods:{
      //做一层保证 保证scroll必须有值
      scrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      refresh(){
        // console.log('...');
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0;
      }
    },
  }
</script>

<style scoped>

</style>
