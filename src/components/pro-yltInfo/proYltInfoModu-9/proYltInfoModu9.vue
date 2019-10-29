<template>
  <div
    :class="[
      'pro-YltInfo-mo9',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo9-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo9-hd">
      <img src="../../../common/images/titles/prd-title-YLT-SP.png" />
      <p>
        建立家庭医生平台，形成全科与专科联动、签约医生与团队协同、医防有机<br /><br
          v-if="mob"
        />融合的服务工作机制，建立个人健康档案、慢病管理，提供个性化签约服务。
      </p>
    </div>
    <div class="pro-YltInfo-mo9-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo9.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu9",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo9 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40, 50, 122, 1);
    .pro-YltInfo-mo9-hd {
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
    .pro-YltInfo-mo9-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo9-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo9-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
            padding: 0 20px;
        }
    }
    .pro-YltInfo-mo9-bd {
        padding: 0 20px;
    }
}
</style>
