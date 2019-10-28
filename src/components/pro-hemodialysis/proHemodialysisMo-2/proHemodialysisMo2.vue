<template>
  <div
    :class="[
      'pro-hemodialysis-mo2',
      'w100',
      'clearfix',
      mob ? 'pro-hemodialysis-mo2-mob' : ''
    ]"
  >
    <div class="hemodialysis-mo2-tit">
      <img src="../../../common/images/titles/prd-title-XYTX-app.png" />
    </div>
    <div class="hemodialysis-mo2-bd container">
      <img
        src="../../../common/images/pro-hemodialysis/pro-hemodialysis-mo2.png"
        ondragstart="return false;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proHemodialysisMo2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-hemodialysis-mo2 {
    padding: 80px 0;
    background-color: rgba(40, 50, 122, 1);
    .hemodialysis-mo2-tit {
      margin: 0 0 32px;
      img {
        display: block;
        margin: 0 auto;
        height: 84px;
      }
    }
    .hemodialysis-mo2-bd {
      padding: 0 58px;
      img {
        width: 100%;
        height: 100%;
      }
    }
}


// ========== 移动端样式 ==========
.pro-hemodialysis-mo2-mob {
  padding: 40px 0;
  .hemodialysis-mo2-tit {
    color: #000;
    img {
      height: 42px;
    }
  }
  .hemodialysis-mo2-bd {
    padding: 0 20px;
  }
}
</style>
