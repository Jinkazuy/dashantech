<template>
  <div
    :class="[
      'pro-intensive-care-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-intensive-care-mo3-mob' : ''
    ]"
  >
    <div class="pro-intensive-care-mo3-tit-img-box">
      <img
        src="../../../common/images/titles/prd-title-ZZHLXX-Systemapplication.png"
      />
    </div>
    <div class="pro-intensive-care-mo3-bd-box container">
      <ul class="hover-box clearfix">
        <li
          :class="{ 'on-hover': btnHoverNow === 1 }"
          @mouseenter="mouseHover1"
        >
          数据采集
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 2 }"
          @mouseenter="mouseHover2"
        >
          实时监控
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 3 }"
          @mouseenter="mouseHover3"
        >
          趋势分析
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 4 }"
          @mouseenter="mouseHover4"
        >
          智能评估
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 5 }"
          @mouseenter="mouseHover5"
        >
          信息回顾
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 6 }"
          @mouseenter="mouseHover6"
        >
          无缝集成
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 7 }"
          @mouseenter="mouseHover7"
        >
          应用价值
          <div class="tr"></div>
        </li>
      </ul>
      <div class="bd-cont-box">
        <div v-if="btnHoverNow === 1" class="bd-cont-box-item-1 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span>快速实现与市场各主流品牌监护设备无缝对接。
              <br /><br /><span>2) </span>自动实时采集床边监护设备数据。
              <br /><br /><span>3) </span>自动平衡计算、保存、分类等功能。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-SJCJ.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 2" class="bd-cont-box-item-2 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span
              >将采集的临床数据实时传送至客户端，在ICU实现同步观察中央监护。
              <br /><br /><span>2) </span
              >全部信息可通过网络传输到相关科室进行远程监护，为医生工作站提供ICU转入、转出管理会诊等功能。
              <br /><br /><span>3) </span
              >为护士工作站提供危重监护特护记录等功能，由电子病历信息流引导，实现资源共享。
              <br /><br /><span>4) </span
              >连续或者按用户自定义的频率，把数据记录在中央数据库。
              <br /><br /><span>5) </span>后续数据整理、分析、统计和便捷查询。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-SSJK.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 3" class="bd-cont-box-item-3 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span
              >系统自动对各种床边监护设备采集的生命体征数据进行曲式分析。
              <br /><br /><span>2) </span
              >自动对患者危重度程度进行评估，为防范病情恶化制定相应预防措施。
              <br /><br /><span>3) </span>提供数据列表和图形显示方式。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-QSFX.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 4" class="bd-cont-box-item-4 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span
              >智能评分系统采用国际上到广泛应用的危重患者病情评价评分标准。
              <br /><br /><span>2) </span
              >支持对重症患者的随机定量评估，评分用护理。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-ZNPG.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 5" class="bd-cont-box-item-5 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span
              >系统详细记录病人信息，利用数据库储存各ICU海量数据。
              <br /><br /><span>2) </span
              >通过查询历史数据，回顾以往病史，为现有诊断和病历研究提供数据。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-XXHG.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 6" class="bd-cont-box-item-6 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span>可与医院现有HIS、PACS、RIS、LIS、CIS无缝链接。
              <br /><br /><span>2) </span
              >实现患者转入、转出信息、麻醉手术信息、检查检验信息等共享。
              <br /><br /><span>3) </span>提供多种安全策略；满足需要。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-WFJC.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 7" class="bd-cont-box-item-7 clearfix">
          <div class="text-group">
            <p>
              <span>1) </span>帮助医护提高治疗效率，实现重症监护数字化、智能化。
              <br /><br /><span>2) </span
              >有效解决临床数据量存储、传输、查阅的问题。 <br /><br /><span
                >3) </span
              >采用“多中心”中央控制平台技术，保持系统的可靠性、稳定性和连续性。
              <br /><br /><span>4) </span
              >率先整合危重监护医学中的各种评分模型于重症护理信息系统中。
              <br /><br /><span>5) </span
              >从监护设备同步采集数据，客观评估病人的危重状态。
              <br /><br /><span>6) </span
              >与电子病历等其他系统直接关联，便于对患者病况的全程跟踪。
              <br /><br /><span>7) </span>模组块结构设计、具有灵活的可扩展性。
            </p>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/pro-IntensiveCare/IntensiveCare-YYJZ.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proIntensiveCareMO3",
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
    },
    mouseHover4() {
      this.btnHoverNow = 4;
    },
    mouseHover5() {
      this.btnHoverNow = 5;
    },
    mouseHover6() {
      this.btnHoverNow = 6;
    },
    mouseHover7() {
      this.btnHoverNow = 7;
    }
  }
};
</script>

<style scoped lang="stylus">
.pro-intensive-care-mo3 {
    background-color: rgba(40, 50, 122, 1);
    .pro-intensive-care-mo3-tit-img-box {
        margin: 80px 0 132px;
        height: 84px;
        img {
            height: 100%;
            display: block;
            margin: 0 auto;
        }
    }
    .pro-intensive-care-mo3-bd-box {
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
            .bd-cont-box-item-1,
            .bd-cont-box-item-2,
            .bd-cont-box-item-3,
            .bd-cont-box-item-4,
            .bd-cont-box-item-5,
            .bd-cont-box-item-6,
            .bd-cont-box-item-7 {
                position: relative;
                height: 100%;
                display: flex;
                align-items: center;
                .text-group {
                    width: 56%;
                    float: left;
                    color: #fff;
                    margin: 0;
                    P {
                        font-size: 16px;
                        line-height: 32px;
                        color: #fff;
                        span {
                            color: #3fccc7;
                        }
                    }
                }
                .pic-group {
                    display: flex;
                    justify-content: center;
                    float: right;
                    width: 44%;
                    height: 408px;
                    border-radius: 8px;
                    overflow: hidden;
                    padding:0;
                    margin:0;
                    img {
                        height: 100%;
                    }
                }
            }
        }
    }
}

// ===== 移动端样式 =============
.pro-intensive-care-mo3-mob {
    padding-bottom: 30px;
    .pro-intensive-care-mo3-tit-img-box {
        height: 42px;
        margin: 80px 0 80px;
    }
    .pro-intensive-care-mo3-bd-box {
        padding: 0 20px;
      .hover-box {
        display: block;
        li {
          margin-right: 24px;
          margin-bottom: 24px;
        }
        li:last-of-type {
          margin-bottom: 0;
        }
      }
      .bd-cont-box {
          padding: 20px;
          .bd-cont-box-item-1,
          .bd-cont-box-item-2,
          .bd-cont-box-item-3,
          .bd-cont-box-item-4,
          .bd-cont-box-item-5,
          .bd-cont-box-item-6,
          .bd-cont-box-item-7 {
            .text-group {
              padding: 0;
              width: 100%;
              .text-group-item {
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
