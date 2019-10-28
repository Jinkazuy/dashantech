<template>
  <div
    :class="[
      'pro-wiseCare-mo2',
      'w100',
      'clearfix',
      mob ? 'pro-wiseCare-mo2-mob' : ''
    ]"
  >
    <div data-v-0e4c0d39="" class="bgimg"></div>
    <ul class="card-list clearfix container">
      <li>
        <h4><span>让护理因它而改变</span></h4>
        <p class="card-list-item-tips">基于结局(Outcome)的优质护理</p>
        <p class="card-list-item-text">
          随着云计算、大数据、互联网及影像处理技术的不断进步，困扰医院的海量影像数据存储大、共享难、利用差、成本高的问题得到缓解，推动医学影像向一体化、区域化、智能化的方向发展。
        </p>
      </li>
      <li>
        <h4><span>提供一种创新的技术</span></h4>
        <p class="card-list-item-tips">技术实现有多种形式，我们选择人工智能</p>
        <p class="card-list-item-text">
          我们坚信技术创新是护理事业进步的必要手段。随着
          大数据及人工智能在医疗领域的广泛应用，智慧护理信息
          系统的诞生和应用已成必然。让人工智能赋能于优质护理， 大善科技基于 AI
          引擎打造的智慧护理平台和各类临床应用
          让技术与智慧医疗完美融合，让护士有更多时间陪伴在患
          者身边，让护理评估、诊断、计划、实施、评价从传统模
          式下分散而不全面、不详细、不规范的状况中即刻改变。
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "proWiseCareMO2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-wiseCare-mo2 {
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
.pro-wiseCare-mo2-mob {
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
