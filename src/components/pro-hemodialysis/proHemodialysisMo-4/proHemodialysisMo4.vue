<template>
  <div
    :class="[
      'pro-hemodialysis-mo4',
      'w100',
      'clearfix',
      mob ? 'pro-hemodialysis-mo4-mob' : ''
    ]"
  >
    <div class="hemodialysis-mo4-tit">
      <img src="../../../common/images/titles/prd-title-XYTX-BPD.png" />
    </div>
    <div class="hemodialysis-mo4-bd container">
      <img
        src="../../../common/images/pro-hemodialysis/pro-hemodialysis-mo4.png"
        ondragstart="return false;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proHemodialysisMo4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-hemodialysis-mo4 {
    padding: 80px 0;
    background-color: rgba(40, 50, 122, 1);
    .hemodialysis-mo4-tit {
        margin: 0 0 32px;
        img {
            display: block;
            margin: 0 auto;
            height: 84px;
        }
    }
    .hemodialysis-mo4-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 ==========
.pro-hemodialysis-mo4-mob {
    padding: 40px 0;
    .hemodialysis-mo4-tit {
        color: #000;
        img {
            height: 42px;
        }
    }
    .hemodialysis-mo4-bd {
        padding: 0 20px;
    }
}
</style>
