<template>
  <div class="proPacsMo-1 w100 clearfix">
    <div class="container">
      <div class="pro-pacs-mo1-tit">
        <h1>影像云(PACS云)</h1>
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
import bannerIllusCont from "../../../common/images/index/banner-1/banner-ch-3.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proPacsMo1",
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
.proPacsMo-1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-pacs-mo1-tit {
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
</style>
