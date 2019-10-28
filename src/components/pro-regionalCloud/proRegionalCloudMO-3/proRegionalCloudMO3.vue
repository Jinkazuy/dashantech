<template>
  <div
    :class="[
      'pro-regionalCloud-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-regionalCloud-mo3-mob' : ''
    ]"
  >
    <div class="pro-regionalCloud-mo3-hd">
      <img src="../../../common/images/titles/prd-title-QYYYX-framework.png" />
      <!--<p>深刻理解与洞察重症护理的需求</p>-->
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-regionalCloud-mo3-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-regionalCloud/regionalCloudMO3.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proRegionalCloudMO3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regionalCloud-mo3 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40, 50, 122, 1);
    .pro-regionalCloud-mo3-hd {
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
            font-weight: 700;
            color: rgba(23, 35, 61, 1);
            text-align: center;
        }
    }
    .color-bg-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40%;
        background-color: #28327a;
    }
    .pro-regionalCloud-mo3-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-regionalCloud-mo3-mob {
    padding-bottom: 20px;
    .pro-regionalCloud-mo3-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
        }
    }
    .color-bg-mask {
        height: 30%;
    }
    .pro-regionalCloud-mo3-bd {
        padding: 0 20px;
    }
}
</style>
