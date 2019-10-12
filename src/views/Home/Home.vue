<template>
  <div :class="['home', 'clearfix', mob ? 'mob-css' : '']">
    <homeBanner :mob="mob"></homeBanner>
    <!--内容部分 - 开始-->
    <!--内容模块 1 - 方案、内容-->
    <homeModules1 :mob="mob"></homeModules1>
    <!--内容模块 2 - 关于我们-->
    <homeModules2 :mob="mob"></homeModules2>
    <!--内容模块 3 - 公司动态-->
    <homeModules3 :mob="mob"></homeModules3>
    <!--内容模块 4 - 客户评价-->
    <homeModules4 :mob="mob"></homeModules4>
    <!--内容模块 5 - 加入我们-->
    <homeModules5 :mob="mob"></homeModules5>
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
  props: ["mob"],
  mounted() {
    // 因为所有页面是作为app.vue的router-view，所以滚动值会继承；
    // 那么切换router的时候就需要将网页的滚动值归零；
    // 出发mounted是，也就是初始化页面时，返回顶部；
    // 返回顶部，借用jquery
    // eslint-disable-next-line
    $("html,body").animate({ scrollTop: 0 }, 300);
    // eslint-disable-next-line
    if ($("html").scrollTop()) {
      // eslint-disable-next-line
      $("html").animate({ scrollTop: 0 }, 300);
      return false;
    }
    // eslint-disable-next-line
    $("body").animate({ scrollTop: 0 }, 300);
    return false;
  },
  methods: {},
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
// ====================== 移动端样式 ================================
// .mob-css这个类名又js在created钩子时进行判断设备是否为移动端，从而控制类名是否渲染
.mob-css {
}
</style>
