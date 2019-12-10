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
        <h1>大善区域慢病管理系统</h1>
        <p>
          大善区域慢病管理系统是按照国家公共卫生服务规范，为区域患者提供统一标准化服务，结合互联网、物联网等技术，实现区域信息的互联互通，减少医生团队重复的管理工作量，并实现医疗信息的共享以及数据统一上报。
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
    overflow: hidden;
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
