<template>
  <div
    :class="[
      'pro-WardRound-modu-5',
      'w100',
      'clearfix',
      mob ? 'pro-WardRound-modu-5-mob' : ''
    ]"
  >
    <div class="pro-WardRound-modu-5-hd">
      <img src="../../../common/images/titles/prd-title-YLT-CT.png" />
    </div>
    <div class="pro-WardRound-modu-5-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>优势一</h4>
            <p>
              系统采用HTML5技术开发，多平台兼容，支持在Windows、Android、IOS等操作系统的智能移动终端或者平板电脑使用，并保持优异的向前及向后兼容
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>优势二</h4>
            <p>
              系统基于SOA架构设计、数据库层采用WCF的方式进行数据交互、确保系统稳定运行
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
            <h4>优势三</h4>
            <p>
              集成能力强，系统支持与“HIS”、“LIS”、“PACS”、“EMR”、“护理文书”等相关系统进行应用集成与数据交互
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>优势四</h4>
            <p>
              灵活的软件升级机制,新的版本通过网络自动升级
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
            <h4>优势五</h4>
            <p>
              业务层和数据层可放置在同一个或不同的服务器上,根据业务量的大小,业务层可采用多个服务器进行处理,系统扩展方便
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proWardRoundModu5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-WardRound-modu-5-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
}
.pro-WardRound-modu-5-bd {
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
.pro-WardRound-modu-5-mob {
    .pro-WardRound-modu-5-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
    }
    .pro-WardRound-modu-5-bd {
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
