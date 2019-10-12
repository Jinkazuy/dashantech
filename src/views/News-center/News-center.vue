<template>
  <div :class="['news-center', mob ? 'news-center-mob' : '']">
    <div class="news-c-banner">
      <swiper :options="swiperOption" class="swiper-box h100">
        <swiper-slide v-for="(item, index) in bannerSrc" :key="index">
          <img class="w100" :src="item.src" />
        </swiper-slide>
        <!--swiper导航按钮，必须写在外边儿，不然会出问题，只要类名对上了就行-->
        <div class="swiper-button-prev" slot="button-prev" v-if="!mob">
          <i class="iconfont iconchevron-back-solid"></i>
        </div>
        <div class="swiper-button-next" slot="button-next" v-if="!mob">
          <i class="iconfont iconchevron-forward-solid"></i>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <newsModu :mob="mob"></newsModu>
    <modu1 :mob="mob"></modu1>
  </div>
</template>

<script>
// 引入新闻列表模块，与首页相同
import newsModu from "../../components/index/modules-3/modules3";
// 引入新闻中心页的第一个模块，但是排在第3个；
import modu1 from "../../components/news-center/news-modu1/news-modu1";
export default {
  name: "News-center",
  props: ["mob"],
  data() {
    return {
      // swiper配置项
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 自动播放设置
        autoplay: {
          // 等待时间
          delay: 4000,
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
      },
      // banner的图片src
      bannerSrc: [
        {
          index: 1,
          src: "./images/poto-2.jpg"
        },
        {
          index: 2,
          src: "./images/poto-2.jpg"
        },
        {
          index: 3,
          src: "./images/poto-2.jpg"
        },
        {
          index: 4,
          src: "./images/poto-2.jpg"
        },
        {
          index: 5,
          src: "./images/poto-2.jpg"
        },
        {
          index: 6,
          src: "./images/poto-2.jpg"
        }
      ]
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
    console.log(12);
    return false;
  },
  components: {
    newsModu,
    modu1
  }
};
</script>

<style scoped lang="stylus">
.news-center {
  margin-top: -20px;
  background-color: #e7e9f2;
  .news-c-banner {
    overflow: hidden;
    padding-top: 2%;
    position: relative;
    height: 550px;
    background-color: #e7e9f2;
    .swiper-box {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 200%;
    }
    .swiper-container {
      height: 90%;
      .swiper-slide {
        height: 90%;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 10px 15px 0 rgba(0,0,0,0.25);
        background-color: #e7e9f2;
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
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
        left: 30%;
      }
      .swiper-button-next {
        right: 30%;
      }
      .swiper-button-prev:hover, .swiper-button-next:hover {
        i {
          color: #14948a;
        }
      }
    }
  }
}
// ============移动端样式=============
.news-center-mob {
  .news-c-banner {
    height: 240px;
    margin-top: 20px;
    .swiper-container {
      height: 90%;
      .swiper-wrapper {
        .swiper-slide {
          img {
            height: 100%;
          }
        }
      }
      .swiper-pagination {
        bottom: -4px;
      }
    }
  }
}
</style>
