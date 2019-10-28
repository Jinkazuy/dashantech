<template>
  <div
    :class="[
      'pro-clinicalDrug-mo4',
      'w100',
      'clearfix',
      mob ? 'pro-clinicalDrug-mo4-mob' : ''
    ]"
  >
    <div class="color-bg-mask"></div>
    <div class="pro-clinicalDrug-mo4-hd">
      <img src="../../../common/images/titles/prd-title-YWLC-SA.png" />
    </div>
    <div class="pro-clinicalDrug-mo4-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-clinicalDrug/pro-clinicalDrug-mo3-ch-2.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proClinicalDrugMO4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-clinicalDrug-mo4 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-clinicalDrug-mo4-hd {
        position: relative;
        z-index: 4;
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
        top: 0;
        height: 50%;
        background-color: rgba(23, 79, 196, 1);
    }
    .pro-clinicalDrug-mo4-bd {
        padding: 0 20px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-clinicalDrug-mo4-mob {
    padding-bottom: 20px;
    .pro-clinicalDrug-mo4-hd {
        img{
            height: 42px;
        }
    }
}
</style>
