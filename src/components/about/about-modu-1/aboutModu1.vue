<template>
  <!--banner部分-->
  <div
    :class="['about-modu-1', 'w100', 'posi-re', mob ? 'about-modu-1-mob' : '']"
  >
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
    <div class="about-modu-logo po-lf50-tr50 posi-ab">
      <div class="logo-wrapper w100 h100">
        <logoMg></logoMg>
      </div>
    </div>
    <div class="about-modu-text po-lf50-tr50 w100 posi-ab">
      <p class="w100">
        北京大善青松科技有限公司（简称“大善科技”），
        <br v-if="!mob" />
        立足北京中关村高新技术资源优势，深入医疗大健康产业。
      </p>
    </div>
    <div class="about-modu-info po-lf50-tr50 container posi-ab">
      <div class="photo po-tp50-tr50 posi-ab">
        <img class="w100 h100" src="../../../../public/images/poto-1.jpg" />
      </div>
      <p class="text posi-ab">
        大善科技秉持至善慧美、强强联合、创新共赢的创业理念，公司定位为智慧医疗和医疗整体解决方案服务商。尤其是在远程医疗和影像医学信息化领域引领行业发展。我们聚合了一群来自海内外有着丰富从业经验的精英人士，他们来自GE、西门子、飞利浦、微软等世界500强公司高管，他们既抱有家国情怀，也具有全球视野；亦或是国内医疗软件巨头东软、东华、华为等公司的职业经理人和资深专家，他们曾纵横捭阖、叱咤风云。
        大善人志存高远、脚踏实地；满怀热情，激情澎湃，用一个又一个的高质高效的项目交付能力证明着雄厚的技术实力；在“客户墙”上贴着的一个又一个logo见证着我们成长历程，收获更多客户美誉！
        大善人不断自我挑战行业新高度，立志以科技的力量赋能中国医疗，智慧健康提升每位国人生命质量和幸福感！
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
  props: ["mob"],
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
    @media (max-width: 1366px) {
      width: 90% !important;
    }
    height: 290px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
    .photo {
      left: 0;
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
      line-height: 28px;
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
// =============== 移动端样式 ==============
.about-modu-1-mob {
  height: auto;
  padding-bottom: 40px;
  background-color: #fff;
  position: relative;
  padding-top: 200px;
  #particles-js {
    position: absolute;
    left:0;
    top:0;
    height: 50%;
    width: 100%;
  }
  .about-modu-logo {
    width: 290px;
    height: 80px;
  }
  .about-modu-text {
    position: relative;
    top: 0;
    margin-bottom: 30px;
    p {
      font-size: 16px;
      line-height: 30px;
      padding: 0 40px;
    }
  }
  .about-modu-info {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 1px;
    transform: translateX(0);
    display: block;
    padding: 0;
    height: auto;
    .photo {
      position: relative;
      top: 0;
      transform: translateY(0);
      width: 100%;
    }
    p {
      position: relative;
      left: 0;
      top: 0;
      padding: 20px 20px 100px;
    }
  }
}
</style>
