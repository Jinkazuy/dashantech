<template>
  <!--navbar-wrapper navbar-shadow-->
  <div
    :class="[
      'navbar-wrapper w100',
      showNavBarShadow ? 'navbar-shadow' : '',
      navBarHeightFlage ? 'navbar-h-low' : '',
      mob ? 'navbar-wrapper-mob' : ''
    ]"
  >
    <!--从这里开始，使用bootstrap的结构-->
    <nav class="navbar navbar-default">
      <div class="container-fluid w100">
        <!--下拉折叠按钮-->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">
            <logoMg></logoMg>
          </router-link>
        </div>
        <!--常规导航栏-->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!--导航栏链接，右浮动-->
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/">首页</router-link>
              <div class="border-line border-line-home" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li @mouseenter="proRouterHover" @mouseleave="proRouterUnHover">
              <router-link to="/product">产品中心</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/newsCenter">公司动态</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/solutionCenter">解决方案</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/join">加入我们</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
            <li>
              <router-link to="/contact">联系大善</router-link>
              <div class="border-line" v-if="!mob"></div>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <!--<div class="pro-toast-wrapper "></div>-->
    <!--产品中心下拉菜单-->
    <div
      :class="[
        'pro-toast-wrapper container',
        { 'pro-toast-wrapper-hover': proLinkShow }
      ]"
      @mouseenter="proToastWrapperMouseEnter"
      @mouseleave="proToastWrapperMouseLeave"
      v-if="!mob"
    >
      <!--<div class="left-text-box">-->
      <!--<h4>{{ toastDate[toastLeftText].tit }}</h4>-->
      <!--<p>{{ toastDate[toastLeftText].p }}</p>-->
      <!--</div>-->
      <div class="right-link-box">
        <ul class="clearfix">
          <li
            v-for="(item, idx) in toastDate"
            :key="idx"
            @mouseenter="linkBoxHover(idx)"
            @click="linkBoxClick"
          >
            <router-link :to="item.routerTo">
              <div class="img-b">
                <img :src="item.liteImgSrc" />
              </div>
              <div class="tt-b">
                <h6 class="text-nowrap">{{ item.tit }}</h6>
                <p class="text-nowrap">{{ item.p }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入logo动效
import logoMg from "../logoMg";

export default {
  name: "nav-bar.vue",
  data() {
    return {
      // 导航栏高度值，为true的时候就是加类名（降低高度），false就是移除类名（正常高度）
      // 通过类名控制
      navBarHeightFlage: false,
      // 当滚动时需要获取当前的触发滚动事件时候的值，而且之后不能改变
      onscrollPosition: false,
      // 初始滚动值
      scrollTopStart: 0,
      // 当前实时滚动值
      scrollTopNow: 0,
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      mountedNum: 0,
      // 产品中心连接鼠标移入
      proLinkShow: false,
      // 因为鼠标移出产品中心会将下拉浮层隐藏，因为需要一个定时器来防止移出时立刻隐藏；
      proToastTimeout: {},
      // 下拉菜单的数据
      toastDate: [
        {
          routerTo: "/productPacs",
          tit: "PACS影像云",
          p:
            "基于现有的区域PACS、区域超声、区域心电，进一步实现区域影像数据的在各医疗机构内的共享和应用，推进胶片的按需分发，减少患者就医成本；建立影像云平台，实现影像数据的云存储和互联网调阅，方便患者检查结果的调阅，推进最多跑一次政策的执行。",
          liteImgSrc: "images/lt-ch-pacs.png"
        },
        // {
        //   routerTo: "/productFollow",
        //   tit: "随访系统",
        //   p:
        //     "大善随访系统解决方案随访系统将互联网、物联网技术与患者院内外医疗健康管理结合，以智能随访、智能宣教、智能提醒、健康监测、医护患沟通为患者管理主要手段，通过平台化的设计理念，为不同类型医疗机构，打造统一随访平台。",
        //   liteImgSrc: "images/lt-ch-sfxt.png"
        // },
        {
          routerTo: "/ProductHospitalInfo",
          tit: "xx互联网医院信息平台",
          p:
            "互联网医院信息平台是一套集健康大数据收集、健康管理与疾病预防、网上诊疗为一体的远程医疗服务与协同信息平台，提供基于互联网的医疗卫生服务，利用互联网延伸医嘱、电子处方等网络医疗健康服务应用，从而提高医疗服务效率，保证医疗质量和医疗安全。",
          liteImgSrc: "images/lt-ch-xxpt.png"
        },
        {
          routerTo: "/productWardRound",
          tit: "xx移动医生查房系统",
          p:
            "大善移动医生查房系统通过与众多医院已有的相关信息系统进行对接，实现了在移动终端设备上查看病人的基本信息、医嘱信息、电子病历、检查信息、检验信息、护理信息，同时还支持医生在终端设备上通过手写、语音以及图片的方式进行备注，很好地将医生的信息系统延伸到病人床边。",
          liteImgSrc: "images/lt-ch-ydys.png"
        },
        {
          routerTo: "/productFilm",
          tit: "xx电子胶片",
          p:
            "电子胶片，是基于移动互联网、云存储、云计算技术，相对于传统感光胶片而言的一种新型影像浏览应用服务。医院可通过该技术把患者的数字影像发布到云端并长期存储，为医疗机构、医生及其患者提供便捷的医学影响信息服务。",
          liteImgSrc: "images/lt-ch-dzjp.png"
        },
        {
          routerTo: "/productIllMG",
          tit: "xx医院慢病管理系统",
          p:
            "大善医院慢病管理系统是致力于辅助医护人员、健康管理师更好的管理患者，为医护人员提供信息化、自动化的手段来为患者提供更优质的服务，让患者居家也能享受到医疗服务。通过专业精准的慢病评估，医护患全程与决策，针对不同患者提供健康营养套餐（食物、运动、休息，衣，食，住，行）。",
          liteImgSrc: "images/lt-ch-mbgl.png"
        },
        {
          routerTo: "/productRecovery",
          tit: "xx智能康复管理系统",
          p:
            "康复治疗前应先对病、伤、残者进行康复评定，然后制定一个理想的康复方案，由以康复医师为中心，和临床医学相关人员共同组成的康复治疗组去实施，并在实施过程中不断总结、评定调查，直至治疗结束。可实现康复科室的数字化、信息化和过程的管控，有效避免信息孤岛的出现，实现全员的数据共享。",
          liteImgSrc: "images/lt-ch-jkgl.png"
        },
        // {
        //   routerTo: "/productYLT",
        //   tit: "城市医疗联合体信息平台",
        //   p: "“以治病为中心向以健康为中心转变",
        //   liteImgSrc: "images/lt-ch-ylt.png"
        // },
        // {
        //   routerTo: "/productRegionalCloud",
        //   tit: "区域医疗影像及诊断云平台",
        //   p:
        //     "区域医疗影像与诊断云平台是指为一定区域内居民提供代表该区域先进水平的医疗服务，承担一定的人才培养、医学科研、教学等任务的医院，区域阅片中心同时承担服务区域突发公共卫生事件的医疗救治和技术支持。其",
        //   liteImgSrc: "images/lt-ch-qyyyx.png"
        // },
        // {
        //   routerTo: "/productIntensiveCare",
        //   tit: "重症护理信息管理平台",
        //   p: "支持多品牌监护设备实时集中监控",
        //   liteImgSrc: "images/lt-ch-zzhl.png"
        // },
        // {
        //   routerTo: "/productWiseCare",
        //   tit: "智慧护理管理系统",
        //   p: "让新技术、新突破帮助医护人员更好的实现对人的照护和关怀",
        //   liteImgSrc: "images/lt-ch-zhhl.png"
        // },
        // {
        //   routerTo: "/productClinicalDrug",
        //   tit: "药物临床试验系统",
        //   p:
        //     "保证系统独立性的同时确保系统的可扩展性，满足I、II、III、IV期临床试验的需求",
        //   liteImgSrc: "images/lt-ch-ywlcsy.png"
        // },
        // {
        //   routerTo: "/productHemodialysis",
        //   tit: "血液透析信息管理平台",
        //   p:
        //     "采用信息化手段来促进血液透析中心的管理、运行效率，提高透析安全性及透析质量，已成为目前血液透析中心的重要发展方向。",
        //   liteImgSrc: "images/lt-ch-xytx.png"
        // }
        // ,
        {
          routerTo: "/productRegionalSlow",
          tit: "xx区域慢病管理系统",
          p: "为区域患者提供统一标准化服务",
          liteImgSrc: "images/lt-ch-qymb.png"
        }
      ],
      // 下拉菜单左侧文案的索引, 默认是1，也就是pacs,当鼠标移入每个li的时候，文案的索引跟着改变；
      toastLeftText: 0
    };
  },
  props: ["showNavBarShadow", "mob"],
  mounted() {
    // 监听页面实时滚动值，从而控制导航栏高度的值；
    window.addEventListener("scroll", this.pageScroll);
  },
  methods: {
    // 实时监听浏览器滚动值、监听页面滚动、监听滚动
    // 1、当标记值为height或者low的时候，分别监听滚动的正数和复数
    pageScroll() {
      // 解决mounted钩子触发多次的问题,因为浏览器DOM结构变化会导致mounted多次触发
      if (this.mountedNum < 3) {
        this.mountedNum++;
        return;
      }

      // 当滚动时需要获取当前的触发滚动事件时候的值，而且之后不能改变
      if (!this.onscrollPosition) {
        // 获取初始位置
        this.scrollTopStart = this.scrollTopPosition();
        // console.log("初始位置 => " + this.scrollTopStart);
        // 然后马上关闭这个节流阀，从而将此变量固定为触发滚动开始时的数值；
        // console.log("初始位置" + this.scrollTopStart);
        this.onscrollPosition = true;
      }

      // 之后还要获取实时滚动值，作为对比判断；
      this.scrollTopNow = this.scrollTopPosition();
      // console.log("实时位置 =>" + this.scrollTopNow);

      // 如果导航栏高度为正常，也就是80px时，监听滚动的正数值，也就是页面向下滚动
      if (
        parseInt(this.scrollTopNow - this.scrollTopStart) > 80 &&
        !this.navBarHeightFlage
      ) {
        // 如果滚动制超过正80px，就给导航栏加上一个类名，从而将导航栏高度降低；
        // console.log("加类名========================");
        this.navBarHeightFlage = true;
        // 将获取初始位置的节流阀打开
        this.onscrollPosition = false;
      } else {
        setTimeout(() => {
          // 滚动之后，还要重新获取初始位置
          this.scrollTopStart = this.scrollTopPosition();
          // console.log("初始位置" + this.scrollTopStart);
        }, 500);
      }

      // 如果滚动值小于-100px 并且 此时导航栏高度为低版，那么就进行判断；
      if (
        parseInt(this.scrollTopNow - this.scrollTopStart) < -80 &&
        this.navBarHeightFlage
      ) {
        // console.log("移除类名======================");
        this.navBarHeightFlage = false;
        // 将获取初始位置的节流阀打开
        this.onscrollPosition = false;
      } else {
        setTimeout(() => {
          // 滚动之后，还要重新获取初始位置
          this.scrollTopStart = this.scrollTopPosition();
          // console.log("初始位置" + this.scrollTopStart);
        }, 500);
      }
    },
    // 获取浏览器距离顶部的位置
    scrollTopPosition() {
      return (
        // 浏览器兼容
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      );
    },
    // 产品中心hover
    proRouterHover() {
      // 在  不是  移动端的情况下才能展开下拉菜单；
      if (!this.mob) {
        this.proLinkShow = true;
      }
    },
    proRouterUnHover() {
      // 移出产品中心A标签时，设置一个定时器延迟隐藏下拉浮层的时间；
      // ∵ 因为用了Bootstrap的框架，所以navbar的ul li标签调整高度后会影响其他分辨率下的样式，
      // ∴ 所以，在鼠标移出'产品中心'连接的时候，设置一个200毫秒的延迟，用户一般在200毫秒可以移入下拉的浮层
      //    那么在鼠标移入这个浮层时，清除这个定时器即可；
      // PSPSPSPS：另一个实现思路，当鼠标移出整个navigationBar（包括下拉浮层）时，隐藏下拉浮层； && 当鼠标移入其他navLink时，隐藏下拉浮层；
      this.proToastTimeout = setTimeout(() => {
        this.proLinkShow = false;
      }, 200);
    },
    // 鼠标移入下拉产品中心下拉浮层时，清除定时器；
    proToastWrapperMouseEnter() {
      this.proLinkShow = true;
      clearTimeout(this.proToastTimeout);
    },
    proToastWrapperMouseLeave() {
      this.proLinkShow = false;
    },
    // 鼠标移入下拉浮层的右侧的每个router时，改变左侧的文案的内容
    linkBoxHover(idx) {
      this.toastLeftText = idx;
    },
    // 点击每个下拉浮层的其中的link后，收起浮层
    linkBoxClick() {
      this.proLinkShow = false;
    }
  },
  components: {
    logoMg
  }
};
</script>

<style scoped lang="stylus">
  /*重置bootstrap样式=======开始=============*/
  .navbar {
    border: none;
    display: flex;
    top: 0;
    left: 50%;
    min-height: 80px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-50%)
    background-color: #fff;
    padding: 0 !important;
    transition: all .5s;
    z-index: 999;
    .container-fluid {
      padding: 0 !important;
      // logo
      .navbar-brand {
        width: 170px;
        height: 50px;
        padding: 0;
        margin-left: 28px !important;
        border-radius: 25px;
        position: relative;
        .ds-logo-navBar {
          z-index: 99;
        }
      }
      // 弥散投影
      .navbar-brand::after {
        content: '';
        width: 80%;
        height: 50%;
        position: absolute;
        bottom: -2px;
        left: 10%;
        filter: blur(14px);
        border-radius: 14px;
        background-color: #1addcf;
        z-index: -1;
        /*transition: all .4s;*/
      }
      // 鼠标移入弥散投影
      .navbar-brand:hover::after {
        animation-name: shadowTwinkle;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-delay: 0;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-play-state: running;
      }
      @keyframes shadowTwinkle {
        from {filter: blur(14px); bottom: -2px;}
        to {filter: blur(0); bottom: 10px;}
      }
    }
  }
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .navbar-collapse{
    height: 100%;
    align-items: center;
    color: #999;
  }
  .navbar-right {
    margin-top: 0 !important;
    height: 100%;
    li {
      color: #ccc;
      position: relative;
      /*下划线*/
      .border-line{
        position: absolute;
        bottom: 8px;
        width:0;
        height: 2px;
        background-color: #ccc;
        border-radius: 2px;
        transform: translateX(44px);
        transition: all 0.4s;
      }
      a {
        font-size: 16px;
        color: #808695 !important;
        font-weight: 400;
      }
    }
    li:first-of-type {
      /*下划线-首页，因为字数少2个，所以下划线偏移量少*/
      .border-line {
        transform: translateX(28px);
      }
    }
    li:hover {
      /*鼠标移入下划线*/
      .border-line{
        width: 66%;
        transform: translateX(26%);
      }
      a {
        /*font-weight: 800;*/
        color: #14948a !important;
      }
    }
  }
  @media (max-width: 768px){
    /*小尺寸折叠导航栏高度重置*/
    .container-fluid {
      .navbar-header{
        height: 80px;
        padding-top: 14px;
      }
    }
    /*小尺寸折叠导航按钮  */
    .navbar-toggle {
      margin-right: 40px;
    }
  }
  //解决在此分辨率下导航栏出现折叠bug
  @media (min-width: 768px) and (max-width: 992px){
    .container-fluid {
      .navbar-header{
        .navbar-brand {
          margin-left: 30px !important;
        }
      }
      .navbar-right{
        margin-left: 10px !important;
        li{
          a {
            font-size: 14px;
            padding: 10px 10px;
          }
        }
      }
    }
  }
    /*重置bootstrap样式=======结束=============*/

/*导航栏最外层样式*/
.navbar-wrapper{
  border-bottom: 2px solid #14948a;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 80px;
  z-index: 99999;
  box-shadow:0 1px 0 0 rgba(0,0,0,.05);
  transition: all .5s;
  // 将BS的导航栏按钮清除右侧浮动,需要一层一层找到；
  .navbar {
    border-radius: 0 !important;
    border-bottom: 2px solid #14948a;
    box-sizing: border-box;
    .container-fluid {
      .navbar-collapse {
        .navbar-right {
          float: left !important;
          margin: 6px 0 0 100px;
        }
      }
    }
  }
}
// 导航栏投影控制
.navbar-shadow {
  box-shadow:0 4px 8px 0 rgba(0,0,0,.1);
}
// 导航栏高度控制
.navbar-h-low {
  height: 60px;
  .navbar {
    min-height: 60px
  }
  .navbar-brand::after {
    bottom: 10px !important;
  }
}
//超小屏幕
@media (min-width: 200px) {
  .navbar {
    width: 100%;
  }
}
//小屏幕
@media (min-width: 768px) {
    .navbar {
        width: 768px;
    }
}
//中等屏幕
@media (min-width: 992px) {
    .navbar {
        width: 992px;
    }
}
//大屏幕：1336px~更高
@media (min-width: 1336px) {
    .navbar {
        width: 1336px;
        padding: 0 20px 0;
    }
}
.dslogo {
    width: 200px;
  }

/*导航栏当前页选中router样式*/
/*下划线*/
/* // 这里是 router-link 标签被激活，也就是访问哈希值匹配的时候，vue-router 会给这个link标签加上一些类名 */
/* // 所以在这个类名就能设置按钮被激活时候设置高亮的样式，也就是类似APP里的Tabbar激活样式差不多 */
/*文字*/
.router-link-exact-active.router-link-active{
  font-weight: 800;
  color: #14948a !important;
}
/*下划线*/
.router-link-exact-active.router-link-active+div{
  width: 66%;
  height: 2px;
  background-color: #14948a;
  border-radius: 2px;
  transform: translateX(26%);
}
/*因为首页少两个字，所以重置下划线偏移量*/
.router-link-exact-active.router-link-active+div.border-line-home{
  transform: translateX(26%);
}
// 产品中心浮层模块；
.pro-toast-wrapper {
  height: auto;
  padding: 0;
  background-color: #fff;
  border: 2px solid #14948a;
  margin: -20px auto 0;
  transition: all .4s;
  transform: translateY(-101%);
  border-top: 1px solid rgba(0,0,0,0);
  z-index: -99;
  box-shadow:0 1px 0 0 rgba(0,0,0,0);
  box-sizing: border-box;
  .left-text-box {
    width: 30%;
    height: 100%;
    background-color: #14948a;
    padding: 24px;
    color: #fff;
    h4 {
      margin: 12px 0 24px;
      font-size: 20px;
      font-weight: 700;
    }
    p {
      margin: 0;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .right-link-box {
    height: auto;
    width: 100%;
    padding: 0;
    ul {
      height: auto;
      width: 100%;
      padding: 0;
      li {
        float: left;
        display: flex;
        align-items: center;
        width: 20%;
        height: 60px;
        margin: 2%;
        a {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          .img-b{
            position: absolute;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            img {
              width: 100%;
              opacity: .3;
              transition: all .4s;
            }
          }
          .tt-b{
            position: absolute;
            left: 72px;
            right: 0;
            top: 0;
            bottom: 0;
            h6 {
              margin: 8px 0 8px;
              font-size: 16px;
              font-weight: 700;
              color: #17233D;
              transition: all .4s;
            }
            p {
              font-size: 12px;
              color: #808695;
              padding: 0 8px 0 0;
              transition: all .4s;
            }
          }
        }
        a:hover {
          .img-b {
            img {
              opacity: 1;
            }
          }
          .tt-b {
            h6 {
              color: #14948a;
            }
            p {
              color: #17233D;
            }
          }
        }
      }
    }
  }
}
.pro-toast-wrapper-hover {
  transform: translateY(0);
  border-top: 1px solid rgba(0,0,0,.05);
  box-shadow:0 10px 20px 0 rgba(0,0,0,.1);
}
// =========== 移动端样式 =============
.navbar-wrapper-mob {
  height: 60px;
  .navbar{
    min-height: 60px;
    .container-fluid {
      .navbar-header {
        height: 60px;
        padding-top: 0;
        // 按钮
        .navbar-toggle {
          margin-top: 14px;
          margin-right: 30px;
        }
        // logo
        .navbar-brand {
          margin-top: 16px;
          height: 30px;
          width: 102px;
          .log-mg {}
        }
      }
      // 下拉菜单
      #bs-example-navbar-collapse-1 {
        ul.navbar-nav {
          margin: 0 auto;
          padding: 6px 0;
          li {
            background-color: #eee;
            border-radius: 2px;
            float: left;
            width: 30%;
            margin: 1.5%;
            a {
              text-align: center;
            }
            a.router-link-exact-active {
            }
          }
        }
      }
    }
  }
}
</style>
