<template>
  <!--navbar-wrapper navbar-shadow-->
  <div :class="['navbar-wrapper', showNavBarShadow ? 'navbar-shadow' : '']">
    <!--从这里开始，使用bootstrap的结构-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
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
          <a class="navbar-brand" href="#"
            ><img
              class="ds-logo-navBar"
              src="../../common/images/ds-logo.png"
            />
          </a>
        </div>
        <!--常规导航栏-->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!--导航栏链接，右浮动-->
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/home">首页</router-link>
              <div class="border-line border-line-home"></div>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/product">产品中心</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/newsCenter">公司动态</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/solutionCenter">解决方案</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/join">加入我们</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/contact">联系大善</router-link>
              <div class="border-line"></div>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
// 引入jQuery
// import $ from "jquery";
// // 测试jQuery
// $(function() {
//   alert("234");
// });

export default {
  name: "nav-bar.vue",
  props: ["showNavBarShadow"],
  methods: {}
};
</script>

<style scoped lang="stylus">
  // 引入变量css（包含设计规范）
  @import "../../common/css/variable.styl"
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
    .container-fluid {
      padding: 0 !important;
      // logo
      .navbar-brand {
        width: 170px;
        height: 50px;
        padding: 0;
        margin-left: 70px !important;
        border-radius: 25px;
        position: relative;
        img {
          height: 100%;
        }
        .ds-logo-navBar {
          z-index: 99;
        }
      }
      .navbar-brand::after {
        content: '1';
        width: 80%;
        height: 50%;
        position: absolute;
        bottom: -2px;
        left: 10%;
        filter: blur(14px);
        border-radius: 14px;
        background-color: #1addcf;
        z-index: -1;
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
    align-items: center;
    color: #999;
  }

  .container-fluid{
    width: 100%;
  }
  .navbar-right {
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
        color: $color-theme !important;
      }
    }
  }
  /*重置bootstrap样式=======结束=============*/

/*导航栏最外层样式*/
.navbar-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 80px;
  z-index: 999;
  box-shadow:0 1px 0 0 rgba(0,0,0,.05);
  transition: all .5s;
  // 将BS的导航栏按钮清除右侧浮动,需要一层一层找到；
  .navbar {
    .container-fluid {
      .navbar-collapse {
        .navbar-right {
          float: left !important;
          margin-left: 100px;
        }
      }
    }
  }
}
.navbar-shadow {
  box-shadow:0 4px 8px 0 rgba(0,0,0,.1);
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
  color: $color-theme !important;
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
</style>
