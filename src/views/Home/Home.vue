<template>
  <div :class="['home', 'clearfix', mob ? 'mob-css' : '']">
    <!--banner部分 - 开始-->
    <div class="banner-wrapper">
      <div class="banner-bg container">
        <h2>智慧医疗大数据解决方案</h2>
        <p class="ft-sz-16">
          大善科技立足于大健康医疗产业链是国内领先的医疗领域平台多年耕耘于大健康医疗产业,积累了丰富的行业经验及实施方案。拥有国内众多一线客户的一致好评。
        </p>
        <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
        <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
      </div>
      <div class="banner-info container">
        <Banner :delay="6000">
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
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
    <!--banner部分 - 结束-->
    <!--内容部分 - 开始-->
    <div class="home-cont">
      <!--内容模块 1 - 方案、内容-->
      <homeModules1></homeModules1>
      <!--内容模块 2 - 关于我们-->
      <homeModules2></homeModules2>
      <!--内容模块 3 - 公司动态-->
      <homeModules3></homeModules3>
      <!--内容模块 4 - 客户评价-->
      <homeModules4></homeModules4>
      <!--内容模块 5 - 加入我们-->
      <homeModules5></homeModules5>
    </div>
    <!--内容部分 - 结束-->
  </div>
</template>

<script>
// 引入轮播banner组件
import Banner from "../../components/swiper/swiper";
// 引入首页模块1 - 方案、内容
import homeModules1 from "../../components/index/modules-1/modules1";
// 引入首页模块2 - 关于我们
import homeModules2 from "../../components/index/modules-2/modules2";
// 引入首页模块3 - 公司动态
import homeModules3 from "../../components/index/modules-3/modules3";
// 引入首页模块4 - 客户评价
import homeModules4 from "../../components/index/modules-4/modules4";
// 引入首页模块5 - 加入我们
import homeModules5 from "../../components/index/modules-5/modules5";

// 引入banner插画组件
import bannerIllusCont from "../../common/images/index/banner-1/banner-ch-3.png";
import bannerImg from "../../components/banner-img/banner-img";

// 动态引入banner下方轮播文字的配图，如果是线上地址的话，可以直接将地址写在imgSrc对应的变量中，用""包裹；
import img1 from "../../common/images/ds-logo.png";
import img2 from "../../common/images/ds-logo.png";
export default {
  name: "home",
  data() {
    return {
      // 顶部banner下方轮播文字内容
      swiperSlide: [
        {
          title:
            "大善科技 立足于大健康医疗产业链 是国内领先的医疗领域国内领先的医疗领域国内领先的医疗领域平台",
          p: `多年耕耘于大健康医疗产业，积累了丰富的行业经验及实施方案。<br />拥有国内众多一线客户的一致好评。`,
          imgSrc: img1,
          forKey: 1
        },
        {
          title: "高新技术优势 & 行业领军人才汇集",
          p: `融汇10余年IT产品的市场推广经验，现有近百人行业领域人才， <br />30%具备研究生学历，70%都具备大学以上学历`,
          imgSrc: img2,
          forKey: 2
        },
        {
          title: "大善科技 立足于大健康医疗产业链 是国内领先的医疗领域平台",
          p: `多年耕耘于大健康医疗产业，积累了丰富的行业经验及实施方案。<br />拥有国内众多一线客户的一致好评。`,
          // 演示用线上地址
          imgSrc: "//www.baidu.com/img/bd_logo1.png",
          forKey: 3
        }
      ],
      // banner插画主体
      bannerIllusCont: bannerIllusCont,
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    if (
      // url.indexOf("http://localhost:8080/#/home") !== -1 &&
      navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)
    ) {
      console.log("加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  },
  components: {
    Banner,
    bannerImg,
    homeModules1,
    homeModules2,
    homeModules3,
    homeModules4,
    homeModules5
  }
};
</script>
<style lang="stylus">
// 引入变量css（包含设计规范）
@import "../../common/css/variable.styl"
// ======================== banner部分 ========================
/*banner 最外层*/
.banner-wrapper {
  position: relative;
  width: 100%;
  height: 590px;
  background: #110a36;
  .banner-bg {
    color: #fff;
    height: 100%;
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
  // background: linear-gradient(45deg,red,orange,yellow,green,  #00ffff,blue,purple);
  /*banner下方详细信息，使用了Swiper插件*/
  .banner-info.container {
    z-index: 9;
    position: absolute;
    bottom: -95px;
    left: 50%;
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
      width: 62px;
      height: 62px;
      background-color: #fff;
      border-radius: 31px;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
      background-size: 12px;
      top: 50%;
      transform: translateY(-10px);
    }
    /*左右切换箭头*/
    .swiper-button-prev {
      left: -31px;
      // background-image: url();
    }
    .swiper-button-prev:hover {
       // background-image: url();
    }
    .swiper-button-next {
      right: -31px;
      // background-image: url();
    }
    .swiper-button-next:hover {
      // background-image: url();
    }
    @media (min-width: 0px) {
      .swiper-button-prev {
        left: 0;
        // background-image: url();
      }
      .swiper-button-next {
        right: 0;
        // background-image: url();
      }
    }
    @media (min-width: 1300px) {
      .swiper-button-prev {
        left: -31px;
        // background-image: url();
      }
      .swiper-button-next {
        right: -31px;
        // background-image: url();
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
.home-cont {
  width: 100%;
}
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
// 选中的轮播点
.swiper-pagination-bullet-active {
  background-color: #14948a;
}
</style>
