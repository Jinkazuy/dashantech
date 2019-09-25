<template>
  <div :class="['home', 'clearfix', mob ? 'mob-css' : '']">
    <homeBanner></homeBanner>
    <!--内容部分 - 开始-->
    <div class="home-cont">
      <!--内容模块 1 - 方案、内容-->
      <homeModules1></homeModules1>
      <!--内容模块 2 - 关于我们-->
      <homeModules2></homeModules2>
      <!--内容模块 3 - 公司动态-->
      <homeModules3></homeModules3>
      <!--内容模块 4 - 客户评价-->
      <homeModules4></homeModules4>
      <!--内容模块 5 - 加入我们-->
      <homeModules5></homeModules5>
    </div>
    <!--内容部分 - 结束-->
  </div>
</template>

<script>
// 引入首页模块 banner
import homeBanner from "../../components/index/modules-banner/index-modu1";
// 引入首页模块1 - 方案、内容
import homeModules1 from "../../components/index/modules-1/modules1";
// 引入首页模块2 - 关于我们
import homeModules2 from "../../components/index/modules-2/modules2";
// 引入首页模块3 - 公司动态
import homeModules3 from "../../components/index/modules-3/modules3";
// 引入首页模块4 - 客户评价
import homeModules4 from "../../components/index/modules-4/modules4";
// 引入首页模块5 - 加入我们
import homeModules5 from "../../components/index/modules-5/modules5";

export default {
  name: "home",
  data() {
    return {
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  },
  components: {
    homeBanner,
    homeModules1,
    homeModules2,
    homeModules3,
    homeModules4,
    homeModules5
  }
};
</script>
<style lang="stylus">
// 引入变量css（包含设计规范）
@import "../../common/css/variable.styl"
.home-cont {
  width: 100%;
}
// ====================== 移动端样式 ================================
// .mob-css这个类名又js在created钩子时进行判断设备是否为移动端，从而控制类名是否渲染
.mob-css {
}
</style>
