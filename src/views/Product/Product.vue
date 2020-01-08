<template>
  <div :class="['product', mob ? 'product-mob' : '']">
    <!--banner部分 - 开始-->
    <div class="banner-wrapper w100">
      <div class="banner-bg container h100">
        <h2>智慧医疗大数据解决方案</h2>
        <p class="ft-sz-16">
          大善科技立足于大健康医疗产业链是国内领先的医疗领域平台多年耕耘于大健康医疗产业,积累了丰富的行业经验及实施方案。拥有国内众多一线客户的一致好评。
        </p>
        <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
        <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
      </div>
      <div class="banner-info container">
        <Banner :delay="6000" :marginSpace="0">
          <swiper-slide
            class="banner-items"
            v-for="item in swiperSlide"
            :key="item.forKey"
          >
            <div class="ills">
              <div class="ills-inner">
                <img :src="item.imgSrc" />
              </div>
            </div>
            <h3 v-html="item.title" class="text-nowrap"></h3>
            <p v-html="item.p" class="text-nowrap"></p>
          </swiper-slide>
        </Banner>
        <!--swiper导航按钮，必须写在外边儿，不然会出问题，只要类名对上了就行-->
        <div class="swiper-button-prev" slot="button-prev" v-if="!mob">
          <i class="iconfont iconchevron-back-solid"></i>
        </div>
        <div class="swiper-button-next" slot="button-next" v-if="!mob">
          <i class="iconfont iconchevron-forward-solid"></i>
        </div>
      </div>
    </div>
    <!--banner部分 - 结束-->
    <modu2 :mob="mob"></modu2>
    <modu3 :mob="mob"></modu3>
    <modu4 :mob="mob"></modu4>
  </div>
</template>

<script>
// 引入轮播banner组件
import Banner from "../../components/layouts/swiper/swiper";
// 引入banner插画组件
import bannerIllusCont from "../../common/images/index/banner-1/banner-ch-3.png";
import bannerImg from "../../components/layouts/banner-img/banner-img";
// 引入其他模块
import modu2 from "../../components/product/modu-2/pro-modu2";
import modu3 from "../../components/product/modu-3/pro-modu3";
import modu4 from "../../components/product/modu-4/pro-modu4";
export default {
  name: "Product",
  props: ["mob"],
  data() {
    return {
      // 顶部banner下方轮播文字内容
      swiperSlide: [
        {
          title:
            "大善科技 立足于大健康医疗产业链 是国内领先的医疗领域国内领先的医疗领域国内领先的医疗领域平台",
          p: `多年耕耘于大健康医疗产业，积累了丰富的行业经验及实施方案。<br />拥有国内众多一线客户的一致好评。`,
          imgSrc: "images/pro-banner-swiper-illus/blockchain.svg",
          forKey: 1
        },
        {
          title: "高新技术优势 & 行业领军人才汇集",
          p: `融汇10余年IT产品的市场推广经验，现有近百人行业领域人才， <br />30%具备研究生学历，70%都具备大学以上学历`,
          imgSrc: "images/pro-banner-swiper-illus/dapp.svg",
          forKey: 2
        },
        {
          title: "大善科技 立足于大健康医疗产业链 是国内领先的医疗领域平台",
          p: `多年耕耘于大健康医疗产业，积累了丰富的行业经验及实施方案。<br />拥有国内众多一线客户的一致好评。`,
          imgSrc: "images/pro-banner-swiper-illus/solidity.svg",
          forKey: 3
        }
      ],
      // banner插画主体
      bannerIllusCont: bannerIllusCont
    };
  },
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
    Banner,
    bannerImg,
    modu2,
    modu3,
    modu4
  }
};
</script>

<style scoped lang="stylus">
.product{
  // ======================== banner部分 ========================
  /*banner 最外层*/
  .banner-wrapper {
    position: relative;
    height: 590px;
    background: #110a36;
    .banner-bg {
      color: #fff;
      h2{
        position: absolute;
        top: 174px;
        font-size: 40px;
        font-weight: 800;
        margin: 0;
        z-index: 99;
        background-color: rgba(17, 10, 54, .6);
      }
      p{
        position: absolute;
        top: 240px;
        width: 476px;
        margin: 0;
        z-index: 99;
        background-color: rgba(17, 10, 54, .6);
        line-height: 1.8;
      }
    }
    /*banner下方详细信息，使用了Swiper插件*/
    .banner-info.container {
      z-index: 9;
      position: absolute;
      bottom: -95px;
      left: 50%;
      @media (max-width: 1366px) {
        width: 90% !important;
      }
      transform: translateX(-50%);
      height: 190px;
      padding: 0;
      .swiper-container {
        border-radius: 4px;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
      }
      .banner-items {
        background-color: #fff;
        position: relative;
        .ills {
          position: absolute;
          left: 60px;
          top: 18px;
          width: 154px;
          height: 154px;
          background-color: #fff;
          border-radius: 50%;
          border: 3px solid #edf3fc;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          .ills-inner {
            width: 130px;
            height: 130px;
            background-color: #edf3fc;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
            }
          }
        }
        h3 {
          position: absolute;
          left: 234px;
          top: 28px;
          font-size:24px;
          font-weight: 800;
          color: #17233D;
        }
        p {
          position: absolute;
          left: 234px;
          top: 88px;
          color: #808695;
          font-size: 16px;
        }
        @media (min-width: 768px) {
          h3, p {
            width: 60%;
          }
        }
        @media (max-width: 768px) {
          h3, p {
            width: 40%;
          }
        }
        @media (min-width: 992px) {
          h3, p {
            width: 70%;
          }
        }
      }
      /*这两个类名实在插件里的，作为父级，这里可以调用*/
      .swiper-button-prev, .swiper-button-next{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 62px;
        height: 62px;
        background-color: #fff;
        border-radius: 31px;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
        background-size: 12px;
        top: 50%;
        transform: translateY(-10px);
        background-image: none;
        i {
          font-size: 24px;
          color: #aaa;
          transition: all .2s;
        }
      }
      /*左右切换箭头*/
      .swiper-button-prev {
        left: -31px;
      }
      .swiper-button-next {
        right: -31px;
      }
      .swiper-button-prev:hover, .swiper-button-next:hover {
        i {
          color: #14948a;
        }
      }
      @media (min-width: 0px) {
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next {
          right: 0;
        }
      }
      @media (min-width: 1300px) {
        .swiper-button-prev {
          left: -31px;
        }
        .swiper-button-next {
          right: -31px;
        }
      }
    }
    @media (max-width: 768px) {
      .banner-info.container {
        width: 90%;
      }
    }
  }

  // ======================== 内容部分 ========================

  // ====================== 移动端样式 ================================
  // .mob-css这个类名又js在created钩子时进行判断设备是否为移动端，从而控制类名是否渲染
  .mob-css {
    .banner-wrapper {
      .banner-bg{
        h2 {
          top: 100px;
          font-size: 30px;
          text-align: center;
          left: 0;
          right: 0;
        }
        p {
          top: 340px;
          width: 90%;
        }
        .banner-illus{
          right: 25%;
          top: 18%;
          .banner-liius-foo {
            top: 70px;
          }
        }
      }
    }
  }
}
// ============ 移动端 =========
.product-mob {
  .banner-wrapper {
    margin-bottom: 100px;
    .banner-bg {
      padding: 0;
      h2 {
        top: 80px;
        width: 100%;
        font-size: 20px;
        text-align: center;
      }
      p {
        top: 300px;
        padding: 0 30px;
        width: 100%;
        font-size: 14px !important;
        box-sizing: border-box;
      }
      .banner-illus {
        right: 50%;
        transform: translateX(50%);
        height: 290px;
      }
    }
    .banner-info {
      bottom: -60px !important;
      .swiper-container {
        .banner-items {
          width: 100% !important;
          .ills {
            display: none;
          }
          h3 {
            font-size: 16px;
            left: 10%;
            width: 80%;
          }
          p {
            font-size: 12px;
            left: 10%;
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
