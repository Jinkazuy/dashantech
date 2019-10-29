<template>
  <div
    :class="[
      'pro-YltInfo-mo12',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo12-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo12-hd">
      <img src="../../../common/images/titles/prd-title-YLT-CT.png" />
      <p>
        依托大善健康医疗大数据平台和技术，支撑政府数据资产管理，促进数据共
        享开放、资产流通、创新大数据应用，打造医联体产业生态。
      </p>
    </div>
    <div class="pro-YltInfo-mo12-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>智能数据治理融合</h4>
            <p>
              AI数据治理<br />智能元数据发现<br />智能数据 打标签<br />智能化业务
              实体发现<br />智能知识 图谱构建
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>高效全量数据汇聚</h4>
            <p>
              单集群消息吞吐量>亿条/秒<br />单集群支持上亿物联网设备<br />消息传输毫秒级迟延<br />支持多元异构数据全量采集构建
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
            <h4>数据标准化透明访问</h4>
            <p>
              超媒体数据统一访问<br />支持SQL工业标准<br />智能数据解析<br />支持跨区域弹性架构
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>超大规模数据管理</h4>
            <p>
              支持EB级数据管理<br />多源异构数据管理<br />数据资产家底可视<br />支持数据分区架构<br />智能化运维管控
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
            <h4>智能数据分析利用</h4>
            <p>
              全息动态多维分析<br />融合深度学习与认知计算<br />支持要素超级档案<br />支持关联图谱分析<br />支持时空分析<br />
              可视化智慧呈现
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>数据安全隐私保护</h4>
            <p>
              支数据风险可视<br />多因素风险评分<br />数据保护的编排模拟<br />智能化敏感数据策略<br />安全基础设施集成
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
  name: "proYltInfoModu12",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo12-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
    p {
        padding: 0 30%;
        font-size: 16px;
        color: rgba(23, 35, 61, 1);
        text-align: center;
        line-height: 22px;
        font-weight: 700;
    }
}
.pro-YltInfo-mo12-bd {
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
                    color: rgba(128, 134, 149, 1);
                }
            }
        }
    }

}

// =========== 移动端样式 =========
.pro-YltInfo-mo12-mob {
    .pro-YltInfo-mo12-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
        p {
            font-size: 12px !important;
            padding: 0 20px !important;
        }
    }
    .pro-YltInfo-mo12-bd {
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
