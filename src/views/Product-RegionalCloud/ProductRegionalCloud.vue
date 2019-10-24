<template>
  <div class="Product-RegionalCloud">
    <mo1 :mob="mob"></mo1>
  </div>
</template>

<script>
import mo1 from "../../components/pro-regionalCloud/proRegionalCloudMO-1/proRegionalCloudMO1";
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
    mo1
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
