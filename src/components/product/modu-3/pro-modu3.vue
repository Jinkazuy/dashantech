<template>
  <div :class="['pro-modu-3', 'w100', mob ? 'pro-modu-3-mob' : '']">
    <div class="pro-modu-bg w100 h100"></div>
    <div class="container h100">
      <div class="pro-mo3-hd w100">
        <h4>为什么选择大善科技</h4>
        <p>
          多年耕耘于大健康医疗产业，积累了丰富的行业经验及实施方案。拥有国内众多一线客户的一致好评。
        </p>
      </div>
      <div class="pro-mo3-bd">
        <ul>
          <li>
            <div class="ill">
              <img
                class="w100 h100"
                src="../../../common/images/about/modu-2/ch-rc.png"
              />
            </div>
            <div class="num w100">
              <span class="number">107位</span>
              <p class="p-type">技术人才</p>
            </div>
          </li>
          <li>
            <div class="ill">
              <img
                class="w100 h100"
                src="../../../common/images/about/modu-2/ch-zj.png"
              />
            </div>
            <div class="num w100">
              <span class="number">500位</span>
              <p class="p-type">行业专家</p>
            </div>
          </li>
          <li>
            <div class="ill">
              <img
                class="w100 h100"
                src="../../../common/images/about/modu-2/ch-zl.png"
              />
            </div>
            <div class="num w100">
              <span class="number">79项</span>
              <p class="p-type">技术专利</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="pro-mo3-ft w100">
        <p class="w100">合作伙伴共建专业稳定医疗大数据服务</p>
        <ul class="w100 clearfix">
          <li v-for="(item, idx) in cooperationImg" :key="idx">
            <img class="w100 h100" :src="item.imgSrc" :title="item.hoverTit" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pro-modu3",
  props: ["mob"],
  data() {
    return {
      // 合作商logo数据
      cooperationImg: [
        {
          idx: 1,
          imgSrc: "images/logo-chmia.svg",
          hoverTit: "中国卫生信息与健康医疗大数据学会"
        },
        {
          idx: 2,
          imgSrc: "images/CMWA.png",
          hoverTit: "中国女医师协会"
        }
        // ,
        // {
        //   idx: 3,
        //   imgSrc: "images/logo-chmia.svg",
        //   hoverTit: "中国卫生信息与健康医疗大数据学会"
        // },
        // {
        //   idx: 4,
        //   imgSrc: "images/logo-chmia.svg",
        //   hoverTit: "中国卫生信息与健康医疗大数据学会"
        // },
        // {
        //   idx: 5,
        //   imgSrc: "images/logo-chmia.svg",
        //   hoverTit: "中国卫生信息与健康医疗大数据学会"
        // }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.pro-modu-3 {
    position: relative;
    height: auto;
    background-color: rgba(46,48,55,1);
    .container {
      padding: 0;
      display: block;
      .pro-mo3-hd {
        margin: 0 auto 80px;
        height: 190px;
        text-align: center;
        color: #fff;
        padding-top: 80px;
        box-sizing: border-box;
        h4 {
          margin: 0 0 28px 0;
          font-size: 50px;
          line-height: 1;
        }
        p {
          font-size: 20px;
        }
      }
      .pro-mo3-bd {
        margin: 0 auto 40px;
        height: 240px;
        width: 700px;
        ul {
          margin: 0 auto;
          width: 100%;
          padding: 0;
          display: flex;
          justify-content: space-between;
          li {
            width: 140px;
            height: 180px;
            position: relative;
            .ill {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 0;
              width: 96px;
              height: 84px;
              transition: all .4s;
              img {
                z-index: 10;
              }
            }
            .ill::after {
              content: '1';
              position: absolute;
              left: 50%;
              top: 70%;
              transform: translateX(-50%) translateY(-50%);
              transition: all .4s;
              width: 50%;
              height: 50%;
              background-color: #14948a;
              opacity: 0;
              z-index: 3;
              filter: blur(40px);
            }
            .num {
              position: absolute;
              top: 84px;
              left: 50%;
              transform: translateX(-50%);
              line-height: 1;
              margin-top: 14px;
              text-align: center;
              vertical-align: top;
              .number {
                font-size: 40px;
                color: rgba(33, 218, 204, 1);
                font-weight: 700;
              }
              .p-type {
                font-size: 16px;
                color: #fff;
                line-height: 40px;
              }
            }
          }
          li:hover {
            .ill {
              top: -20px;
            }
            .ill::after {
              opacity: 1;
            }
          }
        }
      }
      .pro-mo3-ft {
        margin: 0 auto 80px;
        bottom: 50px;
        color: #fff;
        @media (max-width: 1336px) {
          width: 90%;
        }
        @media (max-width: 1366px) {
          width: 90%;
        }
        p {
          font-size: 20px;
          margin: 0 0 40px 0;
          text-align: center;
        }
        ul {
          padding: 0;
          // 下方width和margin是在少量合作logo的时候启用就行；
          // 如果横排多个的话，就可以注释掉了；
          width: 50%;
          margin: 0 auto;
          li {
            float: left;
            margin: 0 1% 1% 0;
            height: 80px;
            width: 48%;
            background-color: rgba(0, 0, 0, .1);
            img {
              padding: 10px;
            }
          }
        }
      }
    }
    .pro-modu-bg {
      position: absolute;
      left: 0;
      top: 0;
      background-image: url("../../../common/images/product/modu-3/pro-mo3-bg.png")
      background-size: cover;
      background-position: center;
      animation: bg-fls 3s ease 0s infinite alternate;
    }
    @keyframes bg-fls {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
}
// ============== 移动端样式 ===========
.pro-modu-3-mob {
  height: auto;
  .container {
    display: block;
    .pro-mo3-hd {
      position: relative;
      margin: 0 0 40px;
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 12px;
        padding: 0 40px;
      }
    }
    .pro-mo3-bd {
      position: relative;
      top: 0;
      width: 100%;
      ul {
        margin: 0;
        width: 100%;
        li {
          .num {
            .number {
              font-size: 20px;
            }
            .p-type {
              font-size: 12px;
            }
          }
        }
      }
    }
    .pro-mo3-ft {
      position: relative;
      &>p {
        font-size: 12px;
        margin: 0 0 16px;
      }
      ul {
        li {
          height: 50px;
        }
      }
    }
  }
}
</style>
