<template>
  <div
    :class="[
      'pro-hemodialysis-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-hemodialysis-mo3-mob' : ''
    ]"
  >
    <div class="hemodialysis-mo3-tit">
      <img src="../../../common/images/titles/prd-title-XYTX-NetWork.png" />
    </div>
    <div class="hemodialysis-mo3-bd container">
      <img
        src="../../../common/images/pro-hemodialysis/pro-hemodialysis-mo3.png"
        ondragstart="return false;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proHemodialysisMo3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-hemodialysis-mo3 {
    padding: 80px 0;
    background-color: rgba(55, 67, 143, 1);
    .hemodialysis-mo3-tit {
        margin: 0 0 32px;
        img {
            display: block;
            margin: 0 auto;
            height: 84px;
        }
    }
    .hemodialysis-mo3-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 ==========
.pro-hemodialysis-mo3-mob {
    padding: 40px 0;
    .hemodialysis-mo3-tit {
        color: #000;
        img {
            height: 42px;
        }
    }
    .hemodialysis-mo3-bd {
        padding: 0 20px;
    }
}
</style>
