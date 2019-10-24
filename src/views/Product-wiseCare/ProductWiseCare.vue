<template>
  <div class="Product-wise-care">
    <mo1 :mob="mob"></mo1>
  </div>
</template>

<script>
import mo1 from "../../components/pro-wiseCare/proWiseCareMO-1/proWiseCareMO1";
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
    mo1
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
