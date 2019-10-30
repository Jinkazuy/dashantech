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

// 不管是不是ie浏览器，那么都添加这个DOM，在进入vue后，说明支持vue，那么就清除这个DOM元素，并且渲染#app；
// eslint-disable-next-line
$("<div class=\"is-ie\">\n" +
    '<div class="logo-wrapper">\n' +
    "<img src='images/ds-logo.png' width='100%' height='100%'>\n" +
    "</div>\n" +
    '<p class="sorry">\n' +
    "抱歉，不支持IE浏览器\n" +
    "<br />\n" +
    "请使用谷歌浏览器、火狐浏览器、360浏览器极速模式、Edge浏览器\n" +
    "</p>\n" +
    '<img class="qr" src="images/qr.jpg" />\n' +
    '<p class="flow">请关注 ‘大善科技’ 公众号，了解更多医疗科技资讯</p>\n' +
    "</div>"
).appendTo("body");

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

    // 判断是否是id浏览器，整体页面会用这个isIE做判定条件，是否渲染页面，还是渲染‘抱歉，不能用ie’的div；
    this.isIE = this.iEVersion();
    // 因为在一开始就在body中追加了对不起，不支持ie浏览器，所以，如果能够进入到这里，说明vue可以生效
    // （因为IE对methods的中function不兼容，所以js报错，不能进入到vue的JS中；）
    // 但是允许Edge浏览器，因为就算是用Edge浏览器模拟ie8 ie11，那么vue的function简写也能够识别，不会有BUG；
    if (this.isIE === -1 || this.isIE === "edge") {
      // 移除不支持ie的DOM元素
      // eslint-disable-next-line
      $(".is-ie").remove();
    }

    // this.routerPath
    // router加载之后，判断是否存在，如果router不存在则跳转到404页面
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
  .is-ie {
    margin-top: 50px;
    .logo-wrapper {
      display: block;
      margin: 120px auto 50px;
      width: 260px;
      height: 76px;
      border-radius: 38px;
      overflow: hidden;
    }
    p.sorry {
      text-align: center;
      font-size: 40px;
      color: #14948a;
    }
    img.qr {
      display: block;
      margin: 120px auto 0;
      width: 200px;
      height: 200px;
      border: 2px solid #14948a;
      border-radius: 4px;
    }
    p.flow {
      margin-top: 16px;
      color: #14948a;
      font-size: 16px;
      text-align: center;
      font-weight: 900;
    }
  }
</style>
