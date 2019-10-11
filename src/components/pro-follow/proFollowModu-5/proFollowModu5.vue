<template>
  <div :class="['proFollowMo-5', mob ? 'proFollowMo-5-mob' : '']">
    <div class="fol-mo5-hd">
      <img src="../../../common/images/titles/prd-title-symValue.png" />
    </div>
    <div class="fol-mo5-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img
              src="../../../common/images/pro-follow/pro-fol-mo5-illus-1.png"
            />
          </div>
          <div class="text-box">
            <h4>1) 提高患者忠诚度</h4>
            <p>
              通过方便贴心的预约服务，满意度调查，跟进关怀(生日，节日问候),
              提醒用药，通知复诊等主动和患者的沟通和关怀大大提高患者的満意度，也提高患者层忠诚度。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>2) 规范预约随访和科研随访</h4>
            <p>
              随访的时间、随访的内容都由系统自动生成，并有系统自动提醒，使随访的工作流程更加规范化。随访结果由系统进行保存分析，对每个随访员工的工作评估更加科学化。
            </p>
          </div>
          <div class="illus-box">
            <img
              src="../../../common/images/pro-follow/pro-fol-mo5-illus-2.png"
            />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img
              src="../../../common/images/pro-follow/pro-fol-mo5-illus-3.png"
            />
          </div>
          <div class="text-box">
            <h4>3) 提高社会效益和经济效益</h4>
            <p>
              通过规范贴心的服务和持续地关怀和，将大大改善惠者诊疗效果，提高惠者满意度，降低医惠纠纷，同时提高惠者的复诊就诊率，并且通过惠者口碑带来更多的潜在惠者，大大提高医院的经济效益。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>4) 提高预约随访合科研效率</h4>
            <p>
              通过智能化的随访管理和提醒，借助系统高效的沟通平台，大大降低工作强度，提高随访的工作效率。
            </p>
          </div>
          <div class="illus-box">
            <img
              src="../../../common/images/pro-follow/pro-fol-mo5-illus-4.png"
            />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img
              src="../../../common/images/pro-follow/pro-fol-mo5-illus-5.png"
            />
          </div>
          <div class="text-box">
            <h4>5) 提高医疗合科研水平</h4>
            <p>
              通过对惠者医后的随访和分析，为提高医疗科研水平提供了坚实 的基础。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proFollowModu5",
  data() {
    return {
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    // 是否渲染移动端样式
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.proFollowMo-5 {
    background:rgba(255,255,255,1);
    padding: 80px 0;
    .fol-mo5-hd {
        width: 138px;
        margin: 0 auto 20px;
        img {
            width: 100%;

        }
    }
    .fol-mo5-bd {
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
// ============ 移动端样式 ==========
.proFollowMo-5-mob {
  padding-top: 40px;
  .fol-mo5-hd {
    width: 69px;
  }
  .fol-mo5-bd {
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
