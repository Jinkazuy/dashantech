<template>
  <div class="product-yltInfo">
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
    <mo11 :mob="mob"></mo11>
    <mo12 :mob="mob"></mo12>
  </div>
</template>

<script>
import mo1 from "../../components/pro-yltInfo/proYltInfoModu-1/proYltInfoModu1";
import mo2 from "../../components/pro-yltInfo/proYltInfoModu-2/proYltInfoModu2";
import mo3 from "../../components/pro-yltInfo/proYltInfoModu-3/proYltInfoModu3";
import mo4 from "../../components/pro-yltInfo/proYltInfoModu-4/proYltInfoModu4";
import mo5 from "../../components/pro-yltInfo/proYltInfoModu-5/proYltInfoModu5";
import mo6 from "../../components/pro-yltInfo/proYltInfoModu-6/proYltInfoModu6";
import mo7 from "../../components/pro-yltInfo/proYltInfoModu-7/proYltInfoModu7";
import mo8 from "../../components/pro-yltInfo/proYltInfoModu-8/proYltInfoModu8";
import mo9 from "../../components/pro-yltInfo/proYltInfoModu-9/proYltInfoModu9";
import mo10 from "../../components/pro-yltInfo/proYltInfoModu-10/proYltInfoModu10";
import mo11 from "../../components/pro-yltInfo/proYltInfoModu-11/proYltInfoModu11";
import mo12 from "../../components/pro-yltInfo/proYltInfoModu-12/proYltInfoModu12";
export default {
  name: "ProductYltInfo",
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
    mo10,
    mo11,
    mo12
  }
};
</script>

<style lang="stylus">
.product-yltInfo {
  // 调整插画位置
  .pro-YltInfo-mo1{
    .container {
      .pro-YltInfo-mo1-tit {
        width: 38% !important;
      }
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(-10%);
        }
      }
    }
  }

  // ========== 移动端样式 ==========
  .pro-YltInfo-mo1-mob {
    .container {
      .pro-YltInfo-mo1-tit {
        width: 100% !important;
      }
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(30%);
        }
      }
    }
  }
}
</style>
