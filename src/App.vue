<template>
  <div id="app">
    <!--引入nav-bar组件-->
    <!--根据当前router-view传过来的参数，然后传导航栏组件，从而渲染当前已经激活的link的css样式-->
    <navBar :linkActive="'home'"></navBar>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
// 引入导航栏组件
import navBar from "@/components/nav-bar/nav-bar";
export default {
  name: "App",
  components: {
    navBar
  }
};
</script>
<style lang="stylus">
//引入自己的css样式
@import "../src/common/css/index.styl"
  #app {
    width: 100%;
    padding-top: 80px;
  }
</style>
