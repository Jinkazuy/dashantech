<template>
  <div
    :class="[
      'pro-wiseCare-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-wiseCare-mo3-mob' : ''
    ]"
  >
    <div class="pro-wiseCare-mo3-tit-img-box">
      <img src="../../../common/images/titles/prd-title-ZHHL-Solution.png" />
    </div>
    <div class="pro-wiseCare-mo3-bd-box container">
      <ul class="hover-box clearfix">
        <li
          :class="{ 'on-hover': btnHoverNow === 1 }"
          @mouseenter="mouseHover1"
        >
          护理临床解决方案
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 2 }"
          @mouseenter="mouseHover2"
        >
          护理管理解决方案
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 3 }"
          @mouseenter="mouseHover3"
        >
          护理科研与展望
          <div class="tr"></div>
        </li>
      </ul>
      <div class="bd-cont-box">
        <div v-if="btnHoverNow === 1" class="bd-cont-box-item-1 clearfix">
          <ul class="text-group">
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>智慧护理电子病历</span>
              </h4>
              <ul class="clearfix">
                <li>• 护理记录 护理交接班</li>
                <li>• 基于护理结局的护理照护计划</li>
                <li>• 护理随访 移动护理</li>
                <li>• 护理评估体系</li>
              </ul>
            </li>
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>护理临床管理</span>
              </h4>
              <ul class="clearfix">
                <li>• 护理质控检查系统</li>
                <li>• 护理不良事件上报系统</li>
                <li>• 护理能级管理系统</li>
                <li>• 护理智能排班系统</li>
              </ul>
            </li>
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>护理大数据平台</span>
              </h4>
              <ul class="clearfix">
                <li>• HIS/RIS/LIS/医嘱/手麻 等数据接入</li>
                <li>• 各类监护设备数据接入</li>
              </ul>
            </li>
          </ul>
          <ul class="pic-group" v-if="!mob">
            <li>
              <div class="mask"></div>
            </li>
            <li>
              <div class="mask"></div>
            </li>
            <li>
              <div class="mask"></div>
            </li>
          </ul>
        </div>
        <div v-if="btnHoverNow === 2" class="bd-cont-box-item-2 clearfix">
          <ul class="text-group">
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>护理精细化管理</span>
              </h4>
              <ul class="clearfix">
                <li>• 工作量统计分析</li>
                <li>• 护理质量分析</li>
                <li>• 护理敏感性指标分析</li>
              </ul>
            </li>
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>基于AI的护理临床决策支持</span>
              </h4>
              <ul class="clearfix">
                <li>• 护理高风险预警</li>
                <li>• 自动推荐照护措施</li>
              </ul>
            </li>
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>提高质量为目的的护理个人绩效</span>
              </h4>
              <ul class="clearfix">
                <li>• 护理输入指标</li>
                <li>• 护理敏感指标</li>
                <li>• 护理结局指标</li>
                <li>• 护理照护措施时数</li>
              </ul>
            </li>
          </ul>
          <ul class="pic-group" v-if="!mob">
            <li>
              <div class="mask"></div>
            </li>
            <li>
              <div class="mask"></div>
            </li>
            <li>
              <div class="mask"></div>
            </li>
          </ul>
        </div>
        <div v-if="btnHoverNow === 3" class="bd-cont-box-item-3 clearfix">
          <ul class="text-group">
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>智慧护理电子病历</span>
              </h4>
              <ul class="clearfix">
                <li>• 护理记录 护理交接班</li>
                <li>• 基于护理结局的护理照护计划</li>
                <li>• 护理随访 移动护理</li>
                <li>• 护理评估体系</li>
              </ul>
            </li>
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>护理临床管理</span>
              </h4>
              <ul class="clearfix">
                <li>• 护理质控检查系统</li>
                <li>• 护理不良事件上报系统</li>
                <li>• 护理能级管理系统</li>
                <li>• 护理智能排班系统</li>
              </ul>
            </li>
            <li class="text-group-item">
              <h4>
                <i></i>
                <span>护理大数据平台</span>
              </h4>
              <ul class="clearfix">
                <li>• HIS/RIS/LIS/医嘱/手麻 等数据接入</li>
                <li>• 各类监护设备数据接入</li>
              </ul>
            </li>
          </ul>
          <ul class="pic-group" v-if="!mob">
            <li>
              <div class="mask"></div>
            </li>
            <li>
              <div class="mask"></div>
            </li>
            <li>
              <div class="mask"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proWiseCareMO3",
  props: ["mob"],
  data() {
    return {
      btnHoverNow: 1
    };
  },
  methods: {
    mouseHover1() {
      this.btnHoverNow = 1;
    },
    mouseHover2() {
      this.btnHoverNow = 2;
    },
    mouseHover3() {
      this.btnHoverNow = 3;
    }
  }
};
</script>

<style scoped lang="stylus">
.pro-wiseCare-mo3 {
  background-color: rgba(40, 50, 122, 1);
  .pro-wiseCare-mo3-tit-img-box {
    margin: 80px 0 132px;
    height: 84px;
    img {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }
  .pro-wiseCare-mo3-bd-box {
    display: block;
    padding: 0 58px;
    height: auto;
    .hover-box {
      padding: 0;
      display: flex;
      justify-content: center;
      margin: 0 auto 28px;
      li {
        position: relative;
        float: left;
        padding: 12px;
        border-radius: 4px;
        background-color: rgba(11, 52, 138, 1);
        color: #fff;
        margin-right: 24px;
        transition: all .4s;
        .tr {
          position: absolute;
          width: 100%;
          height: 10px;
          left: 0;
          bottom: -16px;
          overflow: hidden;
          opacity: 0;
          transition: all .4s;
        }
        .tr:after {
          position: absolute;
          left: 50%;
          top: 4px;
          transform: translateX(-50%) rotateZ(135deg);
          content: "";
          width: 16px;
          height: 16px;
          background-color: #fff;
        }
      }
      li.on-hover {
        background-color: rgba(32, 89, 208, 1);
        .tr {
          opacity: 1;
        }
      }
      li:last-of-type {
        margin-right: 0;
      }
    }
    .bd-cont-box {
      background-color: rgba(55, 67, 143, 1);
      padding: 84px;
      border-radius: 8px;
      .bd-cont-box-item-1,.bd-cont-box-item-2,.bd-cont-box-item-3 {
        position: relative;
        height: 100%;
        ul.text-group {
          width: 44%;
          float: left;
          color: #fff;
          margin: 0;
          li.text-group-item {
            margin-bottom: 52px;
            h4{
              font-size: 20px;
              font-weight: 700;
              line-height: 22px;
              margin: 0 0 24px;
              i {
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-right:8px;
                margin-top: 8px;
                border-radius: 50%;
                background-color: rgba(216, 216, 216, 1);
              }
              span {
                vertical-align: text-top;
              }
            }
            ul {
              padding: 0 0 0 28px;
              li {
                float: left;
                margin: 0 16px 12px 0;
              }
            }
          }
          li.text-group-item:last-of-type {
            margin-bottom: 0;
          }
        }
        ul.pic-group {
          display: flex;
          justify-content: center;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 56%;
          border-radius: 8px;
          overflow: hidden;
          padding:0;
          margin:0;
          li {
            height: 100%;
            flex: 1;
            transition: all .4s;
            background-repeat: no-repeat;
            background-position: center;
            .mask {
              width: 100%;
              height: 100%;
              transition: all .8s;
              background-color: rgba(8, 15, 61, .8);
            }
          }
          li:hover {
            flex: 3;
            .mask {
              width: 100%;
              height: 100%;
              background-color: rgba(8, 15, 61, 0);
            }
          }
        }
      }
      .bd-cont-box-item-1 {
        ul.pic-group {
          li:nth-of-type(1) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLLC-HLDSJ.png');
          }
          li:nth-of-type(2) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLLC-HLLCGL.png');
          }
          li:nth-of-type(3) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLLC-ZHHLDZBL.png');
          }
        }
      }
      .bd-cont-box-item-2 {
        ul.pic-group {
          li:nth-of-type(1) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLGL-HLJXH.png');
          }
          li:nth-of-type(2) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLGL-TGZL.png');
          }
          li:nth-of-type(3) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLGL-AI.png');
          }
        }
      }
      .bd-cont-box-item-3 {
        ul.pic-group {
          li:nth-of-type(1) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLKYYZW-ZHHLDZBL.png');
          }
          li:nth-of-type(2) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLKYYZW-HLDSJ.png');
          }
          li:nth-of-type(3) {
            background-image: url('../../../common/images/pro-wiseCare/WiseCare-HLKYYZW-HLLCGL.png');
          }
        }
      }
    }
  }
}

// ===== 移动端样式 =============
.pro-wiseCare-mo3-mob {
  padding-bottom: 30px;
  .pro-wiseCare-mo3-tit-img-box {
    height: 42px;
    margin: 80px 0 80px;
  }
  .pro-wiseCare-mo3-bd-box {
    padding: 0 20px;
    .bd-cont-box {
      padding: 20px;
      .bd-cont-box-item-1,.bd-cont-box-item-2,.bd-cont-box-item-3 {
        ul.text-group {
          padding: 0;
          width: 100%;
          li.text-group-item {
            margin-bottom: 30px;
            padding-bottom: 16px;
            border-bottom: 1px dashed rgba(255, 255, 255,.3);
            h4 {
              font-size: 16px;
              margin-bottom: 0;
              i{
                vertical-align: super;
                margin-top: 0;
                width: 24px;
                height: 24px;
              }
              span{
                vertical-align: top;
              }
            }
          }
          li:last-of-type {
            border-bottom: none;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
