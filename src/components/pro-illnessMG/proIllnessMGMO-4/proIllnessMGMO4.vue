<template>
  <div
    :class="[
      'pro-ill-MG-modu-4',
      'w100',
      'clearfix',
      mob ? 'pro-ill-MG-modu-4-mob' : ''
    ]"
  >
    <div class="pro-ill-MG-modu-4-hd">
      <img src="../../../common/images/titles/prd-title-IllMG-3.png" />
    </div>
    <div class="pro-ill-MG-modu-4-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>人工智能AI</h4>
            <p>
              可模拟医护人员声音，减轻医务人员繁重的工作量，实现医疗资源的合理分配。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>趣味化</h4>
            <p>
              用积分制、趣味化等手段促进患者提高自我管理的积极性，打破慢病管理患者最大的弊端。
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
            <h4>物联网</h4>
            <p>
              移动医疗终端设备，实现院外患者健康数据及生活方式数据的自动获取，且数据实时反馈医院，异常双向提醒，医生、患者无距离进行医疗问诊。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>无处不在的诊室</h4>
            <p>
              采用医疗+互联网模式，可实现移动办公的门诊，一流医护专家、负责的照护团队和病人专属健康责任人，最终可做到专业精准的慢病评估，医护患全程参与决策。
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
  name: "proIllnessMGMO4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-ill-MG-modu-4-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
}
.pro-ill-MG-modu-4-bd {
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
.pro-ill-MG-modu-4-mob {
    .pro-ill-MG-modu-4-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
    }
    .pro-ill-MG-modu-4-bd {
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
