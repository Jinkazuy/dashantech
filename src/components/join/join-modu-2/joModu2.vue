<template>
  <div :class="['join-modu-2', mob ? 'join-modu-2-mob' : '']">
    <div class="container">
      <div class="jo-mo2-tit">
        <img
          class="w100 h100"
          src="../../../common/images/titles/home-title-joinUs.png"
          alt="加入我们"
        />
      </div>
      <div class="job-cont">
        <ul class="h100 w100">
          <li
            :class="['list-item w100', { 'list-active': listItem.active }]"
            v-for="(listItem, idx) in jobsData"
            :key="idx"
            @click="liClick(listItem.id)"
          >
            <span class="job-type text-nowrap">{{ listItem.title }}</span>
            <span class="job-posi">
              <i class="iconfont iconditu"></i>{{ listItem.position }}
            </span>
            <span class="arr"
              ><i class="iconfont iconchevron-top-solid"></i
            ></span>
            <div class="req">
              <h6>任职要求:</h6>
              <ul>
                <li v-for="(item, index) in listItem.req" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="tre">
              <h6>岗位待遇：</h6>
              <ul>
                <li v-for="(item, index) in listItem.tre" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="br-bt"></div>
          </li>
        </ul>
      </div>
      <div class="job-ft">
        <div class="ft-l">
          <h2>你准备好了吗？</h2>
          <p class="ft-l-p1">马上联系大善团队</p>
          <p class="ft-l-p2">投递邮件至：hr@xxxx.com</p>
        </div>
        <div class="ft-r">
          <img
            class="w100 h100"
            src="../../../common/images/join/jobteam.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "joModu2",
  props: ["mob"],
  data() {
    return {
      // 职位信息数据,本地mock，模拟json
      jobsData: [
        // 一个对象就是一个职位信息；
        {
          id: 1,
          active: false,
          title: "PACS&区域影像售前工程师(医疗方向)",
          position: "北京",
          req: [
            "1、医疗健康行业云产品需求调研；",
            "2、负责云PACS产品的方案规划等，跟进评估产品开发的进度和用户体验；",
            "3、配合销售人员外出洽谈客户，协助市场部及销售人员，在项目推进中解决有关客户和项目中的各种技术问题，包括技术交流、分析客户需求，产品介绍，提出咨询意见，撰写项目方案；",
            "4、负责项目方案的讲解和大型项目解决方案顾问式售前支持，配合公司市场的推广，主题演讲与系统演示，参与投标等。"
          ],
          tre: [
            "1、大专及以上学历，计算机相关专业；3年以上PACS或者区域影像云相关工作经验；",
            "2、熟悉JAVA，C#等常用程序开发语言和工具，熟悉基础软件，包括操作系统、数据库、中间件平台等；",
            "3、熟悉云计算、大数据的相关技术概念和基本架构，熟悉Hadoop/Spark生态系列的相应系统优先；",
            "4、熟悉相关行业应用业务背景，具有5年以上经验积累，具有大型信息化系统建设售前支持工作经验；",
            "5、了解基本的项目推进过程和周期，具有一定的市场概念，具有与客户打交道的基本技巧；",
            "6、具有良好的语言表达和文字功底，良好的人际沟通能力，演讲能力；",
            "7、熟练使用WORD，EXCEL，PPT等相关办公软件，能够顺利完成解决方案编写、PPT开发等相关的文案工作。"
          ]
        },
        {
          id: 2,
          active: false,
          title: "技术经理",
          position: "北京",
          req: [
            "1、为销售团队提供技术讲解和技术文档；",
            "2、以技术顾问的身份为客户提供技术支持和建议；",
            "3、为合作伙伴提供产品的技术培训；",
            "4、负责公司相关产品的售前咨询、投标;",
            "5、负责协助客户进行需求分析及分解;",
            "6、负责影像云PACS等公司产品的实施及售后服务。",
            "7、从事医疗信息化系统集成项目的投标组织、项目管理、调试试运行等工作。"
          ],
          tre: [
            "1、自动化、计算机或通信相关专业本科及以上学历。",
            "2、3年以上医疗信息化系统集成项目管理相关工作经验，具有编制招投标书、进行技术洽谈经验，具有项目实施的管理、协调和控制经验，具有项目交付后协调相关技术资源负责运维。",
            "3、熟悉网络、存储、服务器、信息安全和VMware虚拟化等方面技术者优先。",
            "4、有计算机信息系统集成项目经理证书者优先考虑。",
            "5、能够适应一定程度的出差。"
          ]
        },
        {
          id: 3,
          active: false,
          title: "销售经理3",
          position: "北京",
          req: [
            "1、年龄22-48岁，本科以上学历，特别优秀者可适度放宽要求。",
            "2、有企图心与学习能力、有清晰的人生规划和目标。",
            "3、身体健康、品行端正，有良好的服务意识。"
          ],
          tre: [
            "1、业绩佣金+津贴+新人训练津贴+增员奖+潜力新人奖+转正奖励+旅游奖励……",
            "2、享受潜力新人奖、新人津贴。",
            "3、享受养老金制度及高额的医疗、大病、意外保障。"
          ]
        },
        {
          id: 4,
          active: false,
          title: "销售经理4",
          position: "北京",
          req: [
            "1、年龄22-48岁，本科以上学历，特别优秀者可适度放宽要求。",
            "2、有企图心与学习能力、有清晰的人生规划和目标。",
            "3、身体健康、品行端正，有良好的服务意识。"
          ],
          tre: [
            "1、业绩佣金+津贴+新人训练津贴+增员奖+潜力新人奖+转正奖励+旅游奖励……",
            "2、享受潜力新人奖、新人津贴。",
            "3、享受养老金制度及高额的医疗、大病、意外保障。"
          ]
        },
        {
          id: 5,
          active: false,
          title: "销售经理5",
          position: "北京",
          req: [
            "1、年龄22-48岁，本科以上学历，特别优秀者可适度放宽要求。",
            "2、有企图心与学习能力、有清晰的人生规划和目标。",
            "3、身体健康、品行端正，有良好的服务意识。"
          ],
          tre: [
            "1、业绩佣金+津贴+新人训练津贴+增员奖+潜力新人奖+转正奖励+旅游奖励……",
            "2、享受潜力新人奖、新人津贴。",
            "3、享受养老金制度及高额的医疗、大病、意外保障。"
          ]
        }
      ]
    };
  },
  methods: {
    // 点击列表，给其他li去掉.list-active类名，然后给自己加上.list-active类名，实现展开与隐藏；
    liClick(jobId) {
      var ret = this.jobsData.find(function(item) {
        return jobId === parseInt(item.id);
      });
      // 判断，如果当前处于展开状态，收起来就行；
      if (ret.active) {
        for (let i = 0; i < this.jobsData.length; i++) {
          this.jobsData[i].active = false;
        }
        ret.active = false;
      } else {
        for (let i = 0; i < this.jobsData.length; i++) {
          this.jobsData[i].active = false;
        }
        ret.active = true;
      }
      console.log(ret.active);
    }
  }
};
</script>

<style scoped lang="stylus">
.join-modu-2 {
    background:rgba(231,233,242,1);
    padding-bottom: 80px;
    padding-top: 120px;
    .container {
        display: block;
        padding: 0;
        .jo-mo2-tit {
            margin: 0 auto 44px;
            width: 138px;
            height: 87px;
        }
        .job-cont {
            width: 92%;
            height: auto;
            margin: 0 auto;
            background-color: #fff;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
            border-radius: 4px;
            ul {
                border-radius: 4px;
                box-sizing: border-box;
                overflow: hidden;
                padding: 0;
                .list-item {
                    cursor: pointer;
                    position: relative;
                    height: 90px;
                    background-color: #fff;
                    padding: 32px 44px;
                    transition: all .8s;
                    overflow: hidden;
                    .job-type {
                        display: inline-block;
                        width: 36%;
                        transition: all .3s;
                        color: rgba(23, 35, 61, 1);
                        font-size: 20px;
                        margin-right: 100px;
                        font-weight: 700;
                    }
                    .job-posi {
                        font-size: 16px;
                        color: rgba(23, 35, 61, 1);
                        i {
                            transition: all .3s;
                            display: inline-block;
                            margin-right: 4px;
                            width: 14px;
                            height: 14px;
                            font-size: 14px;
                            color: rgba(216,216,216,1);
                        }
                    }
                    .arr {
                        float: right;
                        margin-top: 4px;
                        i {
                            transition: all .3s;
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            font-size: 12px;
                            color: rgba(216, 216, 216, 1);
                            transform: rotateZ(180deg);
                        }
                    }
                    .req, .tre {
                        margin: 40px 0 40px 30px;
                        h6 {
                            margin: 0 0 16px 0;
                            color: rgba(23, 35, 61, 1);
                            font-size: 16px;
                            font-weight: 700;
                        }
                        li {
                            padding: 0 0 0 24px;
                            font-size: 16px;
                            margin-bottom: 4px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    .tre {
                        margin-bottom: 20px;
                    }
                    .br-bt {
                        position: absolute;
                        left: 44px;
                        right: 44px;
                        bottom: 0;
                        border-bottom: 1px solid rgba(216,216,216,.6);
                    }
                }
                .list-item.list-active {
                    height: auto;
                    background-color: #f4f4f4;
                    .job-type {
                        color: #14948a;
                    }
                    .job-posi {
                         color: rgba(23, 35, 61, 1);
                         i {
                             color: #14948a;
                         }
                     }
                    .arr {
                          i {
                              color: rgba(20, 148, 138, 1);
                              transform: rotateZ(0deg);
                          }
                      }
                }
            }
        }
        .job-ft {
            position: relative;
            overflow: hidden;
            width: 92%;
            height: 362px;
            margin: 36px auto 0;
            background-color: #fff;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
            border-radius: 4px;
            padding: 8px;
            .ft-l {
                position: relative;
                z-index: 99;
                background-color: rgba(255, 255, 255, 0.6);
                float: left;
                margin: 50px 0 0 30px;
                padding: 10px;
                h2 {
                    margin: 0 0 32px 0;
                    color: rgba(23, 35, 61, 1);
                    font-size: 40px;
                    font-weight: 700;
                }
                .ft-l-p1 {
                    font-size: 16px;
                    color: rgba(128, 134, 149, 1);
                }
                .ft-l-p2 {
                    user-select: text;
                    font-size: 16px;
                    color: rgba(20, 148, 138, 1);
                    margin: 100px 0 0 0;
                }
            }
            .ft-r {
                position: absolute;
                right: 8px;
                top: 8px;
                bottom: 8px;
                width: 580px;
            }
        }
    }
}
// ===================== 移动端样式 ======================
.join-modu-2-mob {
  padding-top: 200px;
  padding-bottom: 40px;
  .container {
    .jo-mo2-tit {
      width: 69px;
      height: 42px;
    }
    .job-cont {
      ul {
        li {
          .job-type {
            font-size: 16px !important;
            margin-right: 70px !important;
          }
          .req {
            margin-left: 0 !important;
            ul {
              li {
                padding-left: 0 !important;
                font-size: 12px !important;
              }
            }
          }
          .tre {
            margin-left: 0 !important;
            ul {
              li {
                padding-left: 0 !important;
                font-size: 12px !important;
              }
            }
          }
        }
      }
    }
    .job-ft {
      height: auto;
      .ft-l {
        float: none;
        width: 100%;
        margin: 0;
        h2 {
          font-size: 20px;
          margin-bottom: 30px;
        }
        .ft-l-p2 {
          margin: 0;
        }
      }
      .ft-r {
        position: relative;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
      }
    }
  }
}
</style>
