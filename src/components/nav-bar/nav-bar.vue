<template>
  <div class="navbar-wrapper">
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
              <a href="#">首页 </a>
              <div class="border-line"></div>
            </li>
            <li>
              <a href="#">关于我们</a>
              <div class="border-line"></div>
            </li>
            <li>
              <a href="#">产品中心</a>
              <div class="border-line"></div>
            </li>
            <li>
              <a href="#">公司动态</a>
              <div class="border-line"></div>
            </li>
            <li>
              <a href="#">解决方案</a>
              <div class="border-line"></div>
            </li>
            <li>
              <a href="#">加入我们</a>
              <div class="border-line"></div>
            </li>
            <li>
              <a href="#">联系大善</a>
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
import $ from "jquery";
// 测试jQuery
$(function() {
  alert("234");
});
export default {
  name: "nav-bar.vue",
  method: {}
};
</script>

<style scoped lang="stylus">
  /*重置bootstrap样式=======开始=============*/
  .navbar {
    position: fixed;
    display: flex;
    min-height: 80px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 50%;
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
      .border-line{
        width: 0;
        height: 4px;
        background-color: #fff;
        border-radius: 2px;
        transform: translateX(50%);
        transition: all 0.4s;
      }
      a {
        color: #fff !important;
      }
    }
    li:hover {
      .border-line{
        width: 100%;
        transform: translateX(0px);
      }
      a {
        color: #14948a !important;
      }
    }
  }
  /*重置bootstrap样式=======结束=============*/

/*导航栏最外层样式*/
.navbar-wrapper{
  width: 100%;
  background-color: #666;
  height: 80px;
}
#navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%)
    background-color: #333;
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
.nav-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        margin-left: 20px;
    }
}
</style>
