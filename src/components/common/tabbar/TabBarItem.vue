<template>
  <div id="tabBarItem" @click="divClick">
      <div v-if="!isActive">
        <slot name="img1"></slot>
      </div>
      <div v-else>
        <slot name="img2"></slot>
      </div>
    <div :class="{font:true,red:isActive}"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:{
        type:String,
        default(){
          return ""
        }
      }
    },
    data(){
      return {

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      divClick(){
        if(this.isActive){
          return
        }
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  #tabBarItem img{
    width: 25px;
  }

  .red{
    color: red;
  }

  #tabBarItem .font{
    position: relative;
    font-size: 14px;
    top: -5px;
  }
</style>