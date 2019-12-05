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
              <h6>岗位职责：</h6>
              <ul>
                <li v-for="(item, index) in listItem.req" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="tre">
              <h6>任职资格：</h6>
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
          <p class="ft-l-p2">投递邮件至：tangfeng@dashantech.com.cn</p>
        </div>
        <div class="ft-r">
          <img class="w100 h100" src="../../../../public/images/poto-1.jpg" />
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
          title: "渠道销售",
          position: "北京",
          req: [
            "1、负责公司软件产品以及解决方案在所负责区域内医疗行业（卫计委、医联<共>体、医院、著名专家等）渠道客户的业务开拓、维护；",
            "2、执行销售战略，寻找合适经销商，有效利用一切资源，确保完成公司下达的销售业务指标；",
            "3、培养和管理区域内的经销商。负责相关区域内的新客户开发，及老用户的拜访及维护工作；",
            "4、协助经销商开拓市场，协调相关资源与经销商共同完成项目方案的有效落地；",
            "5、收集分析负责区域的客户信息，市场需求及产品竞争状况，执行公司制订的营销方案；",
            "6、熟悉并掌握公司相关产品知识及行业知识，组织并积极参与区域内产品研讨会、展会及用户交流；",
            "7、做好经销商的管理工作，做好区域市场内客情关系管理工作。"
          ],
          tre: [
            "1、专科及以上学历，至少有五年IT相关行业销售经验，有一定的医疗行业客户资源；",
            "2、3年以上医疗信息细化渠道销售经验者，优秀的商务谈判技巧和项目控制能力；",
            "3、在医疗信息化或软件产品有良好的销售业绩；熟悉智慧医疗、区域医疗信息化特点，远程医疗和大型医院信息化建设；",
            "4、具备很强的团队合作精神及工作积极、主动性；能够适应在压力下工作，适应出差；",
            "5、优秀的沟通、表达能力，善于与客户交流；",
            "6、计算机专业、市场营销、医学等相关专业，有渠道资源的优先考虑。"
          ]
        },
        {
          id: 2,
          active: false,
          title: "直销人员",
          position: "北京",
          req: [
            "1、负责公司软件产品以及解决方案在所负责区域内医疗行业（卫计委、医联<共>体、医院、著名专家等）大客户业务开拓、维护，完成销售指标；",
            "2、负责公司软件产品在各省卫计委、大型医院、医联体和医疗集团等的销售策略制定与实施；对项目进行有效推进，对方案进行全方位跟踪，进行相关数据统计和效果分析；",
            "3、挖掘并逐步引导行业需求，推进项目方案的有效落地；",
            "4、负责与客户之间的商务谈判，提高合同额与利润率；",
            "5、负责维护客户关系，提高客户满意度。"
          ],
          tre: [
            "1、专科及以上学历，至少有五年IT相关行业销售经验，有一定的医疗行业客户资源；",
            "2、在医疗信息化或软件产品有良好的销售业绩；熟悉智慧医疗、区域医疗信息化特点，远程医疗和大型医院信息化建设；",
            "3、较强的商务谈判和独立的市场开拓、资源整合能力，熟悉各省卫计委、大型医院、医联体和医疗集团；",
            "4、具有较强的判断和跟单能力，勤奋，执着，善于捕捉并有效跟踪销售机会；",
            "5、较强的市场挖掘与分析能力，具有良好的沟通与销售技巧、敏锐的洞察力及一定市场反馈能力，独立进行项目的策划、销售与谈判；",
            "6、具有较好的社会资源和人际关系网，善于与人快速建立关系；",
            "7、具有独立工作能力，勇于接受工作挑战，能够承担目标压力，接受出差；",
            "8、成功运作过500万以上的项目经验；",
            "9、计算机专业、市场营销、医学等相关专业者优先考虑。"
          ]
        },
        {
          id: 3,
          active: false,
          title: "售前工程师",
          position: "全国",
          req: [
            "1、负责与客户技术方案的沟通，提升客户对公司及产品的认可度；",
            "2、配合销售提供产品演示交流、技术答疑以及客户现场调研等；",
            "3、定期搜集产品资料、行业动态、国家政策等行业资料；",
            "4、其他与销售项目相关的售前技术支持和咨询工作。"
          ],
          tre: [
            "1、本科（含）以上学历，计算机相关专业，3年以上售前相关工作经验；",
            "2、熟悉常用办公软件操作，具备较好的文档书写能力，有较强的PPT编制能力；",
            "3、熟悉智慧医疗、区域医疗信息化特点，远程医疗和大型医院信息化建设；医疗卫生信息化相关领域；",
            "4、性格开朗、外向，有较强的语言表达能力和沟通能力；",
            "5、较强的学习能力、组织能力与工作承受力，工作积极主动、吃苦耐劳；",
            "6、能够适应频繁出差。"
          ]
        },
        {
          id: 4,
          active: false,
          title: "市场营销经理",
          position: "北京",
          req: [
            "1、根据公司整体计划，全面负责公司的市场监控与管理，并根据市场具体情况进行管理计划的策划工作，制定市场营销战略，以提高市场占有率和利润；",
            "2、根据组织有关市场营销指导计划，负责对产品的市场开发过程进行组织和管理，确保市场部按照公司的预定计划运行，使部门工作效率稳步提升；",
            "3、根据公司战略及市场状况，组织并指导制定产品定位等市场营销策略，并在管理范围内处理主要的市场推广问题；",
            "4、根据公司的战略决策，在管理范围内处理主要的市场推广问题、建立渠道和进行主要的渠道建设谈判；",
            "5、根据部门发展计划，负责开发团队组织管理，协调各开发中心人力资源的调配；",
            "6、综合考虑市场营销预算、制定部门具体预算案，降低成本，提高资金利用率；",
            "7、根据部门发展战略，参与部门内的交流平台，统一技术标准，通过与部门内其部门领导沟通，协调部门间关系，从而实现部门内信息交流有效进行；",
            "8、负责公司品牌战略规划、传播方案制定、品牌宣传与维护、品牌活动策划及实施。"
          ],
          tre: [
            "1、大学本科及以上学历，市场营销、企业管理、战略管理等相关专业；",
            "2、5年以上的大中型企业营销岗位工作经验；",
            "3、具备专业的市场营销、合同法、财务管理、工商管理等方面的知识；",
            "4、较强的自我管理能力，沟通能力和协调能力及人际交往能力；",
            "5、熟悉医疗信息化行业市场格局，能够解读国家新医改政策，擅于整合各方面资源以支撑公司的业务拓展。"
          ]
        },
        {
          id: 5,
          active: false,
          title: "技术经理",
          position: "北京",
          req: [
            "1、为销售团队提供技术讲解和技术文档；",
            "2、以技术顾问的身份为客户提供技术支持和建议；",
            "3、为合作伙伴提供产品的技术培训；",
            "4、负责公司相关产品的售前咨询、投标;",
            "5、负责协助客户进行需求分析及分解;",
            "6、负责影像云PACS等公司产品的实施及售后服务；",
            "7、从事医疗信息化系统集成项目的投标组织、项目管理、调试试运行等工作。"
          ],
          tre: [
            "1、自动化、计算机或通信相关专业本科及以上学历；",
            "2、三年以上医疗信息化系统集成项目管理相关工作经验，具有编制招投标书、进行技术洽谈经验，具有项目实施的管理、协调和控制经验，具有项目交付后协调相关技术资源负责运维；",
            "3、熟悉网络、存储、服务器、信息安全和VMware虚拟化等方面技术者优先；",
            "4、有计算机信息系统集成项目经理证书者优先考虑；",
            "5、能够适应一定程度的出差。"
          ]
        },
        {
          id: 6,
          active: false,
          title: "医疗信息化销售经理",
          position: "江西、湖南、湖北、河北、广东、广西、内蒙古、四川、云南",
          req: [
            "1、有2年以上医疗信息化销售的经验；",
            "2、独立跟踪并成单医疗信息化的经验；",
            "3、有一定的医疗人脉资源。"
          ],
          tre: [
            "1、学历不限；",
            "2、有意愿从事医疗信息化销售的，愿意出差或常驻河北、内蒙古、四川的。"
          ]
        },
        {
          id: 7,
          active: false,
          title: "产品经理",
          position: "北京",
          req: ["1、熟悉pacs影像云平台；", "2、对相关医疗产品有所了解。"],
          tre: [
            "1、两年左右工作经验，计算机或医学相关专业，本科以上学历；",
            "2、有一定医疗相关知识 ，熟悉医院PACS、HIS系统或相关业务流优先考虑；",
            "3、做过医疗项目，有pacs影像云经验的优先考虑。"
          ]
        },
        {
          id: 8,
          active: false,
          title: "招商经理",
          position: "北京",
          req: [
            "1、负责搜集新客户的资料并进行沟通，开发新客户；",
            "2、通过电话与客户进行沟通了解客户需求；",
            "3、维护老客户的业务，挖掘客户的最大潜力；",
            "4、定期与合作客户进行沟通，建立良好的长期合作关系；",
            "5、具有良好的理解、沟通能力，较强的洞察力和社会交往能力。"
          ],
          tre: [
            "1、20-35岁，口齿清晰，普通话流利，语音富有感染力；",
            "2、对销售或客服工作有较高的热情；",
            "3、具备较强的学习能力和优秀的沟通能力；",
            "4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；",
            "5、热爱销售行业，一年以上销售工作经验，有良好的谈判、把握客户、沟通能力，勤奋，能适应出差；",
            "6、有药品、高值耗材、医院投放产品、医疗器械、专业线渠道开发经验者优先；",
            "7、有责任心、团队协作精神，善于挑战，改变自己、提升自己。"
          ]
        },
        {
          id: 9,
          active: false,
          title: "PACS&区域售前影像工程师",
          position: "北京",
          req: [
            "1、相关医疗项目经验两年以上；",
            "2、能独立完成项目调研、技术方案、客户需求方案。"
          ],
          tre: ["1、大专以上学历；", "2、对医疗健康行业热爱。"]
        },
        {
          id: 10,
          active: false,
          title: "系统实施工程师",
          position: "北京",
          req: [
            "1、负责自主研发产品现场实施安装调试工作；",
            "2、负责实施现场对本院涉及部门进行系统的讲解，培训产品的使用；",
            "3、负责院内实施现场准确全面地获取和分析客户需求；",
            "4、负责实施现场使用部门的各种咨询及解答工作，并根据客户需求进行简单文档方案编写；",
            "5、严格按照项目实施进度执行项目的各种计划内容；",
            "6、项目实施完成后项目维护等工作。"
          ],
          tre: [
            "1、两年左右工作经验，计算机或医学相关专业，本科以上学历；",
            "2、熟悉计算机硬件的安装和调试，能够独立排除各种硬件故障；",
            "3、有技术开发背景及软件项目实施经验；",
            "4、有一定医疗相关知识 ，熟悉医院PACS、HIS系统或相关业务流优先考虑；",
            "5、具有良好的沟通能力和学习能力，表达清晰，有良好的技术讲解能力；",
            "6、能接受出差。"
          ]
        },
        {
          id: 11,
          active: false,
          title: "web前端开发",
          position: "北京",
          req: [
            "1、根据设计稿完成页面切图及布局；",
            "2、根据设计需求，完成页面交互效果开发；",
            "3、根据需求，实现后端数据的前台展现；",
            "4、对界面效果进行浏览器兼容性优化；",
            "5、对页面性能进行优化；",
            "6、前端框架的研究和应用；",
            "7、自有项目前端框架的开发。"
          ],
          tre: [
            "1、大专及以上学历、计算机相关专业，三年以上工作经验；",
            "2、精通 HTML5 Canvas画布技术，且有在线图像编辑项目开发经验者优先；",
            "3、熟练处理各个浏览器兼容性问题；",
            "4、掌握Html5、CSS3、JavaScript、JQuery、Ajax等这些核心的Web全栈技术、较为清楚地了解它们在不同浏览器上的兼容情况、渲染原理和存在的Bug；",
            "5、掌握requirejs（或者同类模块化加载js框架）、vue、Angularjs等主流开发框架；",
            "6、熟练使用html、css、requirejs、vue等前端技能开发过产品、应用；",
            "7、针对pc端和手机端，掌握页面自适应相关技术；",
            "8、良好的沟通表达能力，善于沟通与团队协作具有较强的学习能力，能承受一定的工作压力；",
            "9、熟悉ES5、ES6标准规范、javascript面向对象机制；",
            "10、必须精通 HTML5 Canvas画布技术，有在线图像编辑项目开发经验者优先。"
          ]
        },
        {
          id: 12,
          active: false,
          title: "软件测试工程师",
          position: "北京",
          req: [
            "1、完成公司PACS产品的所有相关测试工作；",
            "2、根据产品需求和设计文档，制定测试计划，并分析测试需求、设计测试流程、编写测试用例；",
            "3、根据产品测试需求完成测试环境的设计与配置、搭建工作；",
            "4、执行具体测试任务并确认测试结果、缺陷跟踪，完成测试报告以及测试结果分析；",
            "5、完成对产品的集成测试与系统测试，对产品的软件功能、性能及其它方面的测试；",
            "6、编写产品的安装、配置手册，并对安装部署过程进行测试。"
          ],
          tre: [
            "1、本科及以上学历，计算机及相关专业；",
            "2、良好的分析和独立思考能力；",
            "3、具有学习新技术以及复杂技术资料的能力；",
            "4、具有良好的团队协作精神和沟通能力 ；",
            "5、热爱软件测试工作，工作细致认真，有耐心；",
            "6、具有以下技能之一者优先；",
            "7、有医学教育背景；",
            "8、有医学图像信息处理软件测试经验；",
            "9、熟练使用VMWare、Hyper-V、Citrix虚拟化桌面、应用等。"
          ]
        },
        {
          id: 13,
          active: false,
          title: "UI设计师",
          position: "北京",
          req: [
            "1、根据产品需求，对产品的整体美术风格、交互设计、界面结构、操作流程等做出设计；",
            "2、负责用户界面设计，根据产品原型进行具体效果图设计，视觉设计（包括主次界面风格化，版面布局细节处理，icon绘制等）；",
            "3、能积极与开发沟通，推进界面及交互设计的最终实现；",
            "4、负责软件界面的美术设计、创意工作和制作工作；",
            "5、结合用户体验，优化完善设计，制定可行的产品品质提升方案；",
            "6、负责产品构思及软件界面优化，提出对产品界面规划，把握产品最终界面实现效果；",
            "7、负责移动产品设计体验、流程的制定和规范；",
            "8、负责设计讨论，和开发团队共同创建用户界面，跟踪设计效果，提出设计优化方案；",
            "9、维护现有的应用产品。"
          ],
          tre: [
            "1、精通Photoshop、Illustrator、Flash等图形软件，Html、Dreamweaver等网页制作工具，能够独立完成静态网页设计工作；",
            "2、熟悉Html、CSS、JavaScript、Ajax；",
            "3、对通用类软件或互联网应用产品的人机交互方面有自己的理解和认识；",
            "4、具备良好的审美能力、深厚的美术功底，有较强的平面设计和网页设计能力；",
            "5、具有敏锐的用户体验观察力，富有创新精神。"
          ]
        },
        {
          id: 14,
          active: false,
          title: "开发工程师",
          position: "北京",
          req: [
            "1、负责公司影像云系统的维护和开发；",
            "2、根据产品需求按时完成技术开发编程任务；",
            "3、开发工作符合业界通用编码规范；",
            "4、参与项目开发、设计，可以承担前端和简单的后台开发任务。"
          ],
          tre: [
            "1、1-3年实际开发经验（优秀应届毕业生亦可）；",
            "2、对Java或C#语言基础如多线程、同步、集合、并发包等了解原理以及实现；",
            "3、对前端诸如HTML、JQuery、easyUI或VUE有实际使用经验；",
            "4、对常用的开发框架如SpringMVC、SpringBoot、MyBatis等有良好的应用经验以及自己的理解；",
            "5、熟练使用Windows，Linux系统，熟悉常用的Linux命令，熟练使用MySQL等数据库；",
            "6、思维敏捷、逻辑清晰，能够承受工作压力、对工作负责；",
            "7、具备良好的系统分析能力、抽象思维和逻辑思维能力，能独立分析复杂问题和解决问题；",
            "8、有强烈的责任心，能承受一定工作压力；有较强的沟通能力及团队协作能力；",
            "9、优先考虑熟悉医院PACS、RIS、HIS等业务流程的候选人。"
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
                    border-left: 4px solid #fff;
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
                    border-left: 4px solid #14948a;
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
                .ft-l-p2::selection {
                    background-color: #14948a;
                    color: #fff;
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
