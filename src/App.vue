<template>
  <div
    :class="['better-wrapper', mob ? 'better-wrapper-mob' : '']"
    ref="betterWrapper"
  >
    <div id="app" v-if="isIE === -1 || isIE === 'edge'">
      <!--引入nav-bar组件-->
      <!--根据当前router-view传过来的参数，然后传导航栏组件，从而渲染当前已经激活的link的css样式-->
      <navBar
        :linkActive="'home'"
        :showNavBarShadow="showNavBarShadow"
        :mob="mob"
      ></navBar>
      <!--加上keep-alive后，实现页面路由缓存、缓存路由，切换路由时，保存页面状态，从而减少请求重复的内容-->
      <!--<keep-alive></keep-alive>-->
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
      mob: false,
      // 是否是ie或者Edge浏览器
      isIE: -1,
      // 用于判断是否是已经存在的router链接，如果不存在就跳转到404页面；
      routerPath: [
        "/",
        "/about",
        "/product",
        "/productPacs",
        "/productFollow",
        "/ProductHospitalInfo",
        "/productWardRound",
        "/productFilm",
        "/productIllMG",
        "/productRecovery",
        "/productYLT",
        "/productRegionalCloud",
        "/productIntensiveCare",
        "/productWiseCare",
        "/productHemodialysis",
        "/productClinicalDrug",
        "/productRegionalSlow",
        "/newsCenter",
        "/solutionCenter",
        "/join",
        "/contact",
        "/newsDetail",
        "/notFound"
      ]
    };
  },
  mounted() {
    // TODO: 版本完成后放到笔记
    // TODO: 版本完成后放到笔记
    // TODO: 版本完成后放到笔记
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
      // 图片防止拖拽
      // ondragstart="return false;"
      // eslint-disable-next-line
      $("img").attr("ondragstart", "return false;");
    }, 1000);

    // 因为VUE是SPA模式，所以在地址栏如果直接输入某个页面的地址的话，会404
    // 因为此时没有触发router跳转
    // 那么就需要监听哈希值的改变，如果哈希值改变了，那么就强制router跳转到该值；
    // 这里是监听当前地址栏哈希值，从而控制重新跳转路由，
    // 而且在router.js中需要设置跳转方式是hash；
    window.addEventListener(
      "hashchange",
      () => {
        console.log("当前哈希值=>" + window.location.hash.slice(1));
        var currentPath = window.location.hash.slice(1); // 获取输入的路由
        if (this.$router.path !== currentPath) {
          this.$router.push(currentPath); // 动态跳转
        }

        // this.routerPath
        // router加载之后，判断是否存在，如果router不存在则跳转到404notFound页面
        var findRouter = this.routerPath.find(item => {
          // return的后面跟的是条件，item就是数组、对象集；
          return this.$route.path === item;
        });
        if (findRouter === undefined) {
          console.log("app.vue中判断，路由不存在");
          this.$router.push({
            path: "/notFound"
          });
        }
      },
      false
    );
  },
  created() {
    // 初始化数据的时候判断是否为移动端，用于传给每个一级页面，然后由一级页面传给每个子组件
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("index-modu-1-加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }

    // 监听屏幕尺寸改变实践，屏幕尺寸改变时候判断是否为移动端，用于传给每个一级页面，然后由一级页面传给每个子组件
    // eslint-disable-next-line
    $(window).resize(()=> {
      this.mob = !!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i);
    });

    // 判断是否是ie浏览器，整体页面会用这个isIE做判定条件，是否渲染页面，还是渲染‘抱歉，不能用ie’的div；
    this.isIE = this.iEVersion();
    // 因为在一开始就在body中追加了对不起，不支持ie浏览器，所以，如果能够进入到这里，说明vue可以生效
    // （因为IE对methods的中function不兼容，所以js报错，不能进入到vue的JS中；）
    // 但是允许Edge浏览器，因为就算是用Edge浏览器模拟ie8 ie11，那么vue的function简写也能够识别，不会有BUG；
    if (this.isIE === -1 || this.isIE === "edge") {
      // 移除不支持ie的DOM元素
      // eslint-disable-next-line
      $(".is-ie").remove();
    }
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
    },
    // 判断是否为id浏览器，这个函数也能判断ie浏览器版本
    iEVersion() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE =
        userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
      var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
      var isIE11 =
        userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
      if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion === 7) {
          return 7;
        } else if (fIEVersion === 8) {
          return 8;
        } else if (fIEVersion === 9) {
          return 9;
        } else if (fIEVersion === 10) {
          return 10;
        } else {
          return 6; //IE版本<=7
        }
      } else if (isEdge) {
        return "edge"; //edge
      } else if (isIE11) {
        return 11; //IE11
      } else {
        return -1; //不是ie浏览器
      }
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
