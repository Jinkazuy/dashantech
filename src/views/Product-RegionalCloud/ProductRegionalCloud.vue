<template>
  <div class="Product-RegionalCloud">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
    <mo5 :mob="mob"></mo5>
    <mo6 :mob="mob"></mo6>
    <mo7 :mob="mob"></mo7>
    <mo8 :mob="mob"></mo8>
    <mo9 :mob="mob"></mo9>
    <mo10 :mob="mob"></mo10>
  </div>
</template>

<script>
import mo1 from "../../components/pro-regionalCloud/proRegionalCloudMO-1/proRegionalCloudMO1";
import mo2 from "../../components/pro-regionalCloud/proRegionalCloudMO-2/proRegionalCloudMO2";
import mo3 from "../../components/pro-regionalCloud/proRegionalCloudMO-3/proRegionalCloudMO3";
import mo4 from "../../components/pro-regionalCloud/proRegionalCloudMO-4/proRegionalCloudMO4";
import mo5 from "../../components/pro-regionalCloud/proRegionalCloudMO-5/proRegionalCloudMO5";
import mo6 from "../../components/pro-regionalCloud/proRegionalCloudMO-6/proRegionalCloudMO6";
import mo7 from "../../components/pro-regionalCloud/proRegionalCloudMO-7/proRegionalCloudMO7";
import mo8 from "../../components/pro-regionalCloud/proRegionalCloudMO-8/proRegionalCloudMO8";
import mo9 from "../../components/pro-regionalCloud/proRegionalCloudMO-9/proRegionalCloudMO9";
import mo10 from "../../components/pro-regionalCloud/proRegionalCloudMO-10/proRegionalCloudMO10";
export default {
  name: "ProductRegionalCloud",
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
    mo7,
    mo8,
    mo9,
    mo10
  }
};
</script>

<style lang="stylus">
.Product-RegionalCloud {
  .pro-regionalCloud-mo1{
    .container {
      .pro-regionalCloud-mo1-tit {
        width: 42% !important;
      }
      // 调整顶部banner插画位置
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(-6%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .pro-regionalCloud-mo1-mob{
    .container {
      .pro-regionalCloud-mo1-tit {
        width: 100% !important;
      }
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(26%);
        }
      }
    }
  }
}
</style>
