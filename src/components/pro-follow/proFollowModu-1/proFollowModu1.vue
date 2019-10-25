<template>
  <div
    :class="[
      'proFollowMo-1',
      'w100',
      'clearfix',
      mob ? 'proFollowMo-1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-follow-mo1-tit">
        <h1>随访系统</h1>
        <p>
          医学随访是指医院或者医疗保健机构对曾在医院就诊的病人以通讯或者其他的方式进行定期了解患者病情变化和指导患者康复的一种观察方法。医院随访是医院以门诊、住院患者为主要服务对象，是实现院后持续服务和评价反馈的主要手段，包括关怀性随访和管理性随访，主要目的是提高患者满意度，增强患者忠诚度，提升医院管理水平。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../../public/images/sfxt.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proFollowModu1",
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
.proFollowMo-1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-follow-mo1-tit {
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
.proFollowMo-1-mob {
  .container {
    display: block;
    padding: 40px 0 0;
    .pro-follow-mo1-tit {
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
