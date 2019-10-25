<template>
  <div
    :class="[
      'pro-wiseCare-mo1',
      'w100',
      'clearfix',
      mob ? 'pro-wiseCare-mo1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-wiseCare-mo1-tit">
        <h1>智慧护理管理信息系统</h1>
        <p>
          随着云计算、大数据、互联网及影像处理技术的不断进步，困扰医院的海量影像数据存储大、共享难、利用差、成本高的问题得到缓解，推动医学影像向一体化、区域化、智能化的方向发展。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../../public/images/zhhl.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proWiseCareMO1",
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
.pro-wiseCare-mo1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-wiseCare-mo1-tit {
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
.pro-wiseCare-mo1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-wiseCare-mo1-tit {
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
