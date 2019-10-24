<template>
  <div
    :class="[
      'pro-clinicalDrug-mo1',
      'w100',
      'clearfix',
      mob ? 'pro-clinicalDrug-mo1-mob' : ''
    ]"
  >
    <div class="container">
      <div class="pro-clinicalDrug-mo1-tit">
        <h1>药物临床试验系统</h1>
        <p>
          ※
          保证系统独立性的同时确保系统的可扩展性，满足I、II、III、IV期临床试验的需求<br /><br />※
          和医院现有文书及医嘱等系统无缝整合，形成闭环
        </p>
      </div>
      <!--将banner插图封装为组件，需要用到时，将插画主体（不包括底板和点缀等部分）的图片传入-->
      <bannerImg :bannerIllusCont="bannerIllusCont"></bannerImg>
    </div>
  </div>
</template>

<script>
// 引入banner插画组件
import bannerIllusCont from "../../../common/images/product/items-illus/ywlcsy.png";
import bannerImg from "../../../components/layouts/banner-img/banner-img";
export default {
  name: "proClinicalDrugMO1",
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
.pro-clinicalDrug-mo1 {
    z-index: 2;
    position: relative;
    background-color: rgba(16, 10, 48, 1)
    .container {
        padding: 0 58px;
        .pro-clinicalDrug-mo1-tit {
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
.pro-clinicalDrug-mo1-mob {
    .container {
        display: block;
        padding: 40px 0 0;
        .pro-clinicalDrug-mo1-tit {
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
