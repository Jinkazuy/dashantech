<template>
  <div
    :class="[
      'pro-YltInfo-mo10',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo10-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo10-hd">
      <img src="../../../common/images/titles/prd-title-YLT-MS.png" />
      <p>
        由单一医疗机构转变为医联体综合绩效考核
      </p>
    </div>
    <div class="pro-YltInfo-mo10-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-ylt/ylt-mo10.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu10",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo10 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40, 50, 122, 1);
    .pro-YltInfo-mo10-hd {
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
    .pro-YltInfo-mo10-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo10-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo10-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
        }
    }
    .pro-YltInfo-mo10-bd {
        padding: 0 20px;
    }
}
</style>
