<template>
  <div class="better-wrapper" ref="betterWrapper">
    <div id="app">
      <!--引入nav-bar组件-->
      <!--根据当前router-view传过来的参数，然后传导航栏组件，从而渲染当前已经激活的link的css样式-->
      <navBar
        :linkActive="'home'"
        :showNavBarShadow="showNavBarShadow"
      ></navBar>
      <router-view></router-view>
      <bottom></bottom>
    </div>
  </div>
</template>
<script>
// 引入导航栏组件
import navBar from "@/components/nav-bar/nav-bar";
// 引入页脚组件
import bottom from "@/components/bottom/bottom";
export default {
  name: "App",
  data() {
    return {
      showNavBarShadow: false,
      showSideBar: false
    };
  },
  mounted() {
    // 监听页面实时滚动值，从而控制导航栏投影和侧边栏的显示/隐藏
    window.addEventListener("scroll", this.appScroll);
  },
  updated() {},
  methods: {
    // 实时监听浏览器滚动值
    appScroll() {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      // 如果滚动制超过80px，显示导航栏阴影
      if (scrollTop > 80) {
        this.showNavBarShadow = true;
        // 如果滚动制超过800px，显示侧边栏返回顶部按钮
        this.showSideBar = scrollTop > 800;
        console.log("返回顶部" + this.showSideBar);
      } else {
        this.showNavBarShadow = false;
      }
    }
  },
  components: {
    navBar,
    bottom
  }
};
</script>
<style lang="stylus">
// 引入自己的css样式
@import "../src/common/css/index.styl"
  #app {
    width: 100%;
    // 给navigationBar留出位置；
    padding-top: 80px;
  }
  /*设置顶部进度条插件颜色*/
  #nprogress .bar {
    background: #14948a !important;
  }
</style>
