<template>
  <div id="goodsItem" @click="goodsDetail">
    <img v-lazy="showImage(item)" @load="imgRefresh">
    <p>{{item.title}}</p>
    <div class="price">
      <span class="money">{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      showImage(item){
        return item.image || item.show.img
      },

      imgRefresh(){
        this.$bus.$emit('imgRefresh')
      },

      goodsDetail(){
        this.$router.push('/detail/'+this.item.iid)
      }
    }
  }
</script>

<style scoped>
  #goodsItem{
    width: 48%;
    margin-left: 5px;
  }

  #goodsItem img{
    width: 100%;
    border-radius: 5px;
  }

  #goodsItem p{
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px;
    box-sizing: border-box;
  }

  #goodsItem .price{
    font-size: 12px;
    padding: 0 0 2px 0;
    display: flex;
    justify-content: center;
  }

  #goodsItem .price .money{
    position: relative;
    color: var(--color-tint);
    margin-right: 19px;
  }

  #goodsItem .price .money::after{
    content:"";
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0;
    left: 36px;
    background: url("~assets/img/common/collect.svg") 0 0/12px 12px;
  }
</style>