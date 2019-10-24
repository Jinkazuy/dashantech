<template>
  <div class="product-pacs">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
    <mo5 :mob="mob"></mo5>
    <mo6 :mob="mob"></mo6>
    <mo7 :mob="mob"></mo7>
    <mo8 :mob="mob"></mo8>
  </div>
</template>

<script>
import mo1 from "../../components/pro-pacs/proPacsModu-1/proPacsMo1";
import mo2 from "../../components/pro-pacs/proPacsModu-2/proPacsMo2";
import mo3 from "../../components/pro-pacs/proPacsModu-3/proPacsMo3";
import mo4 from "../../components/pro-pacs/proPacsModu-4/proPacsMo4";
import mo5 from "../../components/pro-pacs/proPacsModu-5/proPacsMo5";
import mo6 from "../../components/pro-pacs/proPacsModu-6/proPacsMo6";
import mo7 from "../../components/pro-pacs/proPacsModu-7/proPacsMo7";
import mo8 from "../../components/pro-pacs/proPacsModu-8/proPacsMo8";
export default {
  name: "productPacs",
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
    mo8
  }
};
</script>

<style lang="stylus">
.product-pacs {
  // 调整顶部banner插画位置（移动）
  .proPacsMo-1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(60%);
        }
      }
    }
  }
}
</style>
