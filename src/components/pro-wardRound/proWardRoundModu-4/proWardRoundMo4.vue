<template>
  <div
    :class="[
      'pro-WardRound-modu-4',
      'w100',
      'clearfix',
      mob ? 'pro-WardRound-modu-4-mob' : ''
    ]"
  >
    <div class="pro-WardRound-modu-4-hd">
      <img src="../../../common/images/titles/prd-title-WardRound-3.png" />
    </div>
    <div class="pro-WardRound-modu-4-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-productWardRound/mo4.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proWardRoundModu4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-WardRound-modu-4 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240,245,255,1);
    .pro-WardRound-modu-4-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
    }
    .pro-WardRound-modu-4-bd {
        padding: 0 160px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-WardRound-modu-4-mob {
    padding-bottom: 20px;
    .pro-WardRound-modu-4-hd {
        img{
            width: 80%;
            height: auto;
        }
    }
    .pro-WardRound-modu-4-bd {
        padding: 0 20px;
    }
}
</style>
