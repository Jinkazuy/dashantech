<template>
  <div
    :class="[
      'pro-clinicalDrug-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-clinicalDrug-mo3-mob' : ''
    ]"
  >
    <div class="pro-clinicalDrug-mo3-hd">
      <img src="../../../common/images/titles/prd-title-YWLC-PM.png" />
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-clinicalDrug-mo3-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-clinicalDrug/pro-clinicalDrug-mo3-ch-1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proClinicalDrugMO3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-clinicalDrug-mo3 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-clinicalDrug-mo3-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
    }
    .color-bg-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40%;
        background-color: rgba(23, 79, 196, 1);
    }
    .pro-clinicalDrug-mo3-bd {
        padding: 0 20px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-clinicalDrug-mo3-mob {
    padding-bottom: 20px;
    .pro-clinicalDrug-mo3-hd {
        img{
            height: 42px;
        }
    }
}
</style>
