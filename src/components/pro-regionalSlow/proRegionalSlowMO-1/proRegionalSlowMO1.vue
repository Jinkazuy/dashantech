<template>
  <div
    :class="[
      'pro-regional-slow-mo1',
      'w100',
      'clearfix',
      mob ? 'pro-regional-slow-mo1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-regional-slow-mo1-tit">
        <h1>区域慢病管理系统</h1>
        <p>
          血液透析中心长期以纸质方式记录患者相关信息，包括病历、长短期医嘱、化验单以及记有大量透析数据的透析记录单等，花费了医护人员大量时间，且这些记录仍然不够完善，其准确性和完整性有限，可溯源性差，无法满足质控评估以及统计分析的要求。
          采用信息化手段来促进血液透析中心的管理、运行效率，提高透析安全性及透析质量，已成为目前血液透析中心的重要发展方向。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../../public/images/qymb.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proRegionalSlowMO1",
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
.pro-regional-slow-mo1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-regional-slow-mo1-tit {
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
.pro-regional-slow-mo1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-regional-slow-mo1-tit {
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
