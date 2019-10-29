<template>
  <div
    :class="[
      'pro-YltInfo-mo6',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo6-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo6-hd">
      <img src="../../../common/images/titles/prd-title-YLT-IP.png" />
      <p>
        网络架构及统一信息平台部署方案
        <br />
        实现各级各类医疗卫生机构信息系统的互联互通
      </p>
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-YltInfo-mo6-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo6.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo6 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-YltInfo-mo6-hd {
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
    .pro-YltInfo-mo6-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo6-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo6-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
            padding: 0 20px;
        }
    }
    .color-bg-mask {
        height: 64%;
    }
    .pro-YltInfo-mo6-bd {
        padding: 0 20px;
    }
}
</style>
