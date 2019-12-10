<template>
  <div
    :class="[
      'pro-HospitalInfoModu-mo2',
      'w100',
      'clearfix',
      mob ? 'pro-HospitalInfoModu-mo2-mob' : ''
    ]"
  >
    <div class="pro-HospitalInfoModu-mo2-tit">
      <img src="../../../common/images/titles/prd-title-HI-1.png" />
      <p>
        互联网医疗平台核心是医生和用户，盈利模式多样，多方获益，数据价值巨大。
      </p>
    </div>
    <div class="pro-HospitalInfoModu-mo2-bd container">
      <!--D:\JK-WorkFile\Code\dashantech\src\common\images\pro-HospitalInfo-->
      <img
        src="../../../common/images/pro-HospitalInfo/HospitalInfo-1.png"
        ondragstart="return false;"
      />
      <img
        src="../../../common/images/pro-HospitalInfo/HospitalInfo-2.png"
        ondragstart="return false;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProHospitalInfoModu2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-HospitalInfoModu-mo2 {
    padding: 80px 0;
    background-color: rgba(40, 50, 122, 1);
    .pro-HospitalInfoModu-mo2-tit {
        margin: 0 0 32px;
      img {
        display: block;
        margin: 0 auto;
        height: 84px;
      }
      p {
        margin-top: 20px;
        font-size: 16px;
        color: #fff;
        text-align: center;
      }
    }
  .pro-HospitalInfoModu-mo2-bd {
      display: block;
      padding: 0 58px;
      img {
        width: 60%;
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
}


// ========== 移动端样式 ==========
.pro-HospitalInfoModu-mo2-mob {
    padding: 40px 0;
    .pro-HospitalInfoModu-mo2-mob-tit {
        color: #000;
        img {
            height: 42px;
        }
    }
    .pro-HospitalInfoModu-mo2-mob-bd {
        padding: 0 20px;
    }
}
</style>
