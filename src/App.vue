<template>
  <div
    :class="['better-wrapper', mob ? 'better-wrapper-mob' : '']"
    ref="betterWrapper"
  >
    <div id="app">
      <!--引入nav-bar组件-->
      <!--根据当前router-view传过来的参数，然后传导航栏组件，从而渲染当前已经激活的link的css样式-->
      <navBar
        :linkActive="'home'"
        :showNavBarShadow="showNavBarShadow"
        :mob="mob"
      ></navBar>
      <router-view :mob="mob"></router-view>
      <sideBar :showSideBar="showSideBar"></sideBar>
      <bottom :mob="mob"></bottom>
    </div>
  </div>
</template>
<script>
// 引入导航栏组件
import navBar from "./components/layouts/nav-bar/nav-bar";
// 引入侧边栏组件
import sideBar from "./components/layouts/side-bar/sideBar";
// 引入页脚组件
import bottom from "./components/layouts/bottom/bottom";

export default {
  name: "App",
  data() {
    return {
      showNavBarShadow: false,
      showSideBar: false,
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      mountedNum: 0,
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  mounted() {
    // 1、监听页面实时滚动值，从而控制导航栏投影和侧边栏的显示/隐藏
    // 2、将bootstrap下拉导航navigationBar，点击屏幕或者滚动屏幕时，隐藏起来,否则只能再次点击汉堡建才能将bootstrap的下拉菜单隐藏起来；
    window.addEventListener("scroll", this.appScroll);
    // 这里是点击view-router中的内容，隐藏导航下拉菜单，但是view-router标签不能通过JQ选择器选择到，所以用#app>子集，选到每个view-router中的内容；
    // 将bootstrap下拉导航navigationBar，点击屏幕或者滚动屏幕时，隐藏起来,否则只能再次点击汉堡建才能将bootstrap的下拉菜单隐藏起来；
    // 因为jquery在初始化页面时不能马上拿到DOM元素，所以延迟一下即可；
    setTimeout(() => {
      // eslint-disable-next-line
      $(
        "#app>.home,.about,.product,.news-center,.join,.contact,.product-pacs"
      ).on("click", function() {
        // eslint-disable-next-line
        $("#bs-example-navbar-collapse-1")
          .removeClass("show")
          .addClass("collapse");
      });
    }, 1000);
  },
  created() {
    // 初始化数据的时候判断是否为移动端，用于传给每个一级页面，然后由一级页面传给每个子组件
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("index-modu-1-加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
    // 屏幕尺寸改变时候判断是否为移动端，用于传给每个一级页面，然后由一级页面传给每个子组件
    // eslint-disable-next-line
    $(window).resize(()=> {
      if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
        this.mob = true;
        console.log(this.mob);
      } else {
        this.mob = false;
        console.log(this.mob);
      }
    });
  },
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
      // 将bootstrap下拉导航navigationBar，点击屏幕或者滚动屏幕时，隐藏起来,否则只能再次点击汉堡建才能将bootstrap的下拉菜单隐藏起来；
      // eslint-disable-next-line
      $("#bs-example-navbar-collapse-1")
        .removeClass("show")
        .addClass("collapse");
    },
    // 获取浏览器距离顶部的位置
    scrollTopPosition() {
      return (
        // 浏览器兼容
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      );
    }
  },
  components: {
    navBar,
    bottom,
    sideBar
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
  // 选中的轮播点
  .swiper-pagination-bullet-active {
    background-color: #14948a !important;
  }
  // ========== 移动端样式 ============
  .better-wrapper-mob {
    #app {
      padding-top: 60px;
    }
  }
</style>
