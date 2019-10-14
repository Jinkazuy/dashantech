<template>
  <div
    :class="[
      'pro-WardRound-modu-1',
      'w100',
      'clearfix',
      mob ? 'pro-WardRound-modu-1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-follow-mo1-tit">
        <h1>移动医生查房系统</h1>
        <p>
          大善移动医生查房系统通过与众多医院已有的相关信息系统进行对接，实现了在移动终端设备上查看病人的基本信息、医嘱信息、电子病历、检查信息、检验信息、护理信息，同时还支持医生在终端设备上通过手写、语音以及图片的方式进行备注，很好地将医生的信息系统延伸到病人床边。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../common/images/product/items-illus/ydys.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proWardRoundModu1",
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
.pro-WardRound-modu-1 {
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
.pro-WardRound-modu-1-mob {
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
