<template>
  <div class="Product-clinical-drug">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
    <mo5 :mob="mob"></mo5>
  </div>
</template>

<script>
import mo1 from "../../components/pro-clinicalDrug/proClinicalDrugMO-1/proClinicalDrugMO1";
import mo2 from "../../components/pro-clinicalDrug/proClinicalDrugMO-2/proClinicalDrugMO2";
import mo3 from "../../components/pro-clinicalDrug/proClinicalDrugMO-3/proClinicalDrugMO3";
import mo4 from "../../components/pro-clinicalDrug/proClinicalDrugMO-4/proClinicalDrugMO4";
import mo5 from "../../components/pro-clinicalDrug/proClinicalDrugMO-5/proClinicalDrugMO5";
export default {
  name: "ProductClinicalDrug",
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
    mo5
  }
};
</script>

<style lang="stylus">
.Product-clinical-drug {
  // 调整顶部banner插画位置（移动）
  .pro-clinicalDrug-mo1 {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(46%);
        }
      }
    }
  }
  // 调整顶部banner插画位置（移动）
  .pro-clinicalDrug-mo1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(120%);
        }
      }
    }
  }
}
</style>
