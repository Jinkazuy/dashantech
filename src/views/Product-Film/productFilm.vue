<template>
  <div class="product-film">
    <mo1 :mob="mob"></mo1>
    <mo2 :mob="mob"></mo2>
    <mo3 :mob="mob"></mo3>
    <mo4 :mob="mob"></mo4>
    <mo5 :mob="mob"></mo5>
  </div>
</template>

<script>
import mo1 from "../../components/pro-film/proFilmModu-1/proFilmModu1";
import mo2 from "../../components/pro-film/proFilmModu-2/proFilmModu2";
import mo3 from "../../components/pro-film/proFilmModu-3/proFilmModu3";
import mo4 from "../../components/pro-film/proFilmModu-4/proFilmModu4";
import mo5 from "../../components/pro-film/proFilmModu-5/proFilmModu5";
export default {
  name: "productFilm",
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
.product-film {
  // 调整顶部banner插画位置（移动）
  .pro-film-modu-1-mob {
    .container {
      .banner-illus {
        .banner-liius-ch {
          transform: translateX(-50%) translateY(66%);
        }
      }
    }
  }
}
</style>
