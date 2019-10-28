<template>
  <div class="Product-wise-care">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
  </div>
</template>

<script>
import mo1 from "../../components/pro-wiseCare/proWiseCareMO-1/proWiseCareMO1";
import mo2 from "../../components/pro-wiseCare/proWiseCareMO-2/proWiseCareMO2";
import mo3 from "../../components/pro-wiseCare/proWiseCareMO-3/proWiseCareMO3";
import mo4 from "../../components/pro-wiseCare/proWiseCareMO-4/proWiseCareMO4";
export default {
  name: "ProductWiseCare",
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
    mo4
  }
};
</script>

<style lang="stylus">
.Product-wise-care {
  // 调整顶部banner插画位置
  .pro-wiseCare-mo1 {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(-26%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .pro-wiseCare-mo1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(12%);
        }
      }
    }
  }
}
</style>
