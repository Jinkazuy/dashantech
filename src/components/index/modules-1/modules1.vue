<template>
  <div class="home-cont-modu-1">
    <div class="container">
      <div class="modu1-title">
        <p class="ft-sz-40">
          大善科技始终秉承着“中国科技、服务华人”的经营理念<br />专注大健康医疗领域深度挖掘
        </p>
      </div>
      <div class="modu1-body">
        <div class="hover-btn-box">
          <div class="hover-btn-1" @click="hoverBtn1Cl">
            <img
              src="../../../common/images/titles/about-title-OurServiceContent.png"
            />
          </div>
          <div class="hover-btn-2" @click="hoverBtn2Cl">
            <img src="../../../common/images/titles/home-title-Industry.png" />
          </div>
          <div class="hover-btn-3" @click="hoverBtn3Cl">
            <img src="../../../common/images/titles/about-title-Reasons.png" />
          </div>
          <div
            class="hover-line"
            :style="{ top: modu1HoverLinePos + 'px' }"
          ></div>
        </div>
        <div class="hover-view-box">
          <transition-group name="hover-view-box">
            <!--切换显示的第一项-->
            <div class="hover-view-1" v-show="modu1HoverView === 1" :key="1">
              <a class="server-con-1" href="#">
                <div class="server-con-info">
                  <h3>医疗大健康平台</h3>
                  <p>
                    依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
                  </p>
                </div>
              </a>
              <a class="server-con-2" href="#">
                <div class="server-con-info">
                  <h3>医疗大健康平台</h3>
                  <p>
                    依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
                  </p>
                </div>
              </a>
              <a class="server-con-3" href="#">
                <div class="server-con-info">
                  <h3>医疗大健康平台</h3>
                  <p>
                    依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
                  </p>
                </div>
              </a>
              <div class="on-more">
                <a href="#" class="ft-sz-14">查看更多</a>
              </div>
            </div>
            <!--切换显示的第二项-->
            <div class="hover-view-2" v-show="modu1HoverView === 2" :key="2">
              <ul>
                <li class="prods-1">
                  <a href="#">
                    <div class="prods-info">
                      <h3>标题标题标题标题</h3>
                      <p>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                      </p>
                    </div>
                  </a>
                </li>
                <li class="prods-2">
                  <a href="#">
                    <div class="prods-info">
                      <h3>标题标题标题标题</h3>
                      <p>
                        大善移动医生查房系统通过与众多医院已有的相关信息系统进行对接，实现了在移动终端设备上查看病人的基本信息、医嘱信息、电子病历、检查信息、检验信息、护理信息，同时还支持医生在终端设备上通过手写、语音以及图片的方式进行备注，很好地将医生的信息系统延伸到病人床边。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="prods-3">
                  <a href="#">
                    <div class="prods-info">
                      <h3>标题标题标题标题</h3>
                      <p>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                      </p>
                    </div>
                  </a>
                </li>
                <li class="prods-4">
                  <a href="#">
                    <div class="prods-info">
                      <h3>标题标题标题标题</h3>
                      <p>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                      </p>
                    </div>
                  </a>
                </li>
                <li class="prods-5">
                  <a href="#">
                    <div class="prods-info">
                      <h3>标题标题标题标题</h3>
                      <p>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                      </p>
                    </div>
                  </a>
                </li>
                <li class="prods-6">
                  <a href="#">
                    <div class="prods-info">
                      <h3>标题标题标题标题</h3>
                      <p>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="on-more">
                <a href="#" class="ft-sz-14">查看更多</a>
              </div>
            </div>
            <!--切换显示的第三项-->
            <div class="hover-view-3" v-show="modu1HoverView === 3" :key="3">
              <ul>
                <li class="reason-1">
                  <a href="#"
                    ><img
                      src="../../../common/images/index/testillus.png"
                      alt=""
                  /></a>
                </li>
                <li class="reason-2">
                  <a href="#"
                    ><img
                      src="../../../common/images/index/testillus.png"
                      alt=""
                  /></a>
                </li>
                <li class="reason-3">
                  <a href="#"
                    ><img
                      src="../../../common/images/index/testillus.png"
                      alt=""
                  /></a>
                </li>
                <li class="reason-4">
                  <a href="#"
                    ><img
                      src="../../../common/images/index/testillus.png"
                      alt=""
                  /></a>
                </li>
              </ul>
              <div class="on-more">
                <a href="#" class="ft-sz-14">查看更多</a>
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
  data() {
    return {
      // 首页内容模块1相关============
      // 首页内容模块1 - 点击左侧icon 切换右侧显示内容 && 让竖条的位置变化； 34  232   430
      modu1HoverLinePos: 34,
      modu1HoverView: 1
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
    width: 100%;
    padding-top: 220px;
    height: 1135px;
    .container {
        display: block;
        .modu1-title {
            width: 100%;
            p {
                margin: 0 0 108px 0;
                width: 100%;
                text-align: center;
                color: #17233D;
                font-weight: 700;
                line-height: 56px;
            }
        }
        .modu1-body {
            height: 518px;
            width: 100%;
            padding: 0 58px;
            position: relative;
            .hover-btn-box {
                position: absolute;
                padding: 42px 26px 42px 0;
                box-sizing: border-box;
                left: 0;
                top: 0;
                height: 100%;
                width: 174px;
                border-right: 1px solid rgba(216,216,216,0.5);
                .hover-btn-1, .hover-btn-2, .hover-btn-3 {
                    position: absolute;
                    right: 26px;
                    width: 160px;
                    height: 60px;
                    cursor: pointer;
                    img {
                        height: 100%;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
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
                    width: 100%;
                    height: 100%;
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
                top: 0;
                right: 0;
                height: 100%;
                .hover-view-1, .hover-view-2, .hover-view-3 {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
                /*首页模块1 - 切换视图1*/
                .hover-view-1 {
                    padding: 0 36px;
                    display: flex;
                    justify-content: space-between;
                    .server-con-1, .server-con-2, .server-con-3 {
                        position: relative;
                        display: block;
                        height: 100%;
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
                            width: 100%;
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
                        background: url('../../../common/images/index/testillus.png') no-repeat;
                        background-size: cover;
                    }
                    /*产品2*/
                    .server-con-2 {
                        background: url('../../../common/images/index/testillus.png') no-repeat;
                        background-size: cover;
                    }
                    /*产品3*/
                    .server-con-3 {
                        background: url('../../../common/images/index/testillus.png') no-repeat;
                        background-size: cover;
                    }
                }
                /*首页模块1 - 切换视图2*/
                .hover-view-2 {
                    padding: 0 36px;
                    ul {
                        width: 100%;
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
                                width: 100%;
                                height: 100%;
                                background-color: #ccc;
                                text-decoration: none;
                                color: #fff;
                                .prods-info {
                                    position: absolute;
                                    top: 188px;
                                    left: 0;
                                    height: 100%;
                                    padding: 0 32px;
                                    padding-top: 16px;
                                    background-color: rgba(40, 40, 50, 0.7)
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
                        li:hover{
                            box-shadow: 0 10px 25px 10px rgba(0,0,150,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
                            transform: translateY(-20px);
                            .prods-info {
                                top: 0;
                                background-color: rgba(40, 40, 50, 0.9);
                                // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                                backdrop-filter: blur(4px);
                            }
                        }
                        // 这是每个li的class,因为背景图不同，所以单拎出来写；
                        .prods-1{
                            a{
                                background: url('../../../common/images/index/testillus.png') no-repeat;
                                background-size: cover;
                            }
                        }
                        .prods-2{
                            a{
                                background: url('../../../common/images/index/testillus.png') no-repeat;
                                background-size: cover;
                            }
                        }
                        .prods-3{
                            a{
                                background: url('../../../common/images/index/testillus.png') no-repeat;
                                background-size: cover;
                            }
                        }
                        .prods-4{
                            a{
                                background: url('../../../common/images/index/testillus.png') no-repeat;
                                background-size: cover;
                            }
                        }
                        .prods-5{
                            a{
                                background: url('../../../common/images/index/testillus.png') no-repeat;
                                background-size: cover;
                            }
                        }
                        .prods-6{
                            a{
                                background: url('../../../common/images/index/testillus.png') no-repeat;
                                background-size: cover;
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
                        width: 100%;
                        height: 100%;
                        li {
                            width: 46%;
                            height: 46%;
                            float: left;
                            margin: 0 4% 3.9% 0;
                            border-radius: 6px;
                            overflow: hidden;
                            transition: all .4s;
                            a {
                                width: 100%
                                height: 100%;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
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
</style>
