<template>
  <div class="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        bscroll:null,
        positionY:0
      }
    },
    props:{
      probeType:{
        type:Number,
        default:3
      },
      click:{
        type:Boolean,
        default:true
      },
      pullUpLoad:{
        type:Boolean,
        default:true
      }
    },
    mounted() {
      this.bscroll = new BScroll('.wrapper',{
        probeType: this.probeType,
        click:this.click,
        pullUpLoad: this.pullUpLoad
      })
    },
    methods:{

      pullLoading(){
        this.bscroll.on('pullingUp',()=>{

          this.$parent.addGoods()
          this.refresh()

          setTimeout(()=>{
            this.bscroll.finishPullUp()
          },2000)
        })
      },

      refresh(){
        this.bscroll && this.bscroll.refresh()
      },

      addListenerPosition(key=0){
        this.bscroll.on('scroll',position=>{
          this.$parent.currentY = position.y
          this.$bus.$emit("posRenew",position.y)
          // console.log(position.y)
        })
      },

      scrollTop(x,y,time=500){
        this.bscroll.scrollTo(x,y,time);
      },

      backTop(){
        this.scrollTop(0,0,500)
      }
    }
  }
</script>

<style scoped>

</style>