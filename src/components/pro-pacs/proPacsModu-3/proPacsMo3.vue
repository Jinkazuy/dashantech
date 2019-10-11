<template>
  <div :class="['proPacsMo-3', 'w100', mob ? 'proPacsMo-3-mob' : '']">
    <div class="pacs-mo3-tit">
      <div class="tit-img-box">
        <img src="../../../common/images/titles/prd-title-pacs.png" />
      </div>
      <p>
        从影像存储到影像智能，实现备份扩容、移动阅片、影像三维重建、区域影像恭喜那个和集中阅片服务
        <br v-if="!mob" />
        主要建设内容如下所示
      </p>
    </div>
    <div class="pacs-mo3-bd">
      <div class="illus-box container">
        <img src="../../../common/images/pro-pacs/pacs-illus.png" />
      </div>
      <ul class="db-text container">
        <li>
          <h4>医学影像云平台</h4>
          <p>
            影像云存储、临床影像应用(移动阅片、远程异步阅片、远程同步阅片、网络教学等应用、安全保障)。
          </p>
        </li>
        <li>
          <h4>AI应用</h4>
          <p>
            医学影像智能辅助诊断、智能管理，提供住那页的大数据分析和前沿的跨学科科研及转化应用。
          </p>
        </li>
        <li>
          <h4>全院级PACS</h4>
          <p>
            放射工作站、超声工作站、<br />内窥镜工作站、病理工作站、<br />
            临床工作站、归档与储存系统。
          </p>
        </li>
        <li>
          <h4>云胶片(电子胶片)</h4>
          <p>电子胶片归档<br />点击胶片查阅<br />二维码技术</p>
        </li>
        <li>
          <h4>电子健康档案</h4>
          <p>电子档案采集模块<br />电子档案查阅模块</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo3",
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
.proPacsMo-3 {
    .pacs-mo3-tit {
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
    .pacs-mo3-bd {
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
              width: 86% !important;
            }
            padding: 0 0 80px;
            display: flex;
            justify-content: space-around;
            li {
                width: 17%;
                margin-right: 3.7%;
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
// ============= 移动端样式 =============
.proPacsMo-3-mob {
  .pacs-mo3-tit {
    padding: 40px 0 90px;
    .tit-img-box{
      width: 149px;
    }
    p {
      padding: 0 30px;
      font-size: 14px;
      line-height: 26px;
    }
  }
  .pacs-mo3-bd {
    .illus-box {
      padding: 0;
      img {
        width: 90% !important;
        height: 100%;
      }
    }
    .db-text {
      display: block;
      width: 100% !important;
      padding: 0 20px;
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
