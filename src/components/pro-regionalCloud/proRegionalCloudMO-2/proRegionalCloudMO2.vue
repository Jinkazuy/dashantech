<template>
  <div
    :class="[
      'pro-regionalCloud-mo2',
      'w100',
      'clearfix',
      mob ? 'pro-regionalCloud-mo2-mob' : ''
    ]"
  >
    <div data-v-0e4c0d39="" class="bgimg"></div>
    <ul class="card-list clearfix container">
      <li>
        <h4><span>区域医疗影像与诊断云平台建设思路</span></h4>
        <p class="card-list-item-tips">
          远程影像 / 远程病理 / 远程会诊 / 远程教学 / 分级诊疗
        </p>
        <p class="card-list-item-text">
          平台采用“1+1+N”模式(一个平台一张网，影像阅片诊断集中存储)，即依托专业机房
          建立1个市/县级“区域医疗影像与诊断云平台”，将现有具备医学影像服务能力的医疗机构、
          区域医学影像阅片诊断中心及基层医院联合起来，在区域内或跨区域实现患者影像信息调阅、
          诊断、书写或审核报告。平台具有远程影像、远程心电、远程会诊、远程教学、分级诊疗等功
          能。
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "proRegionalCloudMO2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regionalCloud-mo2 {
    background-color: #100a30;
    position: relative;
    .bgimg{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url('../../../common/images/pro-pacs/star.jpg');
        background-position: center top;
        background-repeat: no-repeat;
        background-size: 100% auto;
        opacity: .7;
        z-index: 1;
    }
    .card-list {
        color: #fff;
        margin: 60 0 80px;
        padding: 60px 58px;
        display: block;
        z-index: 2;
        li {
            width: 100%;
            margin: 0 0 1% 0;
            height: auto;
            // background:linear-gradient(270deg,rgba(50,54,123,1) 0%,rgba(28,20,69,1) 100%);
            box-shadow:0 5px 4px 0 rgba(0,0,0,0.29);
            border-radius:4px;
            background-image: url("../../../common/images/pro-pacs/banner-3-ill.png");
            background-repeat: no-repeat;
            background-position: right bottom;
            background-color: rgba(16,10,48,.7);
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
            .card-list-item-tips {
                font-size: 16px;
                font-weight: 900;
                margin: 10px 0;
            }
            .card-list-item-text{
                font-size: 16px;
                line-height: 28px;
                width: 58% !important;
                padding-bottom: 80px;
            }
        }
    }
}

// ===== 移动端样式 =============
.pro-regionalCloud-mo2-mob {
    .card-list {
        padding: 60px 20px;
        li {
            padding: 20px 20px;
            p.card-list-item-text {
                width: 100% !important;
                margin: 0;
                padding: 0 0 20px;
            }
        }
    }
}
</style>
