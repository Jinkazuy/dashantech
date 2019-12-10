<template>
  <div class="product-recovery">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
    <mo5 :mob="mob"></mo5>
    <mo6 :mob="mob"></mo6>
  </div>
</template>

<script>
import mo1 from "../../components/pro-recoveryMG/proRecoveryMGMO-1/proRecoveryMGMO1";
import mo2 from "../../components/pro-recoveryMG/proRecoveryMGMO-2/proRecoveryMGMO2";
import mo3 from "../../components/pro-recoveryMG/proRecoveryMGMO-3/proRecoveryMGMO3";
import mo4 from "../../components/pro-recoveryMG/proRecoveryMGMO-4/proRecoveryMGMO4";
import mo5 from "../../components/pro-recoveryMG/proRecoveryMGMO-5/proRecoveryMGMO5";
import mo6 from "../../components/pro-recoveryMG/proRecoveryMGMO-6/proRecoveryMGMO6";
export default {
  name: "ProductRecovery",
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
    mo6
  }
};
</script>

<style lang="stylus">
.product-recovery {
  // 调整顶部banner插画位置
  .pro-recover-mg-modu-1 {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-40%) translateY(10%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .pro-recover-mg-modu-1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-40%) translateY(60%);
        }
      }
    }
  }
}
</style>
