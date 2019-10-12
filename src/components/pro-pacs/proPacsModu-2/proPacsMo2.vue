<template>
  <div :class="['proPacsMo-2', 'w100', mob ? 'proPacsMo-2-mob' : '']">
    <div class="bgimg"></div>
    <div class="container clearfix">
      <div class="pro-pacs-mo2-tit clearfix">
        <h3>大善影像云</h3>
        <p>
          大善影像云是采用先进的影像信息采集、处理技术，技术架构基于互联网的互联互通特性进行设计，不仅能满足本院图像采集、处理、阅读、传输、存储和管理，实现影像资源院內共享的需求，还架构一套建置在云服务基础上的系统，院内PACS与云端PACS互为镜像。
        </p>
        <p>
          这种架构结合大善云工作站，为医院客户提供远程会诊、直达专家、分级诊疗、集中预约等解决方案，医院无需再投入便可获得一整套数字化远程医疗解決方案。PACS影像云是整个系统数据存储和数据交换的中心，采用分布式和负载均衡的设计理念，拥有可靠的安全性与稳定性。
        </p>
      </div>
      <ul class="card-list clearfix">
        <li>
          <h4><span>云</span></h4>
          <p>
            随着云计算、大数据、互联网及影像处理技术的不断进步，困扰医院的海量影像数据存储大、共享难、利用差、成本高的问题得到缓解，推动医学影像向一体化、区域化、智能化的方向发展。
          </p>
        </li>
        <li>
          <h4><span>数据</span></h4>
          <p>
            影像云结合移动互联网、云计算、大数据、社交以及远程医疗服务等技术和理念，形成针对医疗影像业务的云平台。
          </p>
        </li>
        <li>
          <h4><span>价值</span></h4>
          <p>
            结合影像设备和大善科技的“产学研”的优势，可以为客户提供一站式的解决方案，为患者、医生、政府、社会创造价值，改变健康管理模式，提高生活品质。
          </p>
        </li>
        <li>
          <h4><span>服务</span></h4>
          <p>
            通过建设“健康医学影像云患民项目，可实现远程影像、远程诊断、远程会诊等服务，让群众在基层享有优质医疗服务;实现综合电子影像存储、影像检查移动诊断及检查结果互认共享，为患者提供连续可动态査阅的影像资料，减轻群众就医负担为全体居民提供优质、快捷、高效和全生命周期的健康服务。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.proPacsMo-2 {
    position: relative;
    background-color: rgba(16,10,48,1);
    .bgimg {
      width: 100%;
      height: 70%;
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: url("../../../common/images/pro-pacs/star.jpg");
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: 100% auto;
      opacity: .08;
      z-index: 1;
    }
    .container {
      position: relative;
      padding: 0;
      display: block;
      z-index: 9;
        .pro-pacs-mo2-tit {
          padding: 48px;
            h3, p {
                color: #fff;
            }
            h3{
              font-size: 40px;
              margin: 0 0 20px 0;
            }
            p{
              font-size: 16px;
              width: 48%;
              line-height: 28px;
              margin: 0;
            }
            p:first-of-type {
              float: left;
            }
            p:last-of-type {
              float: right;
            }
        }
      .card-list {
        color: #fff;
        margin: 0 0 60px;
        li {
          width: 48%;
          float: left;
          margin: 0 1% 1% 0;
          height: 322px;
          // background:linear-gradient(270deg,rgba(50,54,123,1) 0%,rgba(28,20,69,1) 100%);
          background-color: rgba(16,10,48,.6);
          box-shadow:0 5px 4px 0 rgba(0,0,0,0.29);
          border-radius:4px;
          background-image: url("../../../common/images/pro-pacs/banner-3-ill.png");
          background-repeat: no-repeat;
          background-position: right top;
          padding: 44px 0 0 44px;
          box-sizing: border-box;
          h4 {
            position: relative;
            font-size: 24px;
            display: inline-block;
            font-weight: 700;
            span {
              position: relative;
              margin-right: 10px;
              z-index: 10;
            }
          }
          h4:before {
            left: 0;
            bottom: 0;
            content: "";
            width: 100%;
            height: 10px;
            position: absolute;
            background-color: rgba(40, 66, 155, 1);
          }
          p {
            font-size: 16px;
            line-height: 28px;
            width: 240px;
          }
          p:last-of-type {
            width: 380px;
          }
        }
      }
    }
}
// =========== 移动端样式 ==============
.proPacsMo-2-mob {
  .container {
    .pro-pacs-mo2-tit {
      padding: 20px;
      h3 {
        font-size: 24px;
      }
      p {
        float: none !important;
        width: 100%;
      }
      p:first-of-type {
        margin-bottom: 20px;
      }
    }
    ul.card-list {
      padding: 0 20px;
      li {
        float: none;
        width: 100%;
        height: auto;
        padding: 20px;
        h4 {}
        p {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
