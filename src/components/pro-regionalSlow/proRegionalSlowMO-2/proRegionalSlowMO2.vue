<template>
  <div
    :class="[
      'pro-regional-slow-mo-2',
      'w100',
      mob ? 'pro-regional-slow-mo-2-mob' : ''
    ]"
  >
    <div class="pro-regional-slow-mo-2-tit">
      <div class="tit-img-box">
        <img src="../../../common/images/titles/prd-title-RegionalSlow-1.png" />
      </div>
    </div>
    <div class="pro-regional-slow-mo-2-bd">
      <div class="illus-box container">
        <img src="../../../common/images/pro-RegionalSlow/mo2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proRegionalSlowMO2",
  props: ["mob"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
.pro-regional-slow-mo-2 {
    .pro-regional-slow-mo-2-tit {
        padding: 80px 0 250px 0;
        background-color: rgba(240,245,255,1);
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
    .pro-regional-slow-mo-2-bd {
        padding-bottom: 80px;
        background-color: rgba(40,50,122,1);
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
.pro-regional-slow-mo-2-mob {
    .pro-regional-slow-mo-2-tit {
        padding: 40px 0 90px;
        .tit-img-box{
            height: 42px;
        }
    }
    .pro-regional-slow-mo-2-bd {
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
