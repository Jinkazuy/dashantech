<template>
  <div
    :class="[
      'pro-regionalCloud-mo1',
      'w100',
      'clearfix',
      mob ? 'pro-regionalCloud-mo1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-regionalCloud-mo1-tit">
        <h1>区域医疗影像及诊断云平台</h1>
        <p>
          区域医疗影像与诊断云平台是指为一定区域内居民提供
          代表该区域先进水平的医疗服务，承担一定的人才培养、医
          学科研、教学等任务的医院，区域阅片中心同时承担服务区
          域突发公共卫生事件的医疗救治和技术支持。其宗旨是:以
          健康为目标，以信息网络为基础;建立多层级医疗卫生机构
          的服务联盟;以多学科协同抓手，整合预防、诊治和健康工 作。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../../public/images/qyyyx.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proRegionalCloudMO1",
  props: ["mob"],
  data() {
    return {
      // banner插画主体
      bannerIllusCont: bannerIllusCont
    };
  },
  components: {
    bannerImg
  }
};
</script>

<style scoped lang="stylus">
.pro-regionalCloud-mo1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-regionalCloud-mo1-tit {
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
}
// ============= 移动端样式 =============
.pro-regionalCloud-mo1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-regionalCloud-mo1-tit {
            width: 100%;
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
