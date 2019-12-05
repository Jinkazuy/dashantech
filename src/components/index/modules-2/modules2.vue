<template>
  <div :class="['home-cont-modu-2', 'w100', mob ? 'home-cont-modu-2-mob' : '']">
    <div class="container w100 h100">
      <h3 class="modu-2-titles">
        <img
          class="w100 h100"
          src="../../../common/images/titles/home-title-aboutUs.png"
          alt="关于我们"
        />
      </h3>
      <div class="modu-2-headers w100">
        <p>
          北京大善青松科技有限公司（简称“大善科技”），<br
            v-if="!mob"
          />立足北京中关村高新技术资源优势，深入医疗大健康产业。
        </p>
        <div class="modu-2-headers-logo">
          <div class="logo-wrapper w100 h100">
            <logoMg></logoMg>
          </div>
        </div>
      </div>
      <ul class="modu-2-body w100">
        <li>
          <p>
            大善科技秉持至善慧美、强强联合、创新共赢的创业理念，公司定位为智慧医疗和医疗整体解决方案服务商。尤其是在远程医疗和影像医学信息化领域引领行业发展。
          </p>
          <img src="../../../common/images/index/modu-2/modu2-ch-1.svg" />
        </li>
        <li>
          <p>
            我们聚合了一群来自海内外有着丰富从业经验的精英人士，他们来自GE、西门子、飞利浦、微软等世界500强公司高管，他们既抱有家国情怀，也具有全球视野；亦或是国内医疗软件巨头东软、东华、华为等公司的职业经理人和资深专家，他们曾纵横捭阖、叱咤风云。
          </p>
          <img src="../../../common/images/index/modu-2/modu2-ch-2.svg" />
        </li>
        <li>
          <p>
            大善人志存高远、脚踏实地；满怀热情，激情澎湃，用一个又一个的高质高效的项目交付能力证明着雄厚的技术实力；在“客户墙”上贴着的一个又一个logo见证着我们成长历程，收获更多客户美誉！大善人不断自我挑战行业新高度，立志以科技的力量赋能中国医疗，智慧健康提升每位国人生命质量和幸福感！
          </p>
          <img src="../../../common/images/index/modu-2/modu2-ch-3.svg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入logo动效
import logoMg from "../../layouts/logoMg";

export default {
  name: "modules2",
  props: ["mob"],
  components: {
    logoMg
  }
};
</script>

<style scoped lang="stylus">
.home-cont-modu-2 {
  height: 824px;
  background-color: #fff;
  .container {
    position: relative;
    padding: 0;
    .modu-2-titles {
      position: absolute;
      left: 0;
      @media (max-width: 1336px) {
        left: 6%;
      }
      @media (max-width: 1366px) {
        left: 6%;
      }
      top: 80px;
      height: 84px;
      padding: 0;
      margin: 0;
      width: 138px;
    }
    .modu-2-headers {
      position: absolute;
      left: 0;
      top: 224px;
      p {
        position: absolute;
        left: 0;
        @media (max-width: 1336px) {
          left: 6%;
        }
        @media (max-width: 1366px) {
          left: 6%;
        }
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
        .logo-wrapper {
          border-radius: 40px;
          overflow: hidden;
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
      left: 50%;
      transform: translateX(-50%);
      top: 410px;
      height: 334px;
      padding: 0;
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
          transition: all .2s;
        }
        img {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 106px;
          height: 106px;
          opacity: .2;
          transition: all .4s;
        }
      }
      li:hover {
        p {
          color: #17233d;
        }
        img {
          opacity: 1;
        }
      }
    }
    @media (max-width: 1336px) {
      .modu-2-body {
        width:90%;
      }
    }
    @media (max-width: 1366px) {
      .modu-2-body {
        width:90%;
      }
    }
  }
}
// ================== 移动端样式 ====================
.home-cont-modu-2-mob {
  height: 850px;
  .container {
    .modu-2-titles {
      width: 69px;
      height: 42px;
    }
    .modu-2-headers {
      top: 140px;
      p {
        width: 86%;
        font-size: 14px;
        line-height: 24px;
      }
      .modu-2-headers-logo {
        top: -60px;
        right: 40px;
        width: 134px;
        height: 40px;
      }
    }
    ul.modu-2-body {
      top: 240px;
      display: block;
      li {
        padding: 0;
        width: 100%;
        height: 180px;
        margin-bottom: 20px;
        p {
          padding: 10px;
          font-size: 12px;
          line-height: 20px;
          margin: 0;
        }
      }
    }
  }
}
</style>
