<template>
  <div :class="['proFollowMo-2', 'w100', mob ? 'proFollowMo-2-mob' : '']">
    <div class="bgimg"></div>
    <div class="container clearfix">
      <div class="pro-follow-mo2-tit clearfix">
        <h3>大善随访系统解决方案</h3>
        <p>
          随访系统将互联网、物联网技术与患者院内外医疗健康管理结合，以智能随访、智能宣教、智能提醒、健康监测、医护患沟通为患者管理主要手段，通过平台化的设计理念，为不同类型医疗机构，打造统随访平台，提供医院随访系统、专科随访系统、医院客户关系管理系统、慢病管理系统、妇幼随访系统等符合不同应用场景的解决方案。
        </p>
      </div>
      <div class="op-flow-illus-box">
        <img src="../../../common/images/pro-follow/pro2-mo2-illus.png" />
      </div>
      <ul class="desc-list clearfix">
        <li>
          <h4>院后随访</h4>
          <p>
            跨平台，多途径，随访表单个性化配置标准化的随访路径，实现同质化随访过程互联网+人工智能，自动化随访率达60%以上
          </p>
        </li>
        <li>
          <h4>满意度调查</h4>
          <p>
            跨平台，多途径，支持门诊、在院出院等多种调查场景提供多维度统计报表，量化医疗服务和质量调查比例、份数可自定义控制，调查结果真实准确
          </p>
        </li>
        <li>
          <h4>投诉表扬</h4>
          <p>
            支持电话等途径接受患者投诉和表扬标准化管理流程，可自动化指派处理部门并发送消息提醒
          </p>
        </li>
        <li>
          <h4>预约咨询</h4>
          <p>支持院前多渠道预约和咨询信息实时反馈，智能提醒</p>
        </li>
      </ul>
    </div>
    <div class="white-mask"></div>
  </div>
</template>

<script>
export default {
  name: "proFollowModu2",
  data() {
    return {
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    // 是否渲染移动端样式
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.proFollowMo-2 {
    position: relative;
    background-color: rgba(16,10,48,1);
    .white-mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40%;
      background-color: #fff;
      margin: -10px 0 0 0;
      z-index: 2;
    }
    .bgimg {
        width: 100%;
        height: 70%;
        position: absolute;
        left: 0;
        bottom: 0;
        background-image: url("../../../common/images/pro-pacs/star.jpg");
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: 100% auto;
        opacity: .08;
        z-index: 1;
    }
    .container {
        position: relative;
        padding: 0;
        display: block;
        z-index: 9;
        .pro-follow-mo2-tit {
            padding: 48px;
            h3, p {
                color: #fff;
            }
            h3{
                font-size: 40px;
                margin: 0 0 20px 0;
            }
            p{
                font-size: 16px;
                width: 80%;
                line-height: 28px;
                margin: 0;
            }
        }
        .op-flow-illus-box {
          margin-bottom: 28px;
          width: 100%;
          @media (max-width: 1366px) {
            width: 94%;
            margin: 0 auto 28px;
          }
          img {
            width: 100%;
          }
        }
        ul.desc-list {
          padding: 0 6%;
          margin-bottom: 100px;
          background-color: #fff;
          li {
            float: left;
            width: 20%;
            margin-right: 6.6%;
            h4 {
              font-weight: 700;
              font-size: 20px;
              color: rgba(23, 35, 61, 1);
            }
            p {
              font-size: 16px;
              color: rgba(128, 134, 149, 1);
              line-height: 32px;
            }
          }
          li:last-of-type {
            margin-right: 0;
          }
        }
    }
}
// =========== 移动端样式 ============
.proFollowMo-2-mob {
  .container {
    .pro-follow-mo2-tit {
      padding: 20px;
      h3 {
        font-size: 24px;
      }
      p {
        width: 100%;
      }
    }
    .op-flow-illus-box {
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul.desc-list {
      padding: 30px 16px;
      margin-bottom: 40px;
      li {
        float: none;
        width: 100%;
        margin: 0 0 20px;
        h4 {
          font-size: 16px;
          margin-bottom: 8px;
        }
        p {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
