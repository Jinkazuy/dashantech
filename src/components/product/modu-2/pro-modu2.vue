<template>
  <div class="pro-modu-2 clearfix w100">
    <div class="pro-mo2-title">
      <img
        class="w100"
        src="../../../common/images/titles/home-title-Industry.png"
      />
    </div>
    <div class="pro-mo2-hd container">
      <ul>
        <li :class="{ 'pro-li-active': liActiveNum === 1 }" @click="proLi1">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">PACS影像云</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 2 }" @click="proLi2">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">随访系统</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 3 }" @click="proLi3">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">互联网医院信息平台</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 4 }" @click="proLi4">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">移动医生查房系统</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 5 }" @click="proLi5">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">电子胶片</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 6 }" @click="proLi6">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">区域慢病管理系统</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 7 }" @click="proLi7">
          <div class="pro-mo2-hd-illus w100">
            <img
              class="h100"
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">
            <span>智能康复管理系统</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="pro-mo2-bd">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.2"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.07"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <div class="container">
        <!--为了实现透明度变化，所以不能用数据替换，只能在这里写死，然后用transition-group标签包裹上-->
        <transition-group name="pro-mo-bd-tran-box">
          <div class="bd-info-1" :key="1" v-show="liActiveNum === 1">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>PACS影像云</h4>
              <p>
                基于现有的区域PACS、区域超声、区域心电，进一步实现区域影像数据的在各医疗机构内的共享和应用，推进胶片的按需分发，减少患者就医成本；建立影像云平台，实现影像数据的云存储和互联网调阅，方便患者检查结果的调阅，推进最多跑一次政策的执行。
              </p>
              <div class="info-btn">
                <router-link to="/productPacs">查看详情</router-link>
              </div>
            </div>
          </div>
          <div class="bd-info-2" :key="2" v-show="liActiveNum === 2">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>随访系统</h4>
              <p>
                大善随访系统解决方案随访系统将互联网、物联网技术与患者院内外医疗健康管理结合，以智能随访、智能宣教、智能提醒、健康监测、医护患沟通为患者管理主要手段，通过平台化的设计理念，为不同类型医疗机构，打造统一随访平台。
              </p>
              <div class="info-btn">
                <a href="#">查看详情</a>
              </div>
            </div>
          </div>
          <div class="bd-info-3" :key="3" v-show="liActiveNum === 3">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>互联网医院信息平台</h4>
              <p>
                互联网医院信息平台是一套集健康大数据收集、健康管理与疾病预防、网上诊疗为一体的远程医疗服务与协同信息平台，提供基于互联网的医疗卫生服务，利用互联网延伸医嘱、电子处方等网络医疗健康服务应用，从而提高医疗服务效率，保证医疗质量和医疗安全。
              </p>
              <div class="info-btn">
                <a href="#">查看详情</a>
              </div>
            </div>
          </div>
          <div class="bd-info-4" :key="4" v-show="liActiveNum === 4">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>移动医生查房系统</h4>
              <p>
                大善移动医生查房系统通过与众多医院已有的相关信息系统进行对接，实现了在移动终端设备上查看病人的基本信息、医嘱信息、电子病历、检查信息、检验信息、护理信息，同时还支持医生在终端设备上通过手写、语音以及图片的方式进行备注，很好地将医生的信息系统延伸到病人床边。
              </p>
              <div class="info-btn">
                <a href="#">查看详情</a>
              </div>
            </div>
          </div>
          <div class="bd-info-5" :key="5" v-show="liActiveNum === 5">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>电子胶片</h4>
              <p>
                电子胶片，是基于移动互联网、、云存储、云计算技术，相对于传统感光胶片而言的一种新型影像浏览应用服务。医院可通过该技术把患者的数字影像发布到云端并长期存储，为医疗机构、医生及其患者提供便捷的医学影响信息服务。
              </p>
              <div class="info-btn">
                <a href="#">查看详情</a>
              </div>
            </div>
          </div>
          <div class="bd-info-6" :key="6" v-show="liActiveNum === 6">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>医院慢病管理系统</h4>
              <p>
                大善医院慢病管理系统是致力于辅助医护人员、健康管理师更好的管理患者，为医护人员提供信息化、自动化的手段来为患者提供更优质的服务，让患者居家也能享受到医疗服务。通过专业精准的慢病评估，医护患全程与决策，针对不同患者提供健康营养套餐（食物、运动、休息，衣，食，住，行）。
              </p>
              <div class="info-btn">
                <a href="#">查看详情</a>
              </div>
            </div>
          </div>
          <div class="bd-info-7" :key="7" v-show="liActiveNum === 7">
            <div class="pro-mo2-bd-illus">
              <img
                src="../../../common/images/product/modu-2/pro-mo2-ch-ce.png"
              />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>智能康复管理系统</h4>
              <p>
                康复治疗前应先对病、伤、残者进行康复评定，然后制定一个理想的康复方案，由以康复医师为中心，和临床医学相关人员共同组成的康复治疗组去实施，并在实施过程中不断总结、评定调查，直至治疗结束。可实现康复科室的数字化、信息化和过程的管控，有效避免信息孤岛的出现，实现全员的数据共享。
              </p>
              <div class="info-btn">
                <a href="#">查看详情</a>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pro-modu2",
  data() {
    return {
      // 每个tab的代表数字
      liActiveNum: 1
    };
  },
  methods: {
    proLi1() {
      this.liActiveNum = 1;
    },
    proLi2() {
      this.liActiveNum = 2;
    },
    proLi3() {
      this.liActiveNum = 3;
    },
    proLi4() {
      this.liActiveNum = 4;
    },
    proLi5() {
      this.liActiveNum = 5;
    },
    proLi6() {
      this.liActiveNum = 6;
    },
    proLi7() {
      this.liActiveNum = 7;
    }
  }
};
</script>

<style scoped lang="stylus">
.pro-modu-2 {
    margin: 200px 0 0 0;
    height: 1146px;
    position: relative;
    .pro-mo2-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 80px;
        width: 202px;
    }
    .pro-mo2-hd {
        position: relative;
        margin-top: 220px;
        padding: 0;
        ul {
            margin: 0 auto;
            padding: 0;
            li {
                position: relative;
                margin: 0 20px 20px 0;
                float: left;
                height: 88px;
                width: 160px;
                cursor: pointer;
                .pro-mo2-hd-illus {
                    height: 40px;
                    margin-bottom: 8px;
                    display: flex;
                    justify-content: center;
                    img {
                        height: 100%;
                        opacity: .6;
                        transition: all .4s;
                    }
                }
                p {
                    text-align: center;
                    margin: 0;
                    color: rgba(23, 35, 61, 1);
                    font-size: 16px;
                    transition: all .4s;
                }
            }
            li:last-of-type {
                margin: 0;
            }
            li:hover {
              P {
                color: #14948a;
              }
            }
            li:after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                width: 0;
                height: 6px;
                background-color: #14948a;
                transition: all .4s;
            }
            li.pro-li-active {
              p {
                color: #14948a;
                font-weight: 900;
              }
              .pro-mo2-hd-illus {
                img {
                  opacity: 1;
                }
              }
            }
            li.pro-li-active:after {
                width: 60%;
            }
        }
    }
    .pro-mo2-bd {
       overflow: hidden;
       position: relative;
       width: 100%;
       height: 820px;
       background: linear-gradient(180deg,rgba(78,83,98,1) 0%,rgba(38,41,51,1) 100%);
      // 这个id是particles插件默认的id值
      // 动画效果VUE自带
      .pro-mo-bd-tran-box-enter,
      .pro-mo-bd-tran-box-leave-to {
        top: -500;
        opacity: 0;
      }

      .pro-mo-bd-tran-box-enter-active,
      .pro-mo-bd-tran-box-leave-active{
        transition: all .6s ease;
      }
      #particles-js {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background-color: transparent;
      }
      .container {
        padding: 0;
        width: 100%;
        height: 100%;
        .pro-mo2-bd-illus {
          position: absolute;
          left: 10%;
          top: 50%;
          transform: translateY(-50%);
          width: 47%;
          height: 520px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .pro-mo2-bd-info {
          position: absolute;
          right: 10%;
          top: 0;
          width: 30%;
          height: 100%;
          color: #fff;
          padding: 0 20px;
          border-left: 1px solid rgba(255, 255, 255, .04);
          border-right: 1px solid rgba(255, 255, 255, .04);
          box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
          box-sizing: border-box;
          backdrop-filter: blur(4px);
          h4 {
            padding: 0;
            margin: 140px 0 18px 0;
            font-size: 34px;
            font-weight: 700;
          }
          p {
            width: 100%;
            font-size: 16px;
            line-height: 28px;
            margin: 0 0 60px 0;
          }
          .info-btn {
            width: 110px;
            height: 32px;
            a {
              width: 100%;
              height: 100%;
              display: inline-block;
              border-radius: 30px;
              background-color: #fff
              font-size: 14px;
              line-height: 32px;
              color: #fff;
              text-decoration: none;
              background:linear-gradient(225deg,rgba(43,203,196,1) 0%,rgba(19,155,145,1) 100%);
              border:1px solid #14948a;
              transition: all .4s;
              text-align: center;
              text-shadow: 0 4px 16px rgba(0,0,0,.2);
            }
            a:hover {
              border:1px solid rgba(127,214,208,1);
              text-shadow: 0 4px 16px rgba(24,237,222,1);
              box-shadow:0 4px 16px 0 rgba(24,237,222,1);
            }
          }
        }
      }
    }
}
</style>
