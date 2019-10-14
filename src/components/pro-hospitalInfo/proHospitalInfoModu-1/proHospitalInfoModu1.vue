<template>
  <div
    :class="[
      'proHospitalInfoModu-1',
      'w100',
      'clearfix',
      mob ? 'proHospitalInfoModu-1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-HospitalInfo-mo1-tit">
        <h1>互联网医院信息平台</h1>
        <p>
          互联网医院信息平台是一套集健康大数据收集、健康管理与疾病预防、网上诊疗为一体的远程医疗服务与协同信息平台，提供基于互联网的医疗卫生服务，利用互联网延伸医嘱、电子处方等网络医疗健康服务应用，从而提高医疗服务效率，保证医疗质量和医疗安全。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../common/images/product/items-illus/xxpt.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "ProHospitalInfoModu1",
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
.proHospitalInfoModu-1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-HospitalInfo-mo1-tit {
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
.proHospitalInfoModu-1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-HospitalInfo-mo1-tit {
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
