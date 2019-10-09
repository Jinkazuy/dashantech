<template>
  <div :class="['home-cont-modu-4', 'w100' ,mob ? 'home-cont-modu-4-mob' : '']">
    <div class="container h100">
      <div class="modu-4-header">
        <img
          class="qm"
          src="../../../common/images/index/modu-4/mark.png"
          alt="“"
        />
        <img
          class="title"
          src="../../../common/images/titles/home-title-customer.png"
          alt="“"
        />
      </div>
      <div class="modu-4-body w100">
        <swiper class="swiper-wrapper" :delay="6000">
          <swiper-slide
            class="banner-items"
            v-for="item in swiperSlide"
            :key="item.forKey"
          >
            <div class="cont-wrapper">
              <p class="cuser-cont w100">{{ item.p }}</p>
              <div class="cuser-info">
                <img :src="item.avatar" alt="" class="cuser-attr" />
                <h4 class="cuser-name">{{ item.cusName }}</h4>
                <p class="cuser-titles">{{ item.title }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!--swiper导航按钮，必须写在外边儿，不然会出问题，只要类名对上了就行-->
        <div class="swiper-button-prev " slot="button-prev" v-if="!mob">
          <i class="iconfont iconchevron-back-solid"></i>
        </div>
        <div class="swiper-button-next" slot="button-next" v-if="!mob">
          <i class="iconfont iconchevron-forward-solid"></i>
        </div>
      </div>
      <div class="modu-4-foo w100">
        <ul class="operative-1">
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png"
              alt=""
            />
          </li>
        </ul>
        <ul class="operative-2" v-if="!mob">
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
import swiper from "../../layouts/swiper/swiper";

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
          avatar: "./images/avatar.jpg",
          forKey: 1
        },
        {
          cusName: "李四",
          title: "xxxx医院xx主任",
          p: `用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈`,
          avatar: "./images/avatar.jpg",
          forKey: 2
        },
        {
          cusName: "王五",
          title: "xxxx医院xx主任",
          p: `用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈，特别特别好，用户评价、用户反馈`,
          avatar: "./images/avatar.jpg",
          forKey: 3
        }
      ],
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("index-modu-1-加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  },
  components: {
    swiper
  }
};
</script>

<style scoped lang="stylus">
.home-cont-modu-4 {
    height: 852px;
    background-color: #fcfcfc;
    .container {
        padding: 0;
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
            .swiper-button-prev, .swiper-button-next {
              background-image: none;
              i {
                font-size: 40px;
                color: #aaa;
                transition: all .2s;
              }
            }
            .swiper-button-prev:hover, .swiper-button-next:hover {
              i {
                color: #14948a;
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
                    display: flex;
                    align-items: center;
                    img {
                      width: 100%;
                    }
                }
            }
        }
    }
}
// =========== 移动端样式 =============
.home-cont-modu-4-mob {
  height: 510px;
  .container {
    .modu-4-header {
      img:first-of-type {
        top: 20px;
        left: 20px;
        width: 30px!important;
        height: 24px!important;
      }
      img:last-of-type {
        top: 40px;
        width: 70px!important;
        height: 40px!important;
      }
    }
    .modu-4-body {
      .swiper-container {
        top: 120px;
        width: 88%;
        .banner-items {
          width: 100% !important;
          .cont-wrapper {
            p {
              padding: 0 16px;
              font-size: 12px;
              line-height: 20px;
              margin-top: -20px;
            }
          }
        }
      }
    }
    .modu-4-foo {
      bottom: 30px !important;
      padding: 0 20px !important;
      height: 30px;
      ul {
        height: 100% !important;
        li {
          height: 100% !important;
        }
      }
    }
  }
}
</style>
