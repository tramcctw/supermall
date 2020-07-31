<template>
  <div id="params" v-if="Object.keys(params).length !== 0">
    <div>
      <table>
        <tr v-for="item in params.sizes[0]">
          <td v-for="val in item">{{val}}</td>
        </tr>
      </table>
      <table>
        <tr v-for="item in params.sizes[1]">
          <td v-for="val in item">{{val}}</td>
        </tr>
      </table>
    </div>
    <div>
      <table>
        <tr v-for="item in params.infos">
          <td class="params-key">{{item.key}}</td>
          <td class="params-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <img :src="params.image" alt="">
  </div>
</template>

<script>
  export default {
    name: "ShopParams",
    props:{
      params:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    activated() {
      console.log(this.params);
    }
  }
</script>

<style scoped>
  #params{
    padding: 20px 15px;
    font-size: 14px;
    background-color: #fff;
    margin-bottom: 5px;
  }

  img{
    width: 100%;
  }

  table{
    width: 100%;
    border-collapse: collapse;
  }
  tr{
    height: 42px;
  }
  table tr{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .params-key{
    width: 95px;
  }

  .params-value{
    color: var(--color-high-text);
  }
</style>