<template>
  <div class="home clearfix">
    <div class="banner-wrapper">
      <div class="banner-bg container">
        <h2>智慧医疗大数据解决方案</h2>
        <p>
          大善科技立足于大健康医疗产业链是国内领先的医疗领域平台多年耕耘于大健康医疗产业,积累了丰富的行业经验及实施方案。拥有国内众多一线客户的一致好评。
        </p>
        <div class="banner-illus"></div>
      </div>
      <div class="banner-info container">
        <Banner :delay="6000">
          <swiper-slide class="banner-items">
            <div class="ills"></div>
            <h3>大善科技 立足于大健康医疗产业链 是国内领先的医疗领域平台</h3>
            <p>
              多年耕耘于大健康医疗产业，积累了丰富的行业经验及实施方案。
              <br />拥有国内众多一线客户的一致好评。
            </p>
          </swiper-slide>
          <swiper-slide class="banner-items">I'm Slide 2</swiper-slide>
          <swiper-slide class="banner-items">I'm Slide 3</swiper-slide>
        </Banner>
        <!--swiper导航按钮，必须写在外边儿，不然会出问题，只要类名对上了就行-->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
    <div class="container"></div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
// 引入banner组件
import Banner from "../../components/bannaer/banner";
export default {
  name: "home",
  components: {
    Banner
  }
};
</script>
<style lang="stylus">
// 引入变量css（包含设计规范）
@import "../../common/css/variable.styl"
/*banner 最外层*/
.banner-wrapper {
  position: relative;
  width: 100%;
  height: 590px;
  background: #110a36;
  .banner-bg {
    color: #fff;
    h2{
      position: absolute;
      top: 174px;
      font-size: 40px;
      font-weight: 900;
      margin: 0;
      z-index: 10;
    }
    p{
      position: absolute;
      top: 240px;
      width: 476px;
      margin: 0;
      z-index: 10;
    }
    .banner-illus {
      position: absolute;
      right: 0;
      top: 0;
      width: 700px;
      height: 500px;
      background-color: rgba(0, 0, 0, .8)
    }
  }
  // background: linear-gradient(45deg,red,orange,yellow,green,  #00ffff,blue,purple);
  /*banner下方详细信息，使用了Swiper插件*/
  .banner-info.container {
    position: absolute;
    bottom: -95px;
    left: 50%;
    transform: translateX(-50%);
    height: 190px;
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
        background-color: #000;
        border-radius: 50%;
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
    }
    /*这两个类名实在插件里的，作为父级，这里可以调用*/
    .swiper-button-prev, .swiper-button-next{
      position: absolute;
      width: 62px;
      height: 62px;
      background-color: #fff;
      border-radius: 31px;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
      background-size: 12px;
      top: 50%;
      transform: translateY(-10px);
    }
    .swiper-button-prev {
      left: -15px;
      /*background-image: url();*/
    }
    .swiper-button-next {
      right: -15px;
      /*background-image: url();*/
    }
    // 选中的轮播点
    .swiper-pagination-bullet-active {
      background-color: #14948a;
    }
  }
}
</style>
