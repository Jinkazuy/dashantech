<template>
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
        <a class="navbar-brand" href="#">Brand</a>
      </div>
      <!--常规导航栏-->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <!--导航栏链接，右浮动-->
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: "nav-bar.vue"
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
  .container-fluid{
    width: 100%;
  }

  /*重置bootstrap样式=======结束=============*/

/*导航栏最外层样式*/
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
