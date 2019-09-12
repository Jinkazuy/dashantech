<template>
  <div class="container">
    <div id="navbar">
      <a href="#">
        <img class="dslogo" alt="Brand" src="../../common/images/ds-logo.png" />
      </a>
      <ul class="nav-link">
        <li><a href="#">首页</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">产品中心</a></li>
        <li><a href="#">公司动态</a></li>
        <li><a href="#">解决方案</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">联系大善</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar.vue"
};
</script>

<style scoped lang="stylus">
#navbar{
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%)
    height: 80px;
    background-color: #333;
}
@media (min-width: 768px) {
    #navbar {
        width: 750px;
    }
}

//中等屏幕
@media (min-width: 992px) {
    #navbar {
        width: 970px;
    }
}

//大屏幕：1336px~更高
@media (min-width: 1336px) {
    #navbar {
        width: 1336px;
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
