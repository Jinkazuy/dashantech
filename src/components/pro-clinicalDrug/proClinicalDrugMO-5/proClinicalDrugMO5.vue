<template>
  <div
    :class="[
      'pro-clinicalDrug-mo5',
      'w100',
      'clearfix',
      mob ? 'pro-clinicalDrug-mo5-mob' : ''
    ]"
  >
    <div class="pro-clinicalDrug-mo5-hd">
      <img src="../../../common/images/titles/prd-title-YWLC-VAL.png" />
    </div>
    <div class="pro-clinicalDrug-mo5-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>
              基于CDISK试验数据标准<br v-if="!mob" />自动导出数据到EDC系统
            </h4>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>
              保证试验数据和时间数据不可篡改，<br v-if="!mob" />
              数据可溯源，<br v-if="!mob" />提高数据管理的整体效率
            </h4>
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
            <h4>
              在多中心临床试验项目中<br
                v-if="!mob"
              />数据可以被及时透明准确的检查
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proClinicalDrugMO5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-clinicalDrug-mo5-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
}
.pro-clinicalDrug-mo5-bd {
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
                    line-height: 42px;
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
.pro-clinicalDrug-mo5-mob {
    .pro-clinicalDrug-mo5-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
    }
    .pro-clinicalDrug-mo5-bd {
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
