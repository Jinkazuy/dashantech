<template>
  <div class="product-illMG">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
  </div>
</template>

<script>
import mo1 from "../../components/pro-illnessMG/proIllnessMGMO-1/proIllnessMGMO1";
import mo2 from "../../components/pro-illnessMG/proIllnessMGMO-2/proIllnessMGMO2";
import mo3 from "../../components/pro-illnessMG/proIllnessMGMO-3/proIllnessMGMO3";
import mo4 from "../../components/pro-illnessMG/proIllnessMGMO-4/proIllnessMGMO4";
export default {
  name: "ProductIllnessMG",
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
.product-illMG {
  // 调整顶部banner插画位置
  .pro-ill-MG-modu-1 {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(-16%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .pro-ill-MG-modu-1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(30%);
        }
      }
    }
  }
}
</style>
