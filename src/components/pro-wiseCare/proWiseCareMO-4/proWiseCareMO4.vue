<template>
  <div
    :class="[
      'pro-wiseCare-mo4',
      'w100',
      'clearfix',
      mob ? 'pro-wiseCare-mo4-mob' : ''
    ]"
  >
    <div class="wiseCare-mo4-hd">
      <img src="../../../common/images/titles/prd-title-ZHHL-ADA.png" />
      <p>
        护理大数据+精细化管理要求+人工智能<br />一切源于对护理内涵的深刻理解
      </p>
    </div>
    <div class="wiseCare-mo4-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>1）基于标准化语言的护理系统</h4>
            <p>
              科学地测量、评价护理效果和服务质量，提升护理服务水平、护理效率、护理质量和病人安全。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>2）强大的数据集成能力</h4>
            <p>
              强大的IOT采集，实现各类设备数据自动采集数据集成能力，提供HL7、API、Webservice、WCF等多种数据接口，实现医院数据的互联互通。
              真正做到流程优化，减少二次录入，提高工作效率和护理质量。
            </p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-2.png" />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-3.png" />
          </div>
          <div class="text-box">
            <h4>3）规范的护理流程，符合国际医疗评审标准</h4>
            <p>
              1.患者评估<br />2.护理照顾 计划制定<br />3.护理照顾 计划执行<br />3.患者再评估
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>4）实现护理精细化管理</h4>
            <p>
              强大的数据分析能力，为护理精细化管理提供依据，以数据进行管理，实时生成并进行数据统计分析。
            </p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-4.png" />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-5.png" />
          </div>
          <div class="text-box">
            <h4>5）基于大数据和AI的智能临床辅助决策支持</h4>
            <p>
              基于护理评估，系统自动推荐护理照护措施、护理高风险预警。 <br />•
              压疮、跌倒、插管、感染等高风险预警 <br />• 患者危重度预警 • ......
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>6）最大化满足护理临床科研的需求</h4>
            <p>
              基于护理大数据对护理疗效、护理质量、护理不良事件等进行学习，为真正的护理临床科研的转化提供支持。
              <br />1.护理措施研究 <br />2.护理指南研究
              <br />3.基于人工智能的护理临床决策支持 ......
            </p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-4.png" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proWiseCareMO4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.wiseCare-mo4-hd {
  margin: 80px 0 32px;
  img {
    display: block;
    margin: 0 auto 20px;
    height: 84px;
  }
  p {
    font-size: 16px;
    color: rgba(23, 35, 61, 1);
    text-align: center;
    line-height: 22px;
    font-weight: 700;
  }
}
.wiseCare-mo4-bd {
  ul {
    padding: 0;
    margin: 0;
    li.container {
      padding: 80px 0;
      justify-content: space-between;
      align-items: center;
      .illus-box {
        width: 30%;
        img {
          width: 100%;
        }
      }
      .text-box {
        width: 40%;
        h4 {
          font-size: 24px;
          color: #14948a;
          margin-bottom: 20px;
          font-weight: 700;
        }
        p {
          font-size: 16px;
          line-height: 26px;
          padding-left: 16px;
          color: rgba(128, 134, 149, 1);
        }
      }
    }
  }

}

// =========== 移动端样式 =========
.pro-wiseCare-mo4-mob {
  .wiseCare-mo4-hd {
    /*width: 50%;*/
    img {
      height: 42px;
    }
    p {
      font-size: 12px !important;
      padding: 0 !important;
    }
  }
  .wiseCare-mo4-bd {
    ul {
      li {
        padding: 40px 0 !important;
        .text-box {
          h4 {
            font-size : 16px !important;
            line-height: 30px;
          }
          p {
            font-size: 12px !important;
            padding: 0 !important;
          }
        }
      }
    }
  }
}
</style>
