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
      showSideBar: false,
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      mountedNum: 0
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
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      if (this.mountedNum < 2) {
        this.mountedNum++;
        return;
      }

      // 是否显示导航栏阴影
      if (!this.showNavBarShadow && this.scrollTopPosition() > 80) {
        // 如果滚动制超过80px，显示导航栏阴影
        this.showNavBarShadow = true;
      } else if (this.scrollTopPosition() < 80) {
        // 如果滚动制超小于80px，显示导航栏阴影
        this.showNavBarShadow = false;
      }
      // 是否显示返回顶部按钮
      if (!this.showSideBar && this.scrollTopPosition() > 800) {
        // 如果滚动制超过800px，显示返回顶部按钮
        this.showSideBar = true;
        console.log("返回顶部 true");
      } else if (this.showSideBar && this.scrollTopPosition() < 800) {
        // 如果滚动制超小于800px，显示返回顶部按钮
        this.showSideBar = false;
        console.log("返回顶部 false");
      }
    },
    // 获取浏览器距离顶部的位置
    scrollTopPosition() {
      return (
        // 浏览器兼容
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      );
    },
    // 返回顶部，借用jquery
    moveTop() {
      // eslint-disable-next-line
      $("html,body").animate({ scrollTop: 0 }, 300);
      // eslint-disable-next-line
      if ($("html").scrollTop()) {
        // eslint-disable-next-line
        $("html").animate({ scrollTop: 0 }, 300);
        return false;
      }
      // eslint-disable-next-line
      $("body").animate({ scrollTop: 0 }, 300);
      console.log(12);
      return false;
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
