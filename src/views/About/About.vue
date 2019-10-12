<template>
  <div class="about">
    <modu1 :mob="mob"></modu1>
    <modu2 :mob="mob"></modu2>
    <modu3 :mob="mob"></modu3>
    <modu4 :mob="mob"></modu4>
    <modu5 :mob="mob"></modu5>
  </div>
</template>

<script>
import modu1 from "../../components/about/about-modu-1/aboutModu1";
import modu2 from "../../components/about/about-modu-2/aboutModu2";
import modu3 from "../../components/about/about-modu-3/aboutModu3";
import modu4 from "../../components/about/about-modu-4/aboutModu4";
import modu5 from "../../components/about/about-modu-5/aboutModu5";
export default {
  name: "about",
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
    console.log(12);
    return false;
  },
  components: {
    modu1,
    modu2,
    modu3,
    modu4,
    modu5
  }
};
</script>

<style scoped lang="stylus"></style>
