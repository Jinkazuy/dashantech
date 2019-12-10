<template>
  <div
    :class="[
      'pro-recover-mg-modu-6',
      'w100',
      'clearfix',
      mob ? 'pro-recover-mg-modu-6-mob' : ''
    ]"
  >
    <div class="pro-recover-mg-modu-6-hd">
      <img src="../../../common/images/titles/prd-title-recovery-5.png" />
    </div>
    <div class="pro-recover-mg-modu-6-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>特色一</h4>
            <p>
              基于《国际功能、残疾和健康分类》(ICF)应用场景设计
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>特色二</h4>
            <p>
              完全遵循《国家电子病历评级标准》
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
            <h4>特色三</h4>
            <p>
              全流程、闭环的康复过程管理
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>优势四</h4>
            <p>
              多样化评估方式支持，团体治疗、独立治疗一站式解决方案
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
            <h4>特色五</h4>
            <p>
              自由灵活的方案设定，支持各种治疗方案自由组合
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>特色六</h4>
            <p>
              首创移动效果评估，实时准确的记录康复疗效情况
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
            <h4>特色七</h4>
            <p>
              一体化的评估、计费解决方案
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proRecoveryMGMO6",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-recover-mg-modu-6-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
}
.pro-recover-mg-modu-6-bd {
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
.pro-recover-mg-modu-6-mob {
    .pro-recover-mg-modu-6-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
    }
    .pro-recover-mg-modu-6-bd {
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
