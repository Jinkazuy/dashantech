<template>
  <div
    :class="[
      'pro-YltInfo-mo1',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-YltInfo-mo1-tit">
        <h1>
          大善医联体云平台
          <i class="iconfont iconbofang" @click="playMv()"></i>
        </h1>
        <p>
          2019年5月，为贯彻落实《国务院办公厅关于推进医疗联合体建设和发展的指导意见》
          等有关要求，推进分级诊疗制度建设和医疗联合体(以下简称医联体)建设，构建优质高效
          的医疗卫生服务体系，逐步实现城市医联体网格化布局管理，国家卫生健康委、国家中医药
          局决定开展城市医联体建设试点工作
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
    <player
      :videoSrc="videoSrc"
      :videoShow="videoShow"
      ref="player"
      :mob="mob"
    ></player>
    <!--关闭按钮-->
    <div class="close-pl" @click="closePl" v-show="videoShow">
      <i class="iconfont iconguanbi"></i>
    </div>
    <!--视频播放器 结束-->
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../../public/images/ylt.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
// 引入视频播放器组件
import player from "../../../components/layouts/player/player";
export default {
  name: "proYltInfoModu1",
  props: ["mob"],
  data() {
    return {
      // banner插画主体
      bannerIllusCont: bannerIllusCont,
      videoSrc: "video/ylt.mp4",
      videoShow: false
    };
  },
  methods: {
    playMv() {
      // 视频播放器组件显示
      this.videoShow = true;
      // 视频播放器组件的播放函数
      this.$refs.player.onPlay();
    },
    // 暂停关闭视频&&隐藏视频播放组件
    closePl() {
      this.videoShow = false;
      this.$refs.player.stopPlay();
    }
  },
  components: {
    bannerImg,
    player
  }
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo1 {
    overflow: hidden;
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-YltInfo-mo1-tit {
            margin: 220px 0 0 0;
            width: 34%;
            h1,p {
                color: #fff;
            }
            h1 {
                font-size: 40px;
                font-weight: 700;
                margin: 0 0 20px 0;
            }
            p {
                margin: 0;
                font-size: 16px;
                line-height: 28px;
            }
        }
        // 通过父级直接控制子集插画的类名；
        .banner-illus {
            position: relative;
            right: -10%;
            top: 0;
            transform: translateY(16%);
        }
    }
    .iconbofang {
      font-size: 40px;
      margin-top: 10px;
      display: inline-block;
      opacity: .6;
      color: #fff;
      transition: all .3s;
    }
    .iconbofang:hover {
      font-size: 40px;
      margin-top: 10px;
      display: inline-block;
      opacity: 1;
    }
    // 关闭按钮
    // 关闭按钮
    .close-pl {
      position: absolute;
      right: 20%;
      top: 20%;
      width: 50px;
      height: 50px;
      z-index: 11;
      background-color: rgba(255,255,255,.1);
      text-align: center;
      cursor: pointer;
      i {
        padding-left: 6px;
        font-size: 22px;
        line-height: 50px;
        color: #fff;
        opacity: .5;
        transition: all .2s;
      }
    }
    .close-pl:hover {
      i {
        opacity: 1;
      }
    }
}
// ============= 移动端样式 =============
.pro-YltInfo-mo1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-YltInfo-mo1-tit {
            width: 100% !important;
            margin: 40px 0 0;
            padding: 0 20px;
            h1 {
                font-size: 24px;
            }
        }
        // 插画样式
        // 由于是组件，所以在这里直接写插画组件样式，不单独在组件里改样式了；
        .banner-illus {
            right: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 200px;
        }
    }
}
</style>
