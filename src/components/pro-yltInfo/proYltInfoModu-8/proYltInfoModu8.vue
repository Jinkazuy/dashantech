<template>
  <div
    :class="[
      'pro-YltInfo-mo8',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo8-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo8-hd">
      <img src="../../../common/images/titles/prd-title-YLT-BC.png" />
      <p>
        构建不同级别、不同类别医疗机构的分工协作机制，<br />有效促进优质医疗资源下沉
      </p>
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-YltInfo-mo8-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo8.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu8",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo8 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-YltInfo-mo8-hd {
        position: relative;
        z-index: 5;
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
        p {
            padding: 0 30%;
            font-size: 16px;
            color: #fff;
            text-align: center;
        }
    }
    .color-bg-mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 50%;
        background-color: #28327a;
    }
    .pro-YltInfo-mo8-bd {
        padding: 0 300px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo8-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo8-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
            padding: 0 20px;
        }
    }
    .color-bg-mask {
        height: 70%;
    }
    .pro-YltInfo-mo8-bd {
        padding: 0 20px;
    }
}
</style>
