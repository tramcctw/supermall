<template>
  <div id="comment" v-if="Object.keys(shopComment).length !== 0">
    <div class="userComment">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="user">
      <div class="userImage">
        <img :src="shopComment[0].user.avatar" alt="">
        <span>{{shopComment[0].user.uname}}</span>
      </div>
      <div class="commentDate">
        <p>{{shopComment[0].content}}</p>
        <div class="date">
          <div>{{shopComment[0].created |date()}}</div>
          <div>{{shopComment[0].style}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "ShopComment",
    props:{
      shopComment:{
        type:Array,
        default(){
          return []
        }
      }
    },
    filters:{
      date(value){
        let date = new Date(value*1000)
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  #comment{
    padding: 5px 12px;
    background-color: #fff;
    margin-bottom: 5px;
  }
  .userComment{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
  }

  .userImage{
    position: relative;
    padding: 10px 0 8px 0;
    display: flex;
    box-sizing: border-box;
  }
  .userImage img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .userImage span{
    position: absolute;
    top: 25px;
    left: 50px;
    font-size: 4vw;
  }

  .commentDate{
    padding-bottom: 15px;
    box-sizing: border-box;
  }

  .commentDate p{
    font-size: 3.7vw;
    color: #777;
  }

  .commentDate  div{
    font-size: 3.4vw;
    color: #999;
  }

  .date{
    display: flex;
  }

  .date>div{
    margin-right: 8px;
  }
</style>