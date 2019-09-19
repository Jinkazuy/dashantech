<template>
  <div class="banner-illus">
    <img
      class="banner-liius-lines"
      src="../../common/images/bannerIllus-bg/lines.png"
    />
    <img
      class="banner-liius-foo"
      src="../../common/images/bannerIllus-bg/banner-foo.png"
    />
    <img
      class="banner-liius-num"
      src="../../common/images/bannerIllus-bg/num10101.png"
    />
    <!--banner插画主体，需要父级传入-->
    <img class="banner-liius-ch" :src="bannerIllusCont" />
    <img
      class="banner-liius-or"
      src="../../common/images/bannerIllus-bg/ornament.png"
    />
    <div class="banner-liius-light"></div>
  </div>
</template>

<script>
export default {
  name: "banner-img",
  // banner插画主体，需要父级组件传入
  props: ["bannerIllusCont"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
/*banner插画+动画*/
.banner-illus {
    position: absolute;
    right: 10%;
    top: 40px;
    width: 46%;
    height: 526px;
    @media (min-width: 320px) {
      right: 10%;
      top: 120px;
    }
    @media (min-width: 768px) {
      right: 10%;
      top: 130px;
    }
    @media (max-width: 768px) {
      right: 14%;
    }
    @media (min-width: 992px) {
      right: 10%;
      top: 80px;
    }
    @media (min-width: 1200px) {
      right: 10%;
    }
    @media (min-width: 1336px) {
      right: 10%;
      top: 40px;
    }
    .banner-liius-lines {
        position: absolute;
        top: 82px;
        left: 50%;
        width: 130%;
        transform: translateX(-50%);
        animation: moveline 2s linear 0s infinite alternate;
    }
    .banner-liius-foo {
        position: absolute;
        top: 0;
        z-index: 6;
        left: 48%;
        width: 97%;
        transform: translateX(-50%);
        @media (min-width: 320px) {
          top: 40px;
        }
        @media (min-width: 768px) {
          top: 30px;
        }
        @media (min-width: 992px) {
          top: 20px;
        }
        @media (min-width: 1336px) {
          top: 0;
        }
    }
    .banner-liius-ch {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        width: 58%;
        animation: movech 2s linear 0s infinite alternate;
    }
    .banner-liius-num {
        position: absolute;
        left: 48%;
        width: 64%;
        transform: translateX(-50%);
        animation: movenum 9s linear 0s infinite normal;
    }
    .banner-liius-or {
        position: absolute;
        top: 0;
        left: 52%;
        width: 60%;
        transform: translateX(-50%);
        animation: moveline 2s linear 0s infinite alternate;
    }
    .banner-liius-light {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        filter: blur(50px);
        width: 80%;
        height: 80%;
        background-color: rgba(59, 176, 2421 .5);
        border-radius: 50%;
        animation: moveline 2s linear 0s infinite alternate;
        @media (min-width: 320px) {
          top: 24%;
        }
        @media (min-width: 768px) {
          top: 30%;
        }
        @media (min-width: 992px) {
          top: 40%;
        }


    }
    @keyframes movech {
        from {top: 14%;}
        to {top: 18%;}
    }
    @keyframes moveline {
        from {opacity: 0}
        to {opacity: 1}
    }
    @keyframes movenum {
        from {
            top: 500px;
            opacity: 0;
        }
        to {
            top: -500px;
            opacity: 1;
        }
    }
}
</style>
