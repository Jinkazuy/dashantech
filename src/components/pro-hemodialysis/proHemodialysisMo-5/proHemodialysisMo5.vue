<template>
  <div
    :class="[
      'pro-hemodialysis-mo5',
      'w100',
      'clearfix',
      mob ? 'pro-hemodialysis-mo5-mob' : ''
    ]"
  >
    <div class="hemodialysis-mo5-tit">
      <img src="../../../common/images/titles/prd-title-XYTX-BR.png" />
    </div>
    <div class="hemodialysis-mo5-bd container">
      <img
        src="../../../common/images/pro-hemodialysis/pro-hemodialysis-mo5.png"
        ondragstart="return false;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proHemodialysisMo5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-hemodialysis-mo5 {
    padding: 80px 0;
    background-color: rgba(55, 67, 143, 1);
    .hemodialysis-mo5-tit {
        margin: 0 0 32px;
        img {
            display: block;
            margin: 0 auto;
            height: 84px;
        }
    }
    .hemodialysis-mo5-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 ==========
.pro-hemodialysis-mo5-mob {
    padding: 40px 0;
    .hemodialysis-mo5-tit {
        color: #000;
        img {
            height: 42px;
        }
    }
    .hemodialysis-mo5-bd {
        padding: 0 20px;
    }
}
</style>
