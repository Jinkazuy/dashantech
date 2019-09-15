<template>
  <div class="navbar-wrapper">
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
            ><img src="../../common/images/ds-logo.png"
          /></a>
        </div>
        <!--常规导航栏-->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!--导航栏链接，右浮动-->
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/">首页</router-link>
              <div class="border-line border-line-home"></div>
            </li>
            <li>
              <router-link to="/dfd">关于我们</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/dd">产品中心</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/df">公司动态</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/sd">解决方案</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/ds">加入我们</router-link>
              <div class="border-line"></div>
            </li>
            <li>
              <router-link to="/as">联系大善</router-link>
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
  props: ["linkActive"],
  method: {}
};
</script>

<style scoped lang="stylus">
  /*重置bootstrap样式=======开始=============*/
  .navbar {
    display: flex;
    top: 0;
    left: 50%;
    min-height: 80px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-50%)
    background-color: #333;
  }
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .navbar-collapse{
    align-items: center;
    color: #fff;
  }

  .container-fluid{
    width: 100%;
  }
  .navbar-brand {
    width: 160px;
    img {
      height: 100%;
    }
    height: 50px;
    padding: 0;
  }
  .navbar-right {
    li {
      color: #ccc;
      /*下划线*/
      .border-line{
        width:0;
        height: 2px;
        background-color: #fff;
        border-radius: 2px;
        transform: translateX(44px);
        transition: all 0.4s;
      }
      a {
        color: #fff !important;
        font-weight: 100;
      }
    }
    li:first-of-type {
      /*下划线-首页，因为字数少2个，所以下划线偏移量少*/
      .border-line {
        transform: translateX(30px);
      }
    }
    li:hover {
      /*鼠标移入下划线*/
      .border-line{
        width: 80%;
        transform: translateX(14%);
      }
      a {
        font-weight: 800;
        color: #14948a !important;
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
  background-color: #666;
  height: 80px;
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
  width: 80%;
  height: 2px;
  background-color: #fff;
  border-radius: 2px;
  transform: translateX(14%);
}
/*因为首页少两个字，所以重置下划线偏移量*/
.router-link-exact-active.router-link-active+div.border-line-home{
  transform: translateX(14%);
}
</style>
