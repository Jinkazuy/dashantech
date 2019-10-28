<template>
  <div
    :class="[
      'pro-regionalCloud-mo6',
      'w100',
      'clearfix',
      mob ? 'pro-regionalCloud-mo6-mob' : ''
    ]"
  >
    <div class="pro-regionalCloud-mo6-hd">
      <img
        src="../../../common/images/titles/prd-title-QYYYX-Cooperation.png"
        ondragstart="return false;"
      />
      <!--<p>区域阅片中心利国利民，顺应医改方向，为政府解决实际问题</p>-->
    </div>
    <div class="pro-regionalCloud-mo6-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-regionalCloud/regionalCloudMO6.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proRegionalCloudMO6",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regionalCloud-mo6 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40, 50, 122, 1);
    .pro-regionalCloud-mo6-hd {
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
            color: #fff;
            text-align: center;
        }
    }
    .pro-regionalCloud-mo6-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-regionalCloud-mo6-mob {
    padding-bottom: 20px;
    .pro-regionalCloud-mo6-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
        }
    }
    .pro-regionalCloud-mo6-bd {
        padding: 0 20px;
    }
}
</style>
