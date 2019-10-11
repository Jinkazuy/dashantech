<template>
  <div :class="['proPacsMo-4', 'w100', mob ? 'proPacsMo-4-mob' : '']">
    <div class="pacs-mo4-tit">
      <div class="tit-img-box">
        <img src="../../../common/images/titles/prd-title-pacs-child.png" />
      </div>
      <p>
        从影像存储到影像智能，实现备份扩容、移动阅片、影像三维重建、区域影像共享和集中阅片服务。
        <br />
        <br v-if="mob" />
        主要建设内容如下所示：
        <br />
        满足院内临床科室与医技科室灵活调图像与报告
        <br />
        包含登记工作站、技师工作站、诊断工作站、临床工站
        <br />
        <br v-if="mob" />
        支持与院内HIS/EMR胶片自助打印系统快速融合
      </p>
    </div>
    <div class="pacs-mo4-bd">
      <div class="illus-box container">
        <img src="../../../common/images/pro-pacs/pacs-illus-2.png" />
      </div>
      <ul class="db-text container">
        <li>
          <h4>院内PACS系统</h4>
          <p>
            包括预约登记子系统、影像诊断子系统、报告编辑子系统、DICOM服务子系统、统计分析子系统、系统
            管理子系统等多个子系统;
          </p>
        </li>
        <li>
          <h4>云端PACS系统</h4>
          <p>
            基于互联网平台搭建的专业放射影像协同办公系统，可实现放射远程协同办公功能;
          </p>
        </li>
        <li>
          <h4>可免费自行搭建医联体会诊平台</h4>
          <p>
            独创的远程会诊平台可自行构建医联体协诊系统，平台搭建的开放协诊功能也可让会诊有更多的选择；
          </p>
        </li>
        <li>
          <h4>云胶片(电子胶片)</h4>
          <p>
            系统支持根据需要可为患者移动端推送电子病案服务，也可提供光盘刻录功能。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo4",
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
.proPacsMo-4 {
    .pacs-mo4-tit {
        padding: 80px 0 250px 0;
        background-color: rgba(240,245,255,1);
        .tit-img-box {
            width:298px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        p {
            color: rgba(23, 35, 61, 1);
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            margin: 16px 0 0 0;
        }
    }
    .pacs-mo4-bd {
        background-color: rgba(23,79,196,1);
        .container {
            padding: 0;
        }
        .illus-box {
            img {
                width: 70%;
                margin: -18% auto 0;
            }
        }
        .db-text {
            color: #fff;
            width: 100%;
            @media (max-width: 1366px) {
              width: 80% !important;
            }
            padding: 0 0 80px;
            display: flex;
            justify-content: space-around;
            li {
                width: 22%;
                margin-right: 4%;
                h4 {
                    font-size: 20px;
                    font-weight: 700;
                }
                p {
                    font-size: 14px;
                    line-height: 24px;
                }
            }
            li:last-of-type {
                margin: 0;
            }
        }
    }
}
//  =============== 移动端样式 ================
.proPacsMo-4-mob {
  .pacs-mo4-tit {
    padding: 40px 0 120px;
    .tit-img-box {
      width: 149px;
    }
    p {
      margin-top: 30px;
      font-size: 14px;
      line-height: 24px;
      padding: 0 10px;
    }
  }
  .pacs-mo4-bd {
    .illus-box {
      img {
        width: 94%;
        height: 100%;
      }
    }
    .db-text {
      display: block;
      width: 100% !important;
      padding: 40px 20px 0;
      li {
        width: 100% !important;
        margin: 0 0 40px !important;
        h4 {
          font-size: 16px;
        }
        p {
          opacity: .6;
        }
      }
    }
  }
}
</style>
