<template>
  <div class="home-cont-modu-2">
    <div class="container">
      <h3 class="modu-2-titles">
        <img
          src="../../../common/images/titles/home-title-aboutUs.png"
          alt="关于我们"
        />
      </h3>
      <div class="modu-2-headers">
        <p>
          北京大善青松科技有限公司（简称“大善科技”），<br />立足北京中关村高新技术资源优势，深入医疗大健康产业。
        </p>
        <div class="modu-2-headers-logo">
          <img src="../../../common/images/ds-logo.png" alt="大善科技" />
        </div>
      </div>
      <ul class="modu-2-body">
        <li>
          <p>大善科技是国内技术领先的医疗领域信息化平台系统产品供应商和相关方案提供商，拥有一支熟悉医疗行业专业背景和经验的团队，报告资深项目经理、研发总监、数据分析博士等。</p>
          <img src="../../../common/images/titles/home-title-aboutUs.png">
        </li>
        <li>
          <p>团队核心成员来自华海、东软、科达/锐帽、Agfa爱克发、美国通用电气GE、3M、微软等多家领军IT技术公司，拥有深厚的研发功底。<br /><br />以产品研发能力和专业服务能力作为公司的核心竞争力，并具有强大的产品实施，服务咨询等大型项目管理与实施经验。</p>
          <img src="../../../common/images/titles/home-title-aboutUs.png">
        </li>
        <li>
          <p>在企业级ERP、医疗健康大数据、零售大数据、政府服务平台等大型项目均具备成功开发经验，尤真对医疗信息技术和大健康领域有着深刻而清晰的认识与愿景。</p>
          <img src="../../../common/images/titles/home-title-aboutUs.png">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "modules2"
};
</script>

<style scoped lang="stylus">
.home-cont-modu-2 {
  width: 100%;
  height: 824px;
  background-color: #fff;
  .container {
    position: relative;
    padding: 0;
    height: 100%;
    width: 100%;
    .modu-2-titles {
      position: absolute;
      left: 0;
      top: 80px;
      height: 84px;
      padding: 0;
      margin: 0;
      width: 138px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .modu-2-headers {
      position: absolute;
      left: 0;
      top: 224px;
      width: 100%;
      p {
        position: absolute;
        left: 0;
        font-size: 24px;
        line-height: 40px;
        font-weight: 700;
        color: rgba(23, 35, 61, 1);
        width: 66%;
        margin: 0;
      }
      .modu-2-headers-logo {
        position: absolute;
        right: 60px;
        width: 268px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          display: inline-block;
          z-index: 2;
          position: absolute;
          left:0;
        }
      }
      .modu-2-headers-logo:after {
        content: '';
        width: 80%;
        height: 50%;
        position: absolute;
        bottom: -2px;
        left: 10%;
        filter: blur(20px);
        border-radius: 14px;
        background-color: #1addcf;
        z-index: 1;
        animation-name: auto-shadows;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-delay: 0;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-play-state: running;
      }
      @keyframes auto-shadows {
        from {
          filter: blur(20px); bottom: -2px;
          width: 80%;
          height: 100%;
        }
        to {
          filter: blur(0); bottom: 10px;
        }
      }
    }
    .modu-2-body {
      position: absolute;
      left: 0;
      top: 410px;
      height: 334px;
      padding: 0;
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: space-between;
      li {
        position: relative;
        width: 29%;
        height: 334px;
        background-color: #fff;
        border-radius: 4px 4px 0 0;
        box-sizing: border-box;
        border-bottom: 4px solid #14948a;
        padding: 30px;
        box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
        p {
          color: rgba(128, 134, 149, 1);
          font-size: 16px;
          line-height: 30px;
        }
        img {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 106px;
          height: 106px;
        }
      }
    }
  }
}
</style>
