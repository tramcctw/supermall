<template>
  <div id="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        msg:'',
        isShow:false
      }
    },
    methods:{
      show(msg='默认',duration=1000){
        this.msg = msg
        this.isShow = true
        setTimeout(()=>{
          this.isShow = false
          this.msg = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  #toast{
    position: fixed;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #000;
    opacity: .8;
    color: #fff;
    border-radius: 20px;
    padding: 5px 10px;
  }
</style>