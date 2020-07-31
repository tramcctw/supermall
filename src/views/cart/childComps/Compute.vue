<template>
  <div id="compute">
    <div class="choice item">
      <div @click="choiceClick" :class="{active:getIsActive}">
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
      <span>全选</span>
    </div>
    <div class="price item">
      合计 ￥<span>{{getPrice}}</span>
    </div>
    <div class="count item">
      去计算<span>{{getCompute}}</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "Compute",
    data(){
      return {
        isActive:false
      }
    },
    methods:{
      ...mapGetters(['getCartList']),
      choiceClick(){
        this.isActive = !this.isActive
        if(this.isActive === true){
          this.getCartList().map(item=>{
            item.checked = true
          })
        }else{
          this.getCartList().map(item=>{
            item.checked = false
          })
        }
      }
    },
    computed:{
      getPrice(){
        let sum = this.getCartList().reduce((pre,n)=>{
          return n.checked? (pre + n.count * n.price) : pre
        },0)
        return sum.toFixed(2)
      },
      getCompute(){
        let total = this.getCartList().reduce((pre,n)=>{
          return n.checked ? (pre + n.count) : pre
        },0)
        return "("+total+")"
      },

      getIsActive(){
        let temp = this.getCartList().find(item=>item.checked === false)
        if(temp || this.getCartList().length === 0){
          this.isActive = false
        }else{
          this.isActive = true
        }
        return this.isActive
      }
    }
  }
</script>

<style scoped>
  #compute{
    background-color: #eee;
  }
  #compute{
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    font-size: 14px;
  }

  .count{
    background-color: var(--color-high-text);
    color: #fff;
    width: 24vw;
    text-align: center;
    line-height: 40px;
  }

  .choice{
    margin-left: 10px;
    display: flex;
  }

  .choice>div{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #aaa;
    align-self: center;
    position: relative;
    margin-right: 5px;
  }

  .choice>div img{
    position: absolute;
    top: 3px;
    left: 3px;
  }

  .price{
    flex: 1;
    margin-left: 20px;
  }

  .active{
    border: none !important;
    background-color: var(--color-high-text);
  }
</style>