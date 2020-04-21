<template>
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

      this.scroll.on('scroll',position=>{
        this.$emit('scroll',position);
      })

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
      })
    },
    methods:{
      //做一层保证 保证scroll必须有值
      scrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo() && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      refresh(){
        console.log('...');
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
