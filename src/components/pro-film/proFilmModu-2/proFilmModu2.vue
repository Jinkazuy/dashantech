<template>
  <div :class="['pro-film-modu-2', 'w100', mob ? 'pro-film-modu-2-mob' : '']">
    <div class="pro-film-modu-2-tit">
      <div class="tit-img-box">
        <img src="../../../common/images/titles/prd-title-film-1.png" />
      </div>
      <p>
        传统感光胶片、纸质报告等多年来作为影像存储的介质功不可没，<br>但经过时代的变迁诸多弊端和实际问题亟待解决，传统胶片的变革已然成为时代需求。
      </p>
    </div>
    <div class="pro-film-modu-2-bd">
      <div class="illus-box container">
        <img src="../../../common/images/pro-film/mo-2.png" />
      </div>
      <ul class="db-text container">
        <li v-for="(itm, idx) in dbTextData" :key="idx">
          <p v-html="itm.p"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proFilmModu2",
  props: ["mob"],
  data() {
    return {
      dbTextData: [
        {
          p:
            " 大善电子胶片是一款基于混合云，以二维码扫描为主要入口，为医院、医生、患者提供电子胶片的应用服务。"
        },
        {
          p:
            "大善电子胶片可接入医院PACS和RIS系统，将DICOM影像资料和检查报告存储在云端（内网私有云或外网公有云都可），医生、患者可随时随地移动阅片。"
        },
        {
          p:
            "患者检查完成后无需等候取片，可通过手机、PAD或电脑查阅自己的影像资料，还可通过二维码转发给医生进行二次诊断。"
        },
        {
          p:
            "无压缩高清DICOM源文件，数百张影像秒级下载，快速调阅。还可进行窗宽窗位调整、缩放平移、测量等操作。"
        },
        {
          p:
            "无需医院硬件设备投资，无需更换PACS，无需统一PACS品牌，即可从传统胶片平滑切换到电子胶片。"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.pro-film-modu-2 {
    .pro-film-modu-2-tit {
        padding: 80px 0 250px 0;
        background-color: rgba(240,245,255,1);
        .tit-img-box {
            height: 84px;
            margin: 0 auto;
            img {
                display: block;
                height: 100%;
                margin: 0 auto;
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
    .pro-film-modu-2-bd {
        background-color: rgba(40,50,122,1);
        .container {
            padding: 0;
        }
        .illus-box {
            img {
                width: 100%;
                margin: -18% auto 0;
            }
        }
        .db-text {
            color: #fff;
            width: 100%;
            @media (max-width: 1366px) {
                width: 86% !important;
            }
            padding: 40px 0 80px;
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
.pro-film-modu-2-mob {
    .pro-film-modu-2-tit {
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
    .pro-film-modu-2-bd {
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
