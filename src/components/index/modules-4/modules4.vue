<template>
  <div class="home-cont-modu-4">
    <div class="container">
      <div class="modu-4-header">
        <img class="qm" src="../../../common/images/ds-logo.png" alt="“" />
        <img
          class="title"
          src="../../../common/images/titles/home-title-customer.png"
          alt="“"
        />
      </div>
      <div class="modu-4-body">
        <swiper class="swiper-wrapper" :delay="6000">
          <swiper-slide
            class="banner-items"
            v-for="item in swiperSlide"
            :key="item.forKey"
          >
            <div class="cont-wrapper">
              <p class="cuser-cont">{{ item.p }}</p>
              <div class="cuser-info">
                <img
                  src="../../../common/images/titles/home-title-customer.png"
                  alt=""
                  class="cuser-attr"
                />
                <h4 class="cuser-name">{{ item.cusName }}</h4>
                <p class="cuser-titles">{{ item.title }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!--swiper导航按钮，必须写在外边儿，不然会出问题，只要类名对上了就行-->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="modu-4-foo">
        <ul class="operative-1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="operative-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入轮播swiper组件
import swiper from "../../../components/swiper/swiper";
// 动态引入swiper头像，如果是线上地址的话，可以直接将地址写在imgSrc对应的变量中，用""包裹；
import img1 from "../../../common/images/ds-logo.png";
import img2 from "../../../common/images/ds-logo.png";

export default {
  name: "modules4",
  data() {
    return {
      // 顶部banner下方轮播文字内容
      swiperSlide: [
        {
          cusName: "张三",
          title: "xxxx医院xx主任",
          p: `用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈`,
          attr: img1,
          forKey: 1
        },
        {
          cusName: "李四",
          title: "xxxx医院xx主任",
          p: `用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈`,
          attr: img2,
          forKey: 2
        },
        {
          cusName: "王五",
          title: "xxxx医院xx主任",
          p: `用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈`,
          attr: img1,
          forKey: 3
        }
      ]
    };
  },
  components: {
    swiper
  }
};
</script>

<style scoped lang="stylus">
.home-cont-modu-4 {
    width: 100%;
    height: 852px;
    background-color: #fcfcfc;
    .container {
        padding: 0;
        height: 100%;
        position: relative;
        .modu-4-header {
            .qm {
                position: absolute;
                left: 108px;
                top: 66px;
                width: 120px;
                height: 98px;
            }
            .title {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 110px;
                width: 140px;
                height: 80px;
            }
        }
        .modu-4-body {
            width: 100%;
            .swiper-wrapper {
                position: absolute;
                top: 240px;
                left: 50%;
                transform: translateX(-50%);
                width: 64.3%;
                height: 316px;
                .cont-wrapper {
                    position: relative;
                    width: 98%;
                    left: 1%;
                    height: 200px;
                    background-color: #fff;
                    box-shadow:0 4px 8px 0 rgba(0,0,0,0.1.4);
                    border-radius: 4px;
                    .cuser-cont {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 0;
                        width: 100%;
                        text-align: center;
                        padding: 40px;
                        font-size: 16px;
                        color: rgba(128, 134, 149, 1);
                        line-height: 24px;
                    }
                    .cuser-info {
                        position: absolute;
                        bottom: -80px;
                        left: 50%;
                        transform: translateX(-50%);
                        text-align: center;
                        .cuser-attr {
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            background-color: red;
                            border: 3px solid rgba(240, 240, 240, 1);
                            box-sizing: border-box;
                            margin-bottom: 12px;
                        }
                        .cuser-name {
                            margin: 0 0 4px 0;
                            color: rgba(23, 35, 61, 1);
                            font-size: 20px;
                            font-weight: 700;
                        }
                        .cuser-titles {
                            margin: 0;
                            color: rgba(128, 134, 149, 1);
                            font-size: 14px;
                        }
                    }
                }
            }
            .swiper-button-prev {
                left: 108px;
                top: 336px;
                width: 52px;
                height: 52px;
            }
            .swiper-button-next {
                right: 108px;
                top: 336px;
                width: 52px;
                height: 52px;
            }
        }
        .modu-4-foo {
            position: absolute;
            bottom: 80px;
            left: 0;
            width: 100%;
            padding: 0 122px;
            height: 136px;
            .operative-1, .operative-2 {
                height: 50%;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                li {
                    border-radius: 4px;
                    float: left;
                    width: 10.98%;
                    height: 50px;
                    background-color: #d8d8d8;
                }
            }
        }
    }
}
</style>
