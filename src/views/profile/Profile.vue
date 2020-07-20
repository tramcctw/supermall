<template>
  <div id="profile">
    <Nav-bar class="profile-nav"><div slot="center">我的信息</div></Nav-bar>
    <Message/>
    <consume-message/>
    <Material/>
    <Others/>
  </div>
</template>

<script>

  import NavBar from "../../components/common/navbar/NavBar";
  import Message from "./childComps/Message";
  import ConsumeMessage from "./childComps/ConsumeMessage";
  import Material from "./childComps/Material";
  import Others from "./childComps/Others";
  export default {
    name: "Profile",
    components:{
      NavBar,
      Message,
      ConsumeMessage,
      Material,
      Others
    }
  }
</script>

<style scoped>

  .profile-nav{
    background-color: var(--color-tint);
    color: #fff;
  }

  #profile{
    background-color: #eee;
  }

</style>
