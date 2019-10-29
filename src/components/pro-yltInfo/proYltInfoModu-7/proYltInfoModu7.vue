<template>
  <div
    :class="[
      'pro-YltInfo-mo7',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo7-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo7-hd">
      <img src="../../../common/images/titles/prd-title-YLT-Reso.png" />
      <p>
        由区域核心医院举办医学影像、检验检查、病理诊断和消毒供应等中心，为
        医联体内各医疗机构提供同质化、一体化服务。
        <br /><br />
        推进互联网诊疗服务，发挥远程医疗作用，形成医联体网格内远程医疗服务
        网络，为基层提供远程影像、远程心电、远程会诊等服务，方便患者看病就医。
      </p>
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-YltInfo-mo7-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo7.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu7",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo7 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-YltInfo-mo7-hd {
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
    .pro-YltInfo-mo7-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo7-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo7-hd {
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
    .pro-YltInfo-mo7-bd {
        padding: 0 20px;
    }
}
</style>
