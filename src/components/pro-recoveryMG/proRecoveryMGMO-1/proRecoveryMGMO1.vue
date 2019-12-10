<template>
  <div
    :class="[
      'pro-recover-mg-modu-1',
      'w100',
      'clearfix',
      mob ? 'pro-recover-mg-modu-1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-recover-mg-modu-1-tit">
        <h1>大善智能康复管理系统</h1>
        <p>
          康复治疗前应先对病、伤、残者进行康复评定，然后制定一个理想的康复方案，由以康复医师为中心，和临床医学相关人员共同组成的康复治疗组去实施，并在实施过程中不断总结、评定调查，直至治疗结束。可实现康复科室的数字化、信息化和过程的管控，有效避免信息孤岛的出现，实现全员的数据共享。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
import bannerIllusCont from "../../../../public/images/jkgl.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proRecoveryMGMO1",
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
.pro-recover-mg-modu-1 {
    overflow: hidden;
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-recover-mg-modu-1-tit {
            margin: 220px 0 0 0;
            width: 38%;
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
.pro-recover-mg-modu-1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-recover-mg-modu-1-tit {
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
