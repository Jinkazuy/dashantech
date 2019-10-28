<template>
  <div
    :class="[
      'pro-clinicalDrug-mo2',
      'w100',
      'clearfix',
      mob ? 'pro-clinicalDrug-mo2-mob' : ''
    ]"
  >
    <div class="pro-clinicalDrug-mo2-tit-img-box">
      <img src="../../../common/images/titles/prd-title-YWLC-SUM.png" />
    </div>
    <div class="pro-clinicalDrug-mo2-bd-box container">
      <ul class="hover-box clearfix">
        <li
          :class="{ 'on-hover': btnHoverNow === 1 }"
          @mouseenter="mouseHover1"
        >
          试验过程管理
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 2 }"
          @mouseenter="mouseHover2"
        >
          受试者计划管理
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 3 }"
          @mouseenter="mouseHover3"
        >
          医院临床系统无缝整合
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 4 }"
          @mouseenter="mouseHover4"
        >
          提醒和预警
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 5 }"
          @mouseenter="mouseHover5"
        >
          质量监控
          <div class="tr"></div>
        </li>
        <li
          :class="{ 'on-hover': btnHoverNow === 6 }"
          @mouseenter="mouseHover6"
        >
          数据管理
          <div class="tr"></div>
        </li>
      </ul>
      <div class="bd-cont-box">
        <div v-if="btnHoverNow === 1" class="bd-cont-box-item-1 clearfix">
          <div class="text-group">
            <ul class="clearfix">
              <li><span>• </span>项目审批</li>
              <li><span>• </span>计划执行</li>
              <li><span>• </span>试验方案</li>
              <li><span>• </span>药房管理</li>
              <li><span>• </span>经费管理</li>
              <li><span>• </span>质控计划</li>
              <li><span>• </span>PK计划</li>
            </ul>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/index/testillus.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 2" class="bd-cont-box-item-2 clearfix">
          <div class="text-group">
            <ul class="clearfix">
              <li><span>• </span>基于实验方案生成</li>
              <li><span>• </span>受试者计划</li>
              <li><span>• </span>计划执行</li>
              <li><span>• </span>疗效评价</li>
            </ul>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/index/testillus.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 3" class="bd-cont-box-item-3 clearfix">
          <div class="text-group">
            <ul class="clearfix">
              <li><span>• </span>HIS</li>
              <li><span>• </span>CPOE</li>
              <li><span>• </span>EMR</li>
              <li><span>• </span>RIS</li>
              <li><span>• </span>LIS 等系统无缝集成</li>
            </ul>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/index/testillus.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 4" class="bd-cont-box-item-4 clearfix">
          <div class="text-group">
            <ul class="clearfix">
              <li><span>• </span>计划执行提醒</li>
              <li><span>• </span>AE、SAE预警</li>
              <li><span>• </span>质控提醒</li>
            </ul>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/index/testillus.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 5" class="bd-cont-box-item-5 clearfix">
          <div class="text-group">
            <ul class="clearfix">
              <li><span>• </span>质控部门检查</li>
              <li><span>• </span>质控部门实时监控</li>
              <li><span>• </span>试验对象</li>
            </ul>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/index/testillus.png" />
          </div>
        </div>
        <div v-if="btnHoverNow === 6" class="bd-cont-box-item-6 clearfix">
          <div class="text-group">
            <ul class="clearfix">
              <li><span>• </span>CDISK标准</li>
              <li><span>• </span>对接EDC</li>
              <li><span>• </span>数据真实有效</li>
              <li><span>• </span>数据安全</li>
            </ul>
          </div>
          <div class="pic-group" v-if="!mob">
            <img src="../../../common/images/index/testillus.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proClinicalDrugMO2",
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
    }
  }
};
</script>

<style scoped lang="stylus">
.pro-clinicalDrug-mo2 {
    background-color: rgba(40, 50, 122, 1);
    .pro-clinicalDrug-mo2-tit-img-box {
        margin: 80px 0 132px;
        height: 84px;
        img {
            height: 100%;
            display: block;
            margin: 0 auto;
        }
    }
    .pro-clinicalDrug-mo2-bd-box {
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
                    ul {
                        font-size: 16px;
                        line-height: 32px;
                        color: #fff;
                        li {
                            float: left;
                            margin: 0 52px 52px 0;
                            font-size: 24px;
                        }
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
.pro-clinicalDrug-mo2-mob {
    padding-bottom: 30px;
    .pro-clinicalDrug-mo2-tit-img-box {
        height: 42px;
        margin: 80px 0 80px;
    }
    .pro-clinicalDrug-mo2-bd-box {
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
                  ul {
                    padding: 0;
                    li {
                      font-size: 16px;
                      margin-bottom: 20px;
                    }
                    li:last-of-type {
                      margin-bottom: 0;
                    }
                  }
                }
            }
        }
    }
}
</style>
