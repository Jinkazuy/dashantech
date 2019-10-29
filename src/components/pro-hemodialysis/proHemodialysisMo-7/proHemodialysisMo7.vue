<template>
  <div
    :class="[
      'pro-hemodialysis-mo7',
      'w100',
      'clearfix',
      mob ? 'pro-hemodialysis-mo7-mob' : ''
    ]"
  >
    <div class="hemodialysis-mo7-tit">
      <img src="../../../common/images/titles/prd-title-XYTX-SI.png" />
      <p>
        为减少系统数据的二次录入和准确性，进一步保证护理系统的质量，系统需要和医院的其
        他临床系统进行无缝集成。<br /><br v-if="mob" />与医院现有 IT 系统整合 :
        医院现有信息系统如 HIS、检验、检查、手麻等系统的集成。<br /><br
          v-if="mob"
        />实现
        了从剪不断理还乱的传统点和点之间的网状集成方式转变成了更为合理先进的松耦合集成平台。
        <br /><br v-if="mob" />
        支持 HL7, SOAP,XML,Webservice
        等接口方式，即插即用，轻松实现与各类信息系统 间无缝集成，减少集成风险。
      </p>
    </div>
    <div class="hemodialysis-mo7-bd">
      <ul class="container">
        <li>
          <h4>HIS</h4>
          <p>
            ※ 获取患者基本信息
            <br />
            ※ 获取医生、护士人员信息
          </p>
        </li>
        <li>
          <h4>LIS</h4>
          <p>※ 获取检验申请<br />※ 获取检验结果</p>
        </li>
        <li>
          <h4>RIS</h4>
          <p>※ 获取检查申请<br />※ 获取检查结果所见所得</p>
        </li>
        <li>
          <h4>手麻系统</h4>
          <p>
            ※ 获取手术信息
          </p>
        </li>
        <li>
          <h4>电子医嘱</h4>
          <p>
            ※ 获取患者医嘱信息
          </p>
        </li>
        <li>
          <h4>血透设备</h4>
          <p>
            ※ 获取血透机采集的相关数据
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proHemodialysisMo7",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-hemodialysis-mo7 {
    padding: 80px 0 0;
    background-color: rgba(240, 245, 255, 1);
    .hemodialysis-mo7-tit {
        margin: 0 0 32px;
        img {
            display: block;
            margin: 0 auto 32px;
            height: 84px;
        }
        p {
            font-size: 16px;
            text-align: center;
            color: rgba(23, 35, 61, 1);
            line-height: 32px;
            margin: 0;
        }
    }
    .hemodialysis-mo7-bd {
        background-color: rgba(23, 79, 196, 1);
        padding: 80px 0 0;
        ul {
            display: block;
            color: #fff;
            padding: 0 10%;
            li {
                width: 33.3333%;
                padding: 0 50px 80px 80px;
                float: left;
                h4 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 12px;
                }
                p {
                    font-size: 14px;
                    line-height: 24px;
                    margin: 0;
                }
            }
        }
    }
}


// ========== 移动端样式 ==========
.pro-hemodialysis-mo7-mob {
    padding: 40px 0 0;
    .hemodialysis-mo7-tit {
        img {
            height: 42px;
        }
        p {
          padding: 0 20px;
          font-size: 12px;
          line-height: 24px;
        }
    }
    .hemodialysis-mo7-bd {
        ul {
            padding: 0 20px;
            li {
                margin: 0 0 40px 0;
                padding: 0 0 0 25%;
                width: 100%;
            }
        }
    }
}
</style>
