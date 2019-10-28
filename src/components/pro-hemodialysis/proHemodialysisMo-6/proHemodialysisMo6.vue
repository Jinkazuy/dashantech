<template>
  <div
    :class="[
      'pro-hemodialysis-mo6',
      'w100',
      'clearfix',
      mob ? 'pro-hemodialysis-mo6-mob' : ''
    ]"
  >
    <div class="hemodialysis-mo6-tit">
      <img src="../../../common/images/titles/prd-title-XYTX-FR.png" />
    </div>
    <div class="hemodialysis-mo6-bd container">
      <img
        src="../../../common/images/pro-hemodialysis/pro-hemodialysis-mo6.png"
        ondragstart="return false;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proHemodialysisMo6",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-hemodialysis-mo6 {
    padding: 80px 0;
    background-color: rgba(40, 50, 122, 1);
    .hemodialysis-mo6-tit {
        margin: 0 0 32px;
        img {
            display: block;
            margin: 0 auto;
            height: 84px;
        }
    }
    .hemodialysis-mo6-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 ==========
.pro-hemodialysis-mo6-mob {
    padding: 40px 0;
    .hemodialysis-mo6-tit {
        color: #000;
        img {
            height: 42px;
        }
    }
    .hemodialysis-mo6-bd {
        padding: 0 20px;
    }
}
</style>
