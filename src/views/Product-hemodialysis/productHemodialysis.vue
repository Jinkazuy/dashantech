<template>
  <div class="Product-hemodialysis">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
    <mo5 :mob="mob"></mo5>
    <mo6 :mob="mob"></mo6>
    <mo7 :mob="mob"></mo7>
  </div>
</template>

<script>
import mo1 from "../../components/pro-hemodialysis/proHemodialysisMo-1/proHemodialysisMo1";
import mo2 from "../../components/pro-hemodialysis/proHemodialysisMo-2/proHemodialysisMo2";
import mo3 from "../../components/pro-hemodialysis/proHemodialysisMo-3/proHemodialysisMo3";
import mo4 from "../../components/pro-hemodialysis/proHemodialysisMo-4/proHemodialysisMo4";
import mo5 from "../../components/pro-hemodialysis/proHemodialysisMo-5/proHemodialysisMo5";
import mo6 from "../../components/pro-hemodialysis/proHemodialysisMo-6/proHemodialysisMo6";
import mo7 from "../../components/pro-hemodialysis/proHemodialysisMo-7/proHemodialysisMo7";
export default {
  name: "productHemodialysis",
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
  components: {
    mo1,
    mo2,
    mo3,
    mo4,
    mo5,
    mo6,
    mo7
  }
};
</script>

<style lang="stylus">
.Product-hemodialysis {
  // 调整顶部banner插画位置
  .pro-hemodialysis-mo1 {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(-34%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .pro-hemodialysis-mo1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(8%);
        }
      }
    }
  }
}
</style>
