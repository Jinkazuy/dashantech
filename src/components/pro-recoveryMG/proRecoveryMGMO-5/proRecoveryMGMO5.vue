<template>
  <div
    :class="[
      'pro-recover-mg-modu-5',
      'w100',
      mob ? 'pro-recover-mg-modu-5-mob' : ''
    ]"
  >
    <div class="pro-recover-mg-modu-5-tit">
      <div class="tit-img-box">
        <img src="../../../common/images/titles/prd-title-recovery-4.png" />
      </div>
    </div>
    <div class="pro-recover-mg-modu-5-bd">
      <div class="illus-box container">
        <img src="../../../common/images/pro-recovery/mo5.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proRecoveryMGMO5",
  props: ["mob"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
.pro-recover-mg-modu-5 {
    .pro-recover-mg-modu-5-tit {
        padding: 80px 0 250px 0;
        background-color: rgba(40,50,122,1);
        .tit-img-box {
            height: 84px;
            margin: 0 auto 40px;
            img {
                display: block;
                height: 100%;
                margin: 0 auto;
            }
        }
    }
    .pro-recover-mg-modu-5-bd {
        padding-bottom: 80px;
        background-color: rgba(240,245,255,1);
        .container {
            padding: 30px;
        }
        .illus-box {
            img {
                width: 100%;
                margin: -18% auto 0;
            }
        }
    }
}
// ============= 移动端样式 =============
.pro-recover-mg-modu-5-mob {
    .pro-recover-mg-modu-5-tit {
        padding: 40px 0 90px;
        .tit-img-box{
            height: 42px;
        }
    }
    .pro-recover-mg-modu-5-bd {
        .illus-box {
            padding: 0;
            img {
                width: 90% !important;
                height: 100%;
            }
        }
    }
}
</style>
