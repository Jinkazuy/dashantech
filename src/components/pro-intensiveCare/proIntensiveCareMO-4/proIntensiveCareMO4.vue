<template>
  <div
    :class="[
      'pro-intensive-care-mo4',
      'w100',
      'clearfix',
      mob ? 'pro-intensive-care-mo4-mob' : ''
    ]"
  >
    <div class="pro-intensive-care-mo4-hd">
      <img
        src="../../../common/images/titles/prd-title-ZZHLXX-Competitiveness&Composition.png"
      />
    </div>
    <div class="pro-intensive-care-mo4-bd">
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proIntensiveCareMO4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-intensive-care-mo4-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
}
.pro-intensive-care-mo4-bd {
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
.pro-intensive-care-mo4-mob {
    .pro-intensive-care-mo4-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
    }
    .pro-intensive-care-mo4-bd {
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
