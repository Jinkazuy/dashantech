<template>
  <div
    :class="[
      'pro-regional-slow-mo-3',
      'w100',
      'clearfix',
      mob ? 'pro-regional-slow-mo-3-mob' : ''
    ]"
  >
    <div class="pro-regional-slow-mo-3-hd">
      <img src="../../../common/images/titles/prd-title-RegionalSlow-2.png" />
    </div>
    <div class="pro-regional-slow-mo-3-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-RegionalSlow/mo3.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proRegionalSlowMO3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regional-slow-mo-3 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40,50,122,1);
    .pro-regional-slow-mo-3-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
    }
    .pro-regional-slow-mo-3-bd {
        padding: 0 160px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-regional-slow-mo-3-mob {
    padding-bottom: 20px;
    .pro-regional-slow-mo-3-hd {
        img{
            height: 42px;
        }
    }
    .pro-regional-slow-mo-3-bd {
        padding: 0 20px;
    }
}
</style>
