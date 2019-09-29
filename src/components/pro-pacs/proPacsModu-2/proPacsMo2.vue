<template>
  <div class="proPacsMo-2 w100">
    <div class="container">
      <div class="pro-pacs-mo2-tit clearfix">
        <h3>大善影像云</h3>
        <p>
          大善影像云是采用先进的影像信息采集、处理技术，技术架构基于互联网的互联互通特性进行设计，不仅能满足本院图像采集、处理、阅读、传输、存储和管理，实现影像资源院內共享的需求，还架构一套建置在云服务基础上的系统，院内PACS与云端PACS互为镜像。
        </p>
        <p>
          这种架构结合大善云工作站，为医院客户提供远程会诊、直达专家、分级诊疗、集中预约等解决方案，医院无需再投入便可获得一整套数字化远程医疗解決方案。PACS影像云是整个系统数据存储和数据交换的中心，采用分布式和负载均衡的设计理念，拥有可靠的安全性与稳定性。
        </p>
      </div>
      <ul class="card-list">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo2"
};
</script>

<style scoped lang="stylus">
.proPacsMo-2 {
    position: relative;
    height: 500px;
    background-color: rgba(16,10,48,1);
    .container {
      display: block;
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
              margin: 0 0 60px 0;
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
      }
    }
}
</style>
