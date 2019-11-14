<template>
  <div :class="['pro-modu-2', 'clearfix', 'w100', mob ? 'pro-modu-2-mob' : '']">
    <div class="pro-mo2-title">
      <img
        class="w100"
        src="../../../common/images/titles/home-title-Industry.png"
      />
    </div>
    <div class="pro-mo2-hd container">
      <ul>
        <li
          :class="{ 'pro-li-active': liActiveNum === item.showNumber }"
          @click="proLi(item.showNumber)"
          v-for="item in proInfoData"
          :key="item.showNumber"
        >
          <div class="pro-mo2-hd-illus w100">
            <img class="h100" :src="item.imgLtSrc" />
          </div>
          <p class="pro-mo2-hd-text">{{ item.h4 }}</p>
        </li>
      </ul>
    </div>
    <div class="pro-mo2-bd">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.1"
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
          <div
            v-for="itm in proInfoData"
            class="bd-info-1"
            :key="itm.showNumber"
            v-show="liActiveNum === itm.showNumber"
          >
            <div class="pro-mo2-bd-illus">
              <img :src="itm.imgBigSrc" />
            </div>
            <div class="pro-mo2-bd-info">
              <h4>{{ itm.h4 }}</h4>
              <p>{{ itm.p }}</p>
              <div class="info-btn">
                <router-link :to="itm.routerTo">查看详情</router-link>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
// 引入混入函数文件，拿到各个产品的详细信息；
import { productInfo } from "../../../common/js/mixin";
export default {
  name: "pro-modu2",
  props: ["mob"],
  // 引入混入函数文件，拿到各个产品的详细信息；
  // 那么就可以通过this.xx拿到产品mixin.js中的产品信息；
  mixins: [productInfo],
  data() {
    return {
      // 每个tab的代表数字
      liActiveNum: 7
      // 产品信息详情模块数据
      // 使用混入函数引入
    };
  },
  methods: {
    proLi(idx) {
      this.liActiveNum = idx;
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
                width: 200px;
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
       // background: linear-gradient(180deg,rgba(78,83,98,1) 0%,rgba(38,41,51,1) 100%);
       background: rgba(14,24,51,1);
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
          width: 50%;
          /*height: 520px;*/
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
            font-size: 30px;
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
// ============== 移动端样式 ==============
.pro-modu-2-mob {
  height: auto;
  margin: 0;
  border-bottom: 2px solid #14948a;
  .pro-mo2-title {
    width: 100px;
    top: 40px;
  }
  .pro-mo2-hd {
    margin-top: 140px;
    ul {
      li {
        width: 80px;
        height: 100px;
        padding-bottom: 20px;
        margin: 0 10px 10px 0;
        .pro-mo2-hd-illus {}
        .pro-mo2-hd-text {
          font-size: 12px;
        }
      }
    }
  }
  .pro-mo2-bd {
    height: 340px;
    .container {
      .pro-mo2-bd-illus {
        opacity: .3;
        height: 80%;
        width: 80%;
        left: auto;
        right: 10%;
      }
      .pro-mo2-bd-info {
        width: 80%;
        h4 {
          font-size: 16px;
          line-height: 26px;
          margin: 20px 0;
        }
        p {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
