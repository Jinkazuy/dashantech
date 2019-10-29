<template>
  <div
    :class="[
      'pro-YltInfo-mo5',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo5-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo5-hd">
      <img src="../../../common/images/titles/prd-title-YLT-IM.png" />
      <p>
        构建安全、可靠、高效、实用的信息化体系，充分发挥信息系统对医疗集团
        的支撑作用，实现远程医疗、公共卫生、家庭医生签约、健康管理、计划生育、
        医疗保险、绩效考核等信息互联互通。
        <br /><br />通过信息化手段，推进检查检验结果查
        询、推送与互认，开展移动支付、出院患者床旁结算、门诊患者诊间结算等服
        务，使患者就医更加方便、快捷， “让信息多跑路、病人少跑腿”，提高群众综
        合满意度。“小病不出乡，大病不出县”，促进医疗资源下沉。
      </p>
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-YltInfo-mo5-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo5.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo5 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-YltInfo-mo5-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
        p {
            padding: 0 30%;
            font-size: 16px;
            color: rgba(23, 35, 61, 1);
            text-align: center;
        }
    }
    .color-bg-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40%;
        background-color: #28327a;
    }
    .pro-YltInfo-mo5-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo5-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo5-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
            padding: 0 20px;
        }
    }
    .color-bg-mask {
        height: 30%;
    }
    .pro-YltInfo-mo5-bd {
        padding: 0 20px;
    }
}
</style>
