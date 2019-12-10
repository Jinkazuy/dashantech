<template>
  <div
    :class="[
      'pro-recover-mg-modu-2',
      'w100',
      'clearfix',
      mob ? 'pro-recover-mg-modu-2-mob' : ''
    ]"
  >
    <div class="pro-recover-mg-modu-2-hd">
      <img src="../../../common/images/titles/prd-title-recovery-1.png" />
    </div>
    <div class="pro-recover-mg-modu-2-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-recovery/mo2.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proRecoveryMGMO2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-recover-mg-modu-2 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240,245,255,1);
    .pro-recover-mg-modu-2-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
    }
    .pro-recover-mg-modu-2-bd {
        padding: 0 160px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-recover-mg-modu-2-mob {
    padding-bottom: 20px;
    .pro-recover-mg-modu-2-hd {
        img{
            height: 42px;
        }
    }
    .pro-recover-mg-modu-2-bd {
        padding: 0 20px;
    }
}
</style>
