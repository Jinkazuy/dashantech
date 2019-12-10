<template>
  <!--navbar-wrapper navbar-shadow-->
  <div
    :class="[
      'navbar-wrapper w100',
      showNavBarShadow ? 'navbar-shadow' : '',
      navBarHeightFlage ? 'navbar-h-low' : '',
      mob ? 'navbar-wrapper-mob' : ''
    ]"
  >
    <!--从这里开始，使用bootstrap的结构-->
    <nav class="navbar navbar-default">
      <div class="container-fluid w100">
        <!--下拉折叠按钮-->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">
            <logoMg></logoMg>
          </router-link>
        </div>
        <!--常规导航栏-->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!--导航栏链接，右浮动-->
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/">首页</router-link>
              <div class="border-line border-line-home" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li @mouseenter="proRouterHover" @mouseleave="proRouterUnHover">
              <router-link to="/product">产品与解决方案</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/newsCenter">公司动态</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <!--<li>-->
            <!--<router-link to="/solutionCenter">解决方案</router-link>-->
            <!--<div class="border-line" v-if="!mob"></div>-->
            <!--</li>-->
            <li>
              <router-link to="/join">加入我们</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/contact">联系大善</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <!--<div class="pro-toast-wrapper "></div>-->
    <!--产品中心下拉菜单-->
    <div
      :class="[
        'pro-toast-wrapper container',
        { 'pro-toast-wrapper-hover': proLinkShow }
      ]"
      @mouseenter="proToastWrapperMouseEnter"
      @mouseleave="proToastWrapperMouseLeave"
      v-if="!mob"
    >
      <!--<div class="left-text-box">-->
      <!--<h4>{{ toastDate[toastLeftText].tit }}</h4>-->
      <!--<p>{{ toastDate[toastLeftText].p }}</p>-->
      <!--</div>-->
      <div class="right-link-box">
        <ul class="clearfix">
          <li
            v-for="(item, idx) in proInfoData"
            :key="idx"
            @mouseenter="linkBoxHover(idx)"
            @click="linkBoxClick"
          >
            <router-link :to="item.routerTo">
              <div class="img-b">
                <img :src="item.imgLtSrc" />
              </div>
              <div class="tt-b">
                <h6 class="text-nowrap">{{ item.h4 }}</h6>
                <p class="text-nowrap">{{ item.p }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入logo动效
import logoMg from "../logoMg";
// 引入混入函数文件，拿到各个产品的详细信息；
import { productInfo } from "../../../common/js/mixin";
export default {
  name: "nav-bar.vue",
  // 下拉菜单的数据
  // 由混入函数引入
  // 引入混入函数文件，拿到各个产品的详细信息；
  // 那么就可以通过this.xx拿到产品mixin.js中的产品信息；
  mixins: [productInfo],
  data() {
    return {
      // 导航栏高度值，为true的时候就是加类名（降低高度），false就是移除类名（正常高度）
      // 通过类名控制
      navBarHeightFlage: false,
      // 当滚动时需要获取当前的触发滚动事件时候的值，而且之后不能改变
      onscrollPosition: false,
      // 初始滚动值
      scrollTopStart: 0,
      // 当前实时滚动值
      scrollTopNow: 0,
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      mountedNum: 0,
      // 产品中心连接鼠标移入
      proLinkShow: false,
      // 因为鼠标移出产品中心会将下拉浮层隐藏，因为需要一个定时器来防止移出时立刻隐藏；
      proToastTimeout: {},
      // 下拉菜单左侧文案的索引, 默认是1，也就是pacs,当鼠标移入每个li的时候，文案的索引跟着改变；
      toastLeftText: 0
    };
  },
  props: ["showNavBarShadow", "mob"],
  mounted() {
    // 监听页面实时滚动值，从而控制导航栏高度的值；
    window.addEventListener("scroll", this.pageScroll);
  },
  methods: {
    // 实时监听浏览器滚动值、监听页面滚动、监听滚动
    // 1、当标记值为height或者low的时候，分别监听滚动的正数和复数
    pageScroll() {
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      if (this.mountedNum < 3) {
        this.mountedNum++;
        return;
      }

      // 当滚动时需要获取当前的触发滚动事件时候的值，而且之后不能改变
      if (!this.onscrollPosition) {
        // 获取初始位置
        this.scrollTopStart = this.scrollTopPosition();
        // console.log("初始位置 => " + this.scrollTopStart);
        // 然后马上关闭这个节流阀，从而将此变量固定为触发滚动开始时的数值；
        // console.log("初始位置" + this.scrollTopStart);
        this.onscrollPosition = true;
      }

      // 之后还要获取实时滚动值，作为对比判断；
      this.scrollTopNow = this.scrollTopPosition();
      // console.log("实时位置 =>" + this.scrollTopNow);

      // 如果导航栏高度为正常，也就是80px时，监听滚动的正数值，也就是页面向下滚动
      if (
        parseInt(this.scrollTopNow - this.scrollTopStart) > 80 &&
        !this.navBarHeightFlage
      ) {
        // 如果滚动制超过正80px，就给导航栏加上一个类名，从而将导航栏高度降低；
        // console.log("加类名========================");
        this.navBarHeightFlage = true;
        // 将获取初始位置的节流阀打开
        this.onscrollPosition = false;
      } else {
        setTimeout(() => {
          // 滚动之后，还要重新获取初始位置
          this.scrollTopStart = this.scrollTopPosition();
          // console.log("初始位置" + this.scrollTopStart);
        }, 500);
      }

      // 如果滚动值小于-100px 并且 此时导航栏高度为低版，那么就进行判断；
      if (
        parseInt(this.scrollTopNow - this.scrollTopStart) < -80 &&
        this.navBarHeightFlage
      ) {
        // console.log("移除类名======================");
        this.navBarHeightFlage = false;
        // 将获取初始位置的节流阀打开
        this.onscrollPosition = false;
      } else {
        setTimeout(() => {
          // 滚动之后，还要重新获取初始位置
          this.scrollTopStart = this.scrollTopPosition();
          // console.log("初始位置" + this.scrollTopStart);
        }, 500);
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
    // 产品中心hover
    proRouterHover() {
      // 在  不是  移动端的情况下才能展开下拉菜单；
      if (!this.mob) {
        this.proLinkShow = true;
      }
    },
    proRouterUnHover() {
      // 移出产品中心A标签时，设置一个定时器延迟隐藏下拉浮层的时间；
      // ∵ 因为用了Bootstrap的框架，所以navbar的ul li标签调整高度后会影响其他分辨率下的样式，
      // ∴ 所以，在鼠标移出'产品中心'连接的时候，设置一个200毫秒的延迟，用户一般在200毫秒可以移入下拉的浮层
      //    那么在鼠标移入这个浮层时，清除这个定时器即可；
      // PSPSPSPS：另一个实现思路，当鼠标移出整个navigationBar（包括下拉浮层）时，隐藏下拉浮层； && 当鼠标移入其他navLink时，隐藏下拉浮层；
      this.proToastTimeout = setTimeout(() => {
        this.proLinkShow = false;
      }, 200);
    },
    // 鼠标移入下拉产品中心下拉浮层时，清除定时器；
    proToastWrapperMouseEnter() {
      this.proLinkShow = true;
      clearTimeout(this.proToastTimeout);
    },
    proToastWrapperMouseLeave() {
      this.proLinkShow = false;
    },
    // 鼠标移入下拉浮层的右侧的每个router时，改变左侧的文案的内容
    linkBoxHover(idx) {
      this.toastLeftText = idx;
    },
    // 点击每个下拉浮层的其中的link后，收起浮层
    linkBoxClick() {
      this.proLinkShow = false;
    }
  },
  components: {
    logoMg
  }
};
</script>

<style scoped lang="stylus">
  /*重置bootstrap样式=======开始=============*/
  .navbar {
    border: none;
    display: flex;
    top: 0;
    left: 50%;
    min-height: 80px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-50%)
    background-color: #fff;
    padding: 0 !important;
    transition: all .5s;
    z-index: 999;
    .container-fluid {
      padding: 0 !important;
      // logo
      .navbar-brand {
        width: 170px;
        height: 50px;
        padding: 0;
        margin-left: 28px !important;
        border-radius: 25px;
        position: relative;
        .ds-logo-navBar {
          z-index: 99;
        }
      }
      // 弥散投影
      .navbar-brand::after {
        content: '';
        width: 80%;
        height: 50%;
        position: absolute;
        bottom: -2px;
        left: 10%;
        filter: blur(14px);
        border-radius: 14px;
        background-color: #1addcf;
        z-index: -1;
        /*transition: all .4s;*/
      }
      // 鼠标移入弥散投影
      .navbar-brand:hover::after {
        animation-name: shadowTwinkle;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-delay: 0;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-play-state: running;
      }
      @keyframes shadowTwinkle {
        from {filter: blur(14px); bottom: -2px;}
        to {filter: blur(0); bottom: 10px;}
      }
    }
  }
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .navbar-collapse{
    height: 100%;
    align-items: center;
    color: #999;
  }
  .navbar-right {
    margin-top: 0 !important;
    height: 100%;
    li {
      color: #ccc;
      position: relative;
      /*下划线*/
      .border-line{
        position: absolute;
        bottom: 8px;
        width:0;
        height: 2px;
        background-color: #ccc;
        border-radius: 2px;
        transform: translateX(44px);
        transition: all 0.4s;
      }
      a {
        font-size: 16px;
        color: #808695 !important;
        font-weight: 400;
      }
    }
    li:first-of-type {
      /*下划线-首页，因为字数少2个，所以下划线偏移量少*/
      .border-line {
        transform: translateX(28px);
      }
    }
    li:hover {
      /*鼠标移入下划线*/
      .border-line{
        width: 66%;
        transform: translateX(26%);
      }
      a {
        /*font-weight: 800;*/
        color: #14948a !important;
      }
    }
  }
  @media (max-width: 768px){
    /*小尺寸折叠导航栏高度重置*/
    .container-fluid {
      .navbar-header{
        height: 80px;
        padding-top: 14px;
      }
    }
    /*小尺寸折叠导航按钮  */
    .navbar-toggle {
      margin-right: 40px;
    }
  }
  //解决在此分辨率下导航栏出现折叠bug
  @media (min-width: 768px) and (max-width: 992px){
    .container-fluid {
      .navbar-header{
        .navbar-brand {
          margin-left: 30px !important;
        }
      }
      .navbar-right{
        margin-left: 10px !important;
        li{
          a {
            font-size: 14px;
            padding: 10px 10px;
          }
        }
      }
    }
  }
    /*重置bootstrap样式=======结束=============*/

/*导航栏最外层样式*/
.navbar-wrapper{
  border-bottom: 2px solid #14948a;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 80px;
  z-index: 99999;
  box-shadow:0 1px 0 0 rgba(0,0,0,.05);
  transition: all .5s;
  // 将BS的导航栏按钮清除右侧浮动,需要一层一层找到；
  .navbar {
    border-radius: 0 !important;
    border-bottom: 2px solid #14948a;
    box-sizing: border-box;
    .container-fluid {
      .navbar-collapse {
        .navbar-right {
          float: left !important;
          margin: 6px 0 0 100px;
        }
      }
    }
  }
}
// 导航栏投影控制
.navbar-shadow {
  box-shadow:0 4px 8px 0 rgba(0,0,0,.1);
}
// 导航栏高度控制
.navbar-h-low {
  height: 60px;
  .navbar {
    min-height: 60px
  }
  .navbar-brand::after {
    bottom: 10px !important;
  }
}
//超小屏幕
@media (min-width: 200px) {
  .navbar {
    width: 100%;
  }
}
//小屏幕
@media (min-width: 768px) {
    .navbar {
        width: 768px;
    }
}
//中等屏幕
@media (min-width: 992px) {
    .navbar {
        width: 992px;
    }
}
//大屏幕：1336px~更高
@media (min-width: 1336px) {
    .navbar {
        width: 1336px;
        padding: 0 20px 0;
    }
}
.dslogo {
    width: 200px;
  }

/*导航栏当前页选中router样式*/
/*下划线*/
/* // 这里是 router-link 标签被激活，也就是访问哈希值匹配的时候，vue-router 会给这个link标签加上一些类名 */
/* // 所以在这个类名就能设置按钮被激活时候设置高亮的样式，也就是类似APP里的Tabbar激活样式差不多 */
/*文字*/
.router-link-exact-active.router-link-active{
  font-weight: 800;
  color: #14948a !important;
}
/*下划线*/
.router-link-exact-active.router-link-active+div{
  width: 66%;
  height: 2px;
  background-color: #14948a;
  border-radius: 2px;
  transform: translateX(26%);
}
/*因为首页少两个字，所以重置下划线偏移量*/
.router-link-exact-active.router-link-active+div.border-line-home{
  transform: translateX(26%);
}
// 产品中心浮层模块；
.pro-toast-wrapper {
  height: auto;
  padding: 0;
  background-color: #fff;
  border: 2px solid #14948a;
  margin: -20px auto 0;
  transition: all .4s;
  transform: translateY(-101%);
  border-top: 1px solid rgba(0,0,0,0);
  z-index: -99;
  box-shadow:0 1px 0 0 rgba(0,0,0,0);
  box-sizing: border-box;
  .left-text-box {
    width: 30%;
    height: 100%;
    background-color: #14948a;
    padding: 24px;
    color: #fff;
    h4 {
      margin: 12px 0 24px;
      font-size: 20px;
      font-weight: 700;
    }
    p {
      margin: 0;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .right-link-box {
    height: auto;
    width: 100%;
    padding: 0;
    ul {
      height: auto;
      width: 100%;
      padding: 0;
      li {
        float: left;
        display: flex;
        align-items: center;
        width: 20%;
        height: 60px;
        margin: 2%;
        a {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          .img-b{
            position: absolute;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            img {
              width: 100%;
              opacity: .3;
              transition: all .4s;
            }
          }
          .tt-b{
            position: absolute;
            left: 72px;
            right: 0;
            top: 0;
            bottom: 0;
            h6 {
              margin: 8px 0 8px;
              font-size: 16px;
              font-weight: 700;
              color: #17233D;
              transition: all .4s;
            }
            p {
              font-size: 12px;
              color: #808695;
              padding: 0 8px 0 0;
              transition: all .4s;
            }
          }
        }
        a:hover {
          .img-b {
            img {
              opacity: 1;
            }
          }
          .tt-b {
            h6 {
              color: #14948a;
            }
            p {
              color: #17233D;
            }
          }
        }
        a.router-link-active {
          .img-b {
            img {
              opacity: 1;
            }
          }
          .tt-b {
            h6 {
              color: #14948a;
              font-weight: 900;
            }
            p {
              color: #14948a;
            }
          }
        }
      }
    }
  }
}
.pro-toast-wrapper-hover {
  transform: translateY(0);
  border-top: 1px solid rgba(0,0,0,.05);
  box-shadow:0 10px 20px 0 rgba(0,0,0,.1);
}
// =========== 移动端样式 =============
.navbar-wrapper-mob {
  height: 60px;
  .navbar{
    min-height: 60px;
    .container-fluid {
      .navbar-header {
        height: 60px;
        padding-top: 0;
        // 按钮
        .navbar-toggle {
          margin-top: 14px;
          margin-right: 30px;
        }
        // logo
        .navbar-brand {
          margin-top: 16px;
          height: 30px;
          width: 102px;
          .log-mg {}
        }
      }
      // 下拉菜单
      #bs-example-navbar-collapse-1 {
        ul.navbar-nav {
          margin: 0 auto;
          padding: 6px 0;
          li {
            background-color: #eee;
            border-radius: 2px;
            float: left;
            width: 30%;
            margin: 1.5%;
            a {
              text-align: center;
            }
            a.router-link-exact-active {
            }
          }
        }
      }
    }
  }
}
</style>
