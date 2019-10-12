<template>
  <div :class="['proPacsMo-8', mob ? 'proPacsMo-8-mob' : '']">
    <div class="pacs-mo8-hd">
      <img src="../../../common/images/titles/prd-title-大善PACS-ylt.png" />
    </div>
    <div class="pacs-mo8-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>1) 提供专业、全面的医学影像解决方案</h4>
            <p>
              集存储、传输及调阅等功能为一体，向外围拓展，向云端延伸，解决存储问题、实现数据共享。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>2) 增加医院效益</h4>
            <p>
              节省成本:可存储上十年云存储，减少医院电子病历的维护成本;为无胶片化铺路，节省大量耗材采购成本。
              <br />
              <br />
              助力医院业务扩展完成医院的“云PACS"建设，移动阅片，实施远程诊疗，实现在线国内国际交流，提升影响力。
              <br />
              <br />
              责任担当:响应国家关于分级诊疗建设，实现数据的互联互通;可应用医联体的交流、医技培训，优质医疗下沉，资源整合。
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
            <h4>3) 造福患者</h4>
            <p>
              节省费用:百姓没多花一分钱，在基层医院享受大医院的医疗及专家资源;节省检查费用，原始影像数据全。
              <br />
              <br />
              信息惠民:信息多跑路，百姓少跑腿，不用带的胶片到处跑;影像报告随身带，医患交流更方便;云保存，更安全，更长久。
              <br />
              <br />
              影像健康管理:既往病例汇集成个人健康档案，通过建立健康档案管理平台，医生患者更方便、个人健康数据更集中为患者提供全面的健康档案管理服务，从而降低就医成本，改善医疗服务。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>4) 增加社会效益</h4>
            <p>
              实现标准规范:平台数据更标准、更规范、应用范围广;信息互联互通、方便医院患者使用。
              <br />
              <br />
              利于统计分析:区域数据完整，为政府制定医疗政策提供依据;实时了解区域内医疗、诊疗状况，提供重大病情疫情预警。
              <br />
              <br />
              结合大数据:为人工智能诊断提供数据基础，为行业研发提供速率支持；为互联网医院等新技术平台提供技术支持。
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
            <h4>5) 助力分级诊疗、远程医疗落地</h4>
            <p>
              构建区域内部的医学影像信息交换平台，实现区域内医院的医学影像资源的共享与整合。
              <br />
              <br />
              提供区域内专家会诊功能，优化区域内医疗资源，真正实现“大病不出县，小病不出乡”,缓解医患之间的关系。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo8",
  props: ["mob"],
  data() {
    return {
      btnHoverNow: 1
    };
  }
};
</script>

<style scoped lang="stylus">
.proPacsMo-8 {
    background:rgba(255,255,255,1);
    padding: 80px 0;
    .pacs-mo8-hd {
        width: 377px;
        margin: 0 auto 20px;
        img {

            width: 100%;

        }
    }
    .pacs-mo8-bd {
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
}
// =========== 移动端样式 =========
.proPacsMo-8-mob {
  .pacs-mo8-hd {
    width: 50%;
  }
  .pacs-mo8-bd {
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
