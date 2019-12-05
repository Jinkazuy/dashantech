<template>
  <div :class="['home-cont-modu-1', 'w100', mob ? 'home-cont-modu-1-mob' : '']">
    <div class="container">
      <div class="modu1-title w100">
        <p class="ft-sz-40 w100">
          大善科技始终秉承着
          <br v-if="mob" />
          “中国科技、服务国人”的经营理念
          <br />
          专注大健康医疗领域深度挖掘
        </p>
      </div>
      <div class="modu1-body w100">
        <div class="hover-btn-box h100">
          <div
            :class="[
              'hover-btn-1',
              { 'hover-btn-active': modu1HoverView === 1 }
            ]"
            @click="hoverBtn1Cl"
          >
            <img
              class="h100"
              src="../../../common/images/titles/about-title-OurServiceContent.png"
            />
          </div>
          <div
            :class="[
              'hover-btn-2',
              { 'hover-btn-active': modu1HoverView === 2 }
            ]"
            @click="hoverBtn2Cl"
          >
            <img src="../../../common/images/titles/home-title-Industry.png" />
          </div>
          <div
            :class="[
              'hover-btn-3',
              { 'hover-btn-active': modu1HoverView === 3 }
            ]"
            @click="hoverBtn3Cl"
          >
            <img src="../../../common/images/titles/about-title-Reasons.png" />
          </div>
          <div
            class="hover-line"
            :style="{ top: modu1HoverLinePos + 'px' }"
          ></div>
        </div>
        <div class="hover-view-box h100">
          <transition-group name="hover-view-box">
            <!--切换显示的第一项-->
            <div
              class="hover-view-1 w100 h100"
              v-show="modu1HoverView === 1"
              :key="1"
            >
              <router-link class="server-con-1 h100" to="/product">
                <div class="server-con-info w100">
                  <h3>医疗大数据平台</h3>
                  <p>
                    汇聚居民全生命周期的总和医疗和健康大数据
                  </p>
                </div>
              </router-link>
              <router-link class="server-con-2 h100" to="/product">
                <div class="server-con-info w100">
                  <h3>健康AI系统</h3>
                  <p>
                    依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
                  </p>
                </div>
              </router-link>
              <router-link class="server-con-3 h100" to="/product">
                <div class="server-con-info w100">
                  <h3>医疗大健康平台</h3>
                  <p>
                    中央数据中心，完善跟踪、采集居民医疗信息，形成诊疗监管、疾病上报、预防跟踪，解决卫生部、医院多机构的有效协同平台
                  </p>
                </div>
              </router-link>
              <div class="on-more">
                <router-link to="/product" class="ft-sz-14 w100 h100"
                  >查看更多</router-link
                >
              </div>
            </div>
            <!--切换显示的第二项-->
            <div
              class="hover-view-2 w100 h100"
              v-show="modu1HoverView === 2"
              :key="2"
            >
              <ul class="w100">
                <li
                  v-for="(item, index) in hoverViewProds"
                  :class="'prods-' + (index + 1)"
                  :key="index"
                >
                  <router-link :to="item.route" class="w100 h100">
                    <div class="prods-info h100">
                      <h3 v-html="item.title"></h3>
                      <p v-html="item.p"></p>
                    </div>
                  </router-link>
                </li>
              </ul>
              <div class="on-more">
                <router-link to="/product" class="ft-sz-14"
                  >查看更多</router-link
                >
              </div>
            </div>
            <!--切换显示的第三项-->
            <div
              class="hover-view-3 w100 h100"
              v-show="modu1HoverView === 3"
              :key="3"
            >
              <ul class="w100 h100">
                <li class="reason-1">
                  <img
                    class="w100 h100"
                    src="../../../common/images/index/modu-1/home-modu1-reus-ch-1.png"
                    alt=""
                  />
                </li>
                <li class="reason-2">
                  <img
                    class="w100 h100"
                    src="../../../common/images/index/modu-1/home-modu1-reus-ch-2.png"
                    alt=""
                  />
                </li>
                <li class="reason-3">
                  <img
                    class="w100 h100"
                    src="../../../common/images/index/modu-1/home-modu1-reus-ch-3.png"
                    alt=""
                  />
                </li>
                <li class="reason-4">
                  <img
                    class="w100 h100"
                    src="../../../common/images/index/modu-1/home-modu1-reus-ch-4.png"
                    alt=""
                  />
                </li>
              </ul>
              <div class="on-more">
                <router-link to="product" class="ft-sz-14"
                  >查看更多</router-link
                >
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div></template
>

<script>
// 使用jQuery页面加载事件
// 处理模块1 的动画效果，因为原生css无法直接选择前方兄弟元素，所以用JQ实现；
// eslint-disable-next-line
  $(window).on("load", function() {
  // eslint-disable-next-line
    $(".server-con-1").on("mouseenter", function() {
    // eslint-disable-next-line
      $(".server-con-1")
      .siblings("a")
      .css("opacity", "0.8");
  });
  // eslint-disable-next-line
    $(".server-con-1").on("mouseleave", function() {
    // eslint-disable-next-line
      $(".server-con-1")
      .siblings()
      .css("opacity", "1");
  });

  // eslint-disable-next-line
    $(".server-con-2").on("mouseenter", function() {
    // eslint-disable-next-line
      $(".server-con-2")
      .siblings("a")
      .css("opacity", "0.8");
  });
  // eslint-disable-next-line
    $(".server-con-2").on("mouseleave", function() {
    // eslint-disable-next-line
      $(".server-con-2")
      .siblings()
      .css("opacity", "1");
  });

  // eslint-disable-next-line
    $(".server-con-3").on("mouseenter", function() {
    // eslint-disable-next-line
      $(".server-con-3")
      .siblings("a")
      .css("opacity", "0.8");
  });
  // eslint-disable-next-line
    $(".server-con-3").on("mouseleave", function() {
    // eslint-disable-next-line
      $(".server-con-3")
      .siblings()
      .css("opacity", "1");
  });
});
export default {
  name: "modules1",
  props: ["mob"],
  data() {
    return {
      // 首页内容模块1相关============
      // 首页内容模块1 - 点击左侧icon 切换右侧显示内容 && 让竖条的位置变化； 34  232   430
      modu1HoverLinePos: 34,
      modu1HoverView: 1,
      // 行业解决方案数据
      hoverViewProds: [
        {
          title: "PACS影像云",
          route: "/productPacs",
          p:
            "基于现有的区域PACS、区域超声、区域心电，进一步实现区域影像数据的在各医疗机构内的共享和应用，推进胶片的按需分发，减少患者就医成本；建立影像云平台，实现影像数据的云存储和互联网调阅，方便患者检查结果的调阅，推进最多跑一次政策的执行。"
        },
        {
          title: "城市医疗联合体信息平台",
          route: "/productYLT",
          p:
            "2019年5月，为贯彻落实《国务院办公厅关于推进医疗联合体建设和发展的指导意见》等有关要求，推进分级诊疗制度建设和医疗联合体(以下简称医联体)建设，构建优质高效的医疗卫生服务体系，逐步实现城市医联体网格化布局管理，国家卫生健康委、国家中医药局决定开展城市医联体建设试点工作。"
        },
        {
          title: "移动医生查房系统",
          route: "/",
          // route: "/productWardRound",
          p:
            "大善移动医生查房系统通过与众多医院已有的相关信息系统进行对接，实现了在移动终端设备上查看病人的基本信息、医嘱信息、电子病历、检查信息、检验信息、护理信息，同时还支持医生在终端设备上通过手写、语音以及图片的方式进行备注，很好地将医生的信息系统延伸到病人床边。"
        },
        {
          title: "智能康复管理系统",
          route: "/",
          // route: "/productRecovery",
          p:
            "康复治疗前应先对病、伤、残者进行康复评定，然后制定一个理想的康复方案，由以康复医师为中心，和临床医学相关人员共同组成的康复治疗组去实施，并在实施过程中不断总结、评定调查，直至治疗结束。可实现康复科室的数字化、信息化和过程的管控，有效避免信息孤岛的出现，实现全员的数据共享。"
        },
        {
          title: "医院慢病管理系统",
          route: "/",
          // route: "/productIllMG",
          p:
            "大善医院慢病管理系统是致力于辅助医护人员、健康管理师更好的管理患者，为医护人员提供信息化、自动化的手段来为患者提供更优质的服务，让患者居家也能享受到医疗服务。通过专业精准的慢病评估，医护患全程与决策，针对不同患者提供健康营养套餐（食物、运动、休息，衣，食，住，行）。"
        },
        {
          title: "随访系统",
          route: "/",
          // route: "/productFollow",
          p:
            "大善随访系统解决方案随访系统将互联网、物联网技术与患者院内外医疗健康管理结合，以智能随访、智能宣教、智能提醒、健康监测、医护患沟通为患者管理主要手段，通过平台化的设计理念，为不同类型医疗机构，打造统一随访平台。"
        }
      ]
    };
  },
  methods: {
    hoverBtn1Cl() {
      this.modu1HoverLinePos = 34;
      this.modu1HoverView = 1;
    },
    hoverBtn2Cl() {
      this.modu1HoverLinePos = 231;
      this.modu1HoverView = 2;
    },
    hoverBtn3Cl() {
      this.modu1HoverLinePos = 431;
      this.modu1HoverView = 3;
    }
  }
};
</script>

<style scoped lang="stylus">
.home-cont-modu-1 {
    background-color: rgba(249,249,249,1);
    padding-top: 160px;
    height: 1135px;
    .container {
        padding: 0;
        display: block;
        .modu1-title {
            p {
                margin: 0 0 108px 0;
                text-align: center;
                color: #17233D;
                font-weight: 700;
                line-height: 56px;
            }
        }
        .modu1-body {
            height: 518px;
            padding: 0;
            position: relative;
            .hover-btn-box {
                position: absolute;
                padding: 42px 26px 42px 0;
                box-sizing: border-box;
                left: 0;
                @media (max-width: 1336px) {
                  left: 48px;
                }
                @media (max-width: 1366px) {
                  left: 48px;
                }
                top: 0;
                width: 174px;
                border-right: 1px solid rgba(216,216,216,0.5);
                .hover-btn-1, .hover-btn-2, .hover-btn-3 {
                  position: absolute;
                  right: 26px;
                  width: 160px;
                  height: 60px;
                  cursor: pointer;
                  opacity: 0.5;
                  transition: all .2s;
                  img {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                  }
                }
                .hover-btn-1:hover, .hover-btn-2:hover, .hover-btn-3:hover {
                  opacity: 1;
                }
                .hover-btn-1 {
                  top: 42px;
                }
                .hover-btn-2 {
                  top: 50%;
                  transform: translateY(-50%);
                }
                .hover-btn-3 {
                  bottom: 42px;
                }
                .hover-line {
                  position: absolute;
                  right: 0;
                  top: 34px;
                  width: 6px;
                  height: 80px;
                  background-color: #14948a;
                  transition: all .4s;
                }
                .hover-btn-active {
                  opacity: 1;
                }
            }

            // 首页模块1 - 公用效果
            // 查看更多按钮
            .on-more {
                position: absolute;
                bottom: -74px;
                left: 50%;
                width: 94px;
                height: 34px;
                text-align: center;
                transform: translateX(-50%);
                box-sizing: border-box;
                a {
                    border-radius: 17px;
                    border: 1px solid #14948a;
                    color: #14948a;
                    line-height: 32px;
                    display: block;
                    text-decoration: none;
                    transition: all .4s;
                    background-color: #fafafa;
                }
                a:hover {
                    background-color: #14948a;
                    color: #fff;
                    font-weight: 800;
                    box-shadow:0 4px 14px 0 rgba(50,230,210,0.9);
                }
            }
            .hover-view-box {
                position: absolute;
                left: 174px;
                @media (max-width: 1336px) {
                  left: 222px;
                }
                @media (max-width: 1366px) {
                  left: 222px;
                }
                top: 0;
                right: 0;
                .hover-view-1, .hover-view-2, .hover-view-3 {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                /*首页模块1 - 切换视图1*/
                .hover-view-1 {
                    padding: 0 36px;
                    display: flex;
                    justify-content: space-between;
                    .server-con-1, .server-con-2, .server-con-3 {
                        position: relative;
                        display: block;
                        width: 30%;
                        background-color: #fff;
                        color: #fff;
                        overflow: hidden;
                        border-radius: 4px;
                        box-sizing: border-box;
                        transition: all .4s;
                        // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                        backdrop-filter: blur(0);
                        .server-con-info {
                            position: absolute;
                            left: 0;
                            bottom: -120px;
                            height: 200px;
                            padding-top: 26px;
                            text-align: center;
                            background-color: rgba(20, 40, 120, .6);
                            transition: all .4s;
                            border-radius: 0 0 8px 8px;
                            h3 {
                                line-height: 1;
                                font-size: 24px;
                                font-weight: 700;
                                margin: 0 0 30px 0;
                            }
                            p {
                                padding: 0 40px;
                                line-height: 1.6;
                                margin: 0;
                            }
                        }
                        // tudo:这里媒体查询
                    }
                    .server-con-1:hover, .server-con-2:hover, .server-con-3:hover{
                        box-shadow: 0 10px 25px 10px rgba(0,0,150,0.2), 0 10px 15px 0 rgba(0,0,0,.3);
                        transform: translateY(-20px);
                        .server-con-info {
                            bottom: 0;
                            background-color: rgba(20, 40, 120, .7);
                            // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                            backdrop-filter: blur(4px);
                        }
                    }
                    // 这里有个效果使用jQuery实现的，就是hover时，其他元素透明度变化；
                    // 因为css原声无法选择前方的兄弟元素，所以私用jQuery实现；
                    /*产品1*/
                    .server-con-1 {
                        background: url('../../../common/images/index/modu-1/ourServer-ch-1.jpg') no-repeat;
                        background-size: cover;
                    }
                    /*产品2*/
                    .server-con-2 {
                        background: url('../../../common/images/index/modu-1/ourServer-ch-2.jpg') no-repeat;
                        background-size: cover;
                    }
                    /*产品3*/
                    .server-con-3 {
                        background: url('../../../common/images/index/modu-1/ourServer-ch-3.jpg') no-repeat;
                        background-size: cover;
                    }
                }
                @media (max-width: 1336px) {
                  width: 80%;
                }
                @media (max-width: 1366px) {
                  width: 80%;
                }
                /*首页模块1 - 切换视图2*/
                .hover-view-2 {
                    padding: 0 36px;
                    ul {
                        margin: 0;
                        padding: .2% 0 0 0;
                        li {
                            width: 30%;
                            float: left;
                            height: 240px;
                            margin: 0 34px 34px 0;
                            overflow: hidden;
                            border-radius: 4px;
                            transition: all .4s;
                            // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                            backdrop-filter: blur(0);
                            a{
                                position: relative;
                                display: inline-block;
                                background-color: #ccc;
                                text-decoration: none;
                                color: #fff;
                                .prods-info {
                                    position: absolute;
                                    top: 188px;
                                    left: 0;
                                    padding: 0 32px;
                                    padding-top: 16px;
                                    background-color: rgba(20,40,120,0.6);
                                    transition: all .4s;
                                    border-radius: 0 0 6px 6px;
                                    h3 {
                                        margin: 0 0 12px 0;
                                        text-align: center;
                                        font-weight: 700;
                                        font-size: 20px;
                                    }
                                    p {
                                        font-size: 14px;
                                        margin: 0;
                                        line-height: 20px;
                                    }
                                }
                            }
                        }
                        li:nth-of-type(3){
                          margin: 0 0 34px 0;
                        }
                        li:nth-of-type(6){
                          margin: 0 0 34px 0;
                        }
                        li:hover{
                            box-shadow: 0 10px 25px 10px rgba(0,0,150,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
                            transform: translateY(-20px);
                            .prods-info {
                                top: 0;
                                background-color: rgba(0,0,40,0.9);
                                // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                                backdrop-filter: blur(4px);
                            }
                        }

                        // 这是每个li的class,因为背景图不同，所以单拎出来写；
                        .prods-1{
                            a{
                             background: url('../../../../public/images/pacs.png') no-repeat;
                            }
                        }
                        .prods-2{
                            a{
                              background: url('../../../../public/images/ylt.png') no-repeat;
                            }
                        }
                        .prods-3{
                            a{
                              background: url('../../../../public/images/ydys.png') no-repeat;
                            }
                        }
                        .prods-4{
                            a{
                              background: url('../../../../public/images/jkgl.png') no-repeat;
                            }
                        }
                        .prods-5{
                            a{
                              background: url('../../../../public/images/mbgl.png') no-repeat;
                            }
                        }
                        .prods-6{
                            a{
                              background: url('../../../../public/images/sfxt.png') no-repeat;
                            }
                        }
                        .prods-1, .prods-2, .prods-3, .prods-4, .prods-5, .prods-6 {
                          a {
                            background-size: 80% auto;
                            background-position: center;
                            background-color: #0c1639;
                          }
                        }
                    }
                    .on-more {
                        left: 48%;
                    }
                }
                /*首页模块1 - 切换视图3*/
                .hover-view-3 {
                    padding: 0 36px;
                    ul {
                        position: relative;
                        padding: 0;
                        li {
                            width: 46%;
                            height: 46%;
                            float: left;
                            margin: 0 4% 3.9% 0;
                            border-radius: 6px;
                            overflow: hidden;
                            transition: all .4s;
                        }
                        // 因为卡片颜色不同，所以投影颜色分开写；
                        li:hover{
                            transform: translateY(-20px);
                        }
                        .reason-1:hover{
                            box-shadow: 0 10px 25px 10px rgba(65,155,19,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
                        }
                        .reason-2:hover{
                            box-shadow: 0 10px 25px 10px rgba(16,164,200,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
                        }
                        .reason-3:hover{
                            box-shadow: 0 10px 25px 10px rgba(242,159,26,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
                        }
                        .reason-4:hover{
                            box-shadow: 0 10px 25px 10px rgba(9,68,116,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
                        }
                    }
                    .on-more {
                        left: 48.4%;
                    }
                }
                // 动画效果VUE自带
                .hover-view-box-enter,
                .hover-view-box-leave-to {
                    top: -500;
                    opacity: 0;
                }

                .hover-view-box-enter-active,
                .hover-view-box-leave-active{
                    transition: all .6s ease;
                }
            }
        }
    }
}
// ================== 移动端样式 ====================
.home-cont-modu-1-mob {
  padding-top: 60px;
  height: 600px;
  .container {
    .modu1-title {
      p {
        font-size: 20px !important;
        line-height: 32px;
        padding: 0 20px;
        margin: 0 0 20px 0;
      }
    }
    .modu1-body {
      height: 250px;
      .hover-btn-box {
        position: relative;
        width: 100%;
        height: 80px;
        padding: 0 30px;
        left: 0 !important;
        display: flex;
         justify-content: space-between;
         align-items: center;
        .hover-btn-1, .hover-btn-2, .hover-btn-3 {
          position: relative;
          margin: 0;
          top: 0;
          left: 0;
          width: 80px;
          height: 30px;
          transform: translateY(0);
          img {
            position: relative;
          }
        }
        .hover-btn-1::after, .hover-btn-2::after, .hover-btn-3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          height: 3px;
          width: 1%;
          background-color: #fff;
          transition: all .4s;
        }
        .hover-btn-1 {
          transform: translateY(-1px);
        }
        .hover-btn-2 {
          transform: translateY(-4px);
        }
        .hover-btn-3 {
          transform: translateY(-2px);
        }
        .hover-line {
          display: none;
        }
        .hover-btn-active::after {
          width: 100%;
          background-color: #14948a;
        }
      }
      .hover-view-box {
        left: 0;
        top: 80px;
        bottom: 0;
        height: auto;
        width: 100%;
        .hover-view-1 {
          padding: 0 10px;
          a {
            div {
              bottom: -140px !important;
              h3 {
                font-size: 12px !important;
                line-height: 10px !important;
              }
              p {
                display: none;
              }
            }
          }
          .on-more {
            bottom: -50px;
          }
        }
        .hover-view-2 {
          padding: 0 10px;
          width: 100%;
          ul {
            padding: 0;
            li {
              height: 120px;
              margin-right: 4.8%;
              margin-bottom: 16px !important;
              a {
                div {
                  width: 100%;
                  top: 80px !important;
                  padding: 6px 2px 0 !important;
                  h3 {
                    font-size: 12px !important;
                    line-height: 20px;
                    width: 100%;
                  }
                  p {
                    display: none;
                  }
                }
              }
            }
          }
          .on-more {
            left: 50%;
            bottom: -140px;
          }
        }
        .hover-view-3 {
          padding: 0 10px;
          ul {
            margin: 0;
            li {
              margin: 0 2% 2% 0;
              /*float: none;*/
              width: 48%;
              /*height: 90%;*/
              /*margin: 0 auto 20px;*/
            }
          }
          .on-more {
            display: none;
          }
        }
      }
    }
  }
}
</style>
