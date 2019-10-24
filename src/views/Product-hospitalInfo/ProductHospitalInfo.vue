<template>
  <div class="product-hospital-info">
    <mo1 :mob="mob"></mo1>
  </div>
</template>

<script>
import mo1 from "../../components/pro-hospitalInfo/proHospitalInfoModu-1/proHospitalInfoModu1";
export default {
  name: "ProductHospitalInfo",
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
.product-hospital-info {
  // 调整顶部banner插画位置
  .proHospitalInfoModu-1 {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(20%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .proHospitalInfoModu-1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(82%);
        }
      }
    }
  }
}
</style>
