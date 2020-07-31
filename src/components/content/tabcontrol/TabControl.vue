<template>
  <div id="tabControl">
    <div v-for="(item,index) in titles"
         :class="{active:index === changeIndex,item:true}"
         @click="btnClick(index)">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      },
      currentIndex:{
        type:Number,
        default:0
      },
    },
    computed:{
      changeIndex(){
        this.currIndex = this.currentIndex
        return this.currIndex
      }
    },
    methods:{
      btnClick(index){
        // console.log(index,this.titles)
        this.currIndex = index
        this.$emit('btnClick',index)
      },
    }
  }
</script>

<style scoped>
  #tabControl{
    height: 40px;
    display: flex;
    text-align: center;
    line-height: 40px;
    background-color:#fff;
    margin-top: -5px;
  }
  
  .item{
    flex: 1;
    position: relative;
  }

  .active::after{
    position: absolute;
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background-color: var(--color-tint);
    top: 30px;
    left: 43px;
  }
  .active{
    color:var(--color-tint)
  }

</style>