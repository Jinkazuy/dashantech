<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
    <!-- slides -->
    <!--使用插槽-->
    <slot></slot>
    <!--<swiper-slide class="banner-items">I'm Slide 1</swiper-slide>-->
    <!--<swiper-slide class="banner-items">I'm Slide 2</swiper-slide>-->
    <!--<swiper-slide class="banner-items">I'm Slide 3</swiper-slide>-->
    <!--<swiper-slide class="banner-items">I'm Slide 4</swiper-slide>-->
    <!--<swiper-slide class="banner-items">I'm Slide 5</swiper-slide>-->
    <!--<swiper-slide class="banner-items">I'm Slide 6</swiper-slide>-->
    <!--<swiper-slide class="banner-items">I'm Slide 7</swiper-slide>-->
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "banner",
  props: ["delay"],
  data() {
    return {
      // swiper配置
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        // 自动播放设置
        autoplay: {
          // 等待时间
          delay: this.delay,
          // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          disableOnInteraction: false
        },
        // 是否循环播放
        loop: true,
        // 分页按钮
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }
      }
    };
  },
  computed: {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(1, 1000, true);
  }
};
</script>

<style scoped lang="stylus">
.swiper-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
