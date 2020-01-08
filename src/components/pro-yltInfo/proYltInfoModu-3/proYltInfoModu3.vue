<template>
  <div
    :class="[
      'pro-YltInfo-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo3-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo3-hd">
      <img src="../../../common/images/titles/prd-title-YLT-BF.png" />
      <p>“以治病为中心向以健康为中心转变” 为核心理念</p>
    </div>
    <div class="pro-YltInfo-mo3-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo3.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo3 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-YltInfo-mo3-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
        p {
            font-size: 16px;
            color: rgba(23, 35, 61, 1);
            text-align: center;
        }
    }
    .pro-YltInfo-mo3-bd {
        padding: 0 300px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo3-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo3-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
        }
    }
    .pro-YltInfo-mo3-bd {
        padding: 0 20px;
    }
}
</style>
