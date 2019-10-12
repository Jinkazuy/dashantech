<template>
  <div :class="['proPacsMo-6', mob ? 'proPacsMo-6-mob' : '']">
    <div class="pacs-mo6-hd">
      <div class="pacs-mo6-hd-tit">
        <img src="../../../common/images/titles/prd-title-pacs-wt.png" />
      </div>
      <p>
        满足院内临床科室与医技科室灵活调图像与报告
        <br v-if="!mob" />
        包含登记工作站、技师工作站、诊断工作站、临床工站
        <br v-if="!mob" />
        支持与院内HIS/EMR胶片自助打印系统快速融合
      </p>
    </div>
    <div class="pacs-mo6-bd">
      <div class="container">
        <img src="../../../common/images/pro-pacs/pacs-illus-4.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo6",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.proPacsMo-6 {
    padding: 80px 0 0;
    background: rgba(23,79,196,1);
    .pacs-mo6-hd {
        .pacs-mo6-hd-tit{
            width: 400px;
            margin: 0 auto 20px;
            img {
                width: 100%;
            }
        }
        p {
            color: #fff;
            text-align: center;
            font-size: 16px;
            line-height: 32px;
            margin: 0 0 60px 0;
        }
    }
    .pacs-mo6-bd {
        background:rgba(240,245,255,1);
        .container {
            justify-content: center;
            padding: 0 0 100px 0;
            margin: 460px auto 0;
            img {
                margin-top: -400px;
                width: 80%;
            }
        }
    }
}
// ============== 移动端样式 ===================
.proPacsMo-6-mob {
  .pacs-mo6-hd {
    .pacs-mo6-hd-tit {
      width: 50%;
      margin-bottom: 40px;
    }
    p {
      padding: 0 20px;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .pacs-mo6-bd {
    .container {
      margin: 180px auto 0;
      img {
        width: 100%;
        height: 100%;
        margin: -140px 0 0;
      }
    }
  }
}
</style>
