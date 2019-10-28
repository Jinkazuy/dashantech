<template>
  <div
    :class="[
      'pro-regionalCloud-mo9',
      'w100',
      'clearfix',
      mob ? 'pro-regionalCloud-mo9-mob' : ''
    ]"
  >
    <div class="pro-regionalCloud-mo9-hd">
      <img src="../../../common/images/titles/prd-title-QYYYX-framework.png" />
      <!--<p>深刻理解与洞察重症护理的需求</p>-->
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-regionalCloud-mo9-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-regionalCloud/regionalCloud9.png"
      />
    </div>
    <ul class="pro-regionalCloud-mo9-ft container">
      <li>
        <h4>面向基层医院远程(放射)影像诊断</h4>
        <p>
          “区域阅片中心”(含“远程影像诊断中心”职能)可通过云平台，面向区域内有影像检
          查设备(如DR/CT等)但没有合资质影像诊断医师的基层合作医院提供远程影像诊断外包服务，
          具体表现为基层医院无需配备本院影像医师，由放射科技师为患者拍片后，通过平台自动将影
          像传给中心，由中心的专家阅片给出诊断意见并回传到基层医院。基层医院无需高薪聘请有资
          质的影像诊断医师，不会造成自聘影像医生因检查量有限导致人力资源浪费的尴尬局面，不用
          担心基层是否留得住影像诊断医师人才，只需将影像诊断服务交由中心即可。
        </p>
      </li>
      <li>
        <h4>面向基层医院远程影像报告审核</h4>
        <p>
          “区域阅片中心”(含“远程影像诊断中心”职能)可通过平台，面向区域内有影像检查设
          备(如DR/CT等)但现有影像诊断医师资质不高的基层合作医院提供远程影像报告审核服务，
          具体表现为基层医院影像医生撰写检查报告后，通过平台自动将影像传给中心，由中心安排副
          高以上的专家阅片并审核报告后回传到基层医院，有效提升基层医院的病人安全，极大降低基
          层漏诊率和误诊率。
        </p>
      </li>
      <li>
        <h4>面向上级医院远程影像会诊</h4>
        <p>
          当“区域阅片中心”在业务开展过程中遇到疑难罕见的影像检查病例而需要和省级医院的
          医生进行远程影像会诊时，可以通过平台将疑难影像病例DICOM格式的原始图像发送给参与会
          诊的影像专家，让远程专家可在会诊中可以判读DICOM格式的图像。
        </p>
      </li>
      <li>
        <h4>区域卫生主管部门进行业务监管</h4>
        <p>
          我们可向区域卫生主管部门提供“区域分级诊疗影像服务实时监控及数据管理平台”功
          能，平台数据监管界面可以采取柱状图、饼图、曲线走势图等鲜活直观的形式将区域内各基层
          医院日常的检查量、远程诊断业务量、远程报告审核业务量、远诊/远审业务占比、分级转检
          量、分级转检到检率、转检业务占比等关键的业务运行统计数据展现出来，让主管部门能够更
          及时、更准确把握住全区医疗机构的医学影像服务医疗活动情况。让数据说话、帮助卫生主管
          实现科学决策、科学管理。
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "proRegionalCloudMO9",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regionalCloud-mo9 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(240, 245, 255, 1);
    .pro-regionalCloud-mo9-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
        p {
            font-size: 16px;
            font-weight: 700;
            color: rgba(23, 35, 61, 1);
            text-align: center;
        }
    }
    .color-bg-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 70%;
        background-color: rgba(40, 50, 122, 1);
    }
    .pro-regionalCloud-mo9-bd {
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .pro-regionalCloud-mo9-ft {
        position: relative;
        padding: 48px 120px 0;
        z-index: 9;
        display: block;
        li {
            margin-bottom: 60px;
            color: #fff;
            h4{
                margin: 0 0 12px;
                font-size: 20px;
                font-weight: 700;
            }
            p{
                margin: 0;
                font-size: 14px;
                line-height: 24px;
            }
        }
        li:last-of-type {
            margin: 0;
        }
    }
}


// ========== 移动端样式 =========
.pro-regionalCloud-mo9-mob {
    padding-bottom: 20px;
    .pro-regionalCloud-mo9-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
        }
    }
    .color-bg-mask {
        height: 30%;
    }
    .pro-regionalCloud-mo9-bd {
        padding: 0 20px;
    }
}
</style>
