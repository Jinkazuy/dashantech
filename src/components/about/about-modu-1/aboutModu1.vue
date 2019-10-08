<template>
  <!--banner部分-->
  <div class="about-modu-1 w100 posi-re">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.3"
      :particlesNumber="120"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="about-modu-logo posi-ab">
      <div class="logo-wrapper w100 h100">
        <logoMg></logoMg>
      </div>
    </div>
    <div class="about-modu-text w100 posi-ab">
      <p class="w100">
        北京大善青松科技有限公司（简称“大善科技”），
        <br />
        立足北京中关村高新技术资源优势，深入医疗大健康产业。
      </p>
    </div>
    <div class="about-modu-info container posi-ab">
      <div class="photo posi-ab">
        <img class="w100 h100" src="../../../../public/images/poto-1.jpg" />
      </div>
      <p class="text posi-ab">
        大善科技是国内技术领先的医疗领域信息化平台系统产品供应商和相关方案提供商，拥有一支熟悉医疗行业专业背景和经验的团队，报告资深项目经理、研发总监、数据分析博士等。
        <br />
        <br />
        团队核心成员来自华海、东软、科达/锐帽、Agfa爱克发、美国通用电气GE、3M、微软等多家领军IT技术公司，拥有深厚的研发功底。以产品研发能力和专业服务能力作为公司的核心竞争力，并具有强大的产品实施，服务咨询等大型项目管理与实施经验。
        <br />
        <br />
        在企业级ERP、医疗健康大数据、零售大数据、政府服务平台等大型项目均具备成功开发经验，尤真对医疗信息技术和大健康领域有着深刻而清晰的认识与愿景。
      </p>
      <div class="autograph posi-ab">
        <h4>郭志群</h4>
        <span>CEO & 联合创始人</span>
      </div>
    </div>
  </div>
</template>

<script>
// 引入logo动效
import logoMg from "../../layouts/logoMg";

export default {
  name: "modu1",
  components: {
    logoMg
  }
};
</script>

<style scoped lang="stylus">
.about-modu-1 {
  height: 544px;
  background-color: #ccc;
  // 这个id是particles插件默认的id值
  #particles-js {
    height: 100%;
    background-color: #14948a;
  }
  .about-modu-logo {
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 580px;
    height: 160px;
    border-radius: 80px;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255,.6);
    animation: logofl 2.6s ease 0s infinite alternate running;
    .logo-wrapper {
      border-radius: 80px;
      overflow: hidden;
    }
  }
  .about-modu-logo:hover {
    animation: logohover 2.6s ease 0s infinite alternate running;
  }
  // logo背景光动画(默认)
  @keyframes logofl {
    from {
      box-shadow: 0 0 20px 0 rgba(255, 255, 255,.6);
      opacity: 1;
    }
    to {
      box-shadow: 0 0 0 0 rgba(255, 255, 255,.1);
      opacity: .4;
    }
  }
  // logo背景光动画(hover)
  @keyframes logohover {
    from {
      box-shadow: 0 0 20px 0 rgba(255, 255, 255,.6);
    }
    to {
      box-shadow: 0 0 0 0 rgba(255, 255, 255,.1);
    }
  }
  .about-modu-text {
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    p {
      margin: 0;
      text-align: center;
      font-size: 24px;
      color: #fff;
      line-height: 40px;
      font-weight: 700;
    }
  }
  .about-modu-info {
    top: 380px;
    left: 50%;
    @media (max-width: 1366px) {
      width: 90% !important;
    }
    transform: translateX(-50%);
    height: 290px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
    .photo {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 372px;
      height: 334px;
      padding: 6px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 4px;
      box-shadow:0 0 13px 0 rgba(141,141,141,0.5);
    }
    p {
      left: 392px;
      top: 24px;
      right: 20px;
      color: rgba(23, 35, 61, 1);
      font-size: 14px;
      line-height: 22px;
    }
    .autograph {
      right: 24px;
      bottom: 24px;
      color: #14948a;
      h4 {
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 700;
      }
      span {}
    }
  }
}
</style>
