<template>
  <div
    :class="[
      'pro-film-modu-1',
      'w100',
      'clearfix',
      mob ? 'pro-film-modu-1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-film-modu-1-tit">
        <h1>电子胶片</h1>
        <p>
          电子胶片，是基于移动互联网、、云存储、云计算技术，相对于传统感光胶片而言的一种新型影像浏览应用服务。医院可通过该技术把患者的数字影像发布到云端并长期存储，为医疗机构、医生及其患者提供便捷的医学影响信息服务。
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../common/images/product/items-illus/dzjp.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  //pro-film-modu-1
  name: "proFilmModu1",
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
.pro-film-modu-1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-film-modu-1-tit {
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
.pro-film-modu-1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-film-modu-1-tit {
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
