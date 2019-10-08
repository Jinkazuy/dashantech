<template>
  <div class="pro-modu-3 w100">
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
        <ul class="w100">
          <li>
            <img
              class="w100 h100"
              src="http://www.dashantech.com.cn/images/logo_style.svg"
            />
          </li>
          <li>
            <img
              class="w100 h100"
              src="http://www.baidu.com/img/baidu_jgylogo3.gif"
            />
          </li>
          <li>
            <img class="w100 h100" src="../../../common/images/ds-logo.svg" />
          </li>
          <li>
            <img
              class="w100 h100"
              src="http://www.dashantech.com.cn/images/logo_style.svg"
            />
          </li>
          <li>
            <img
              class="w100 h100"
              src="http://www.dashantech.com.cn/images/logo_style.svg"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pro-modu3"
};
</script>

<style scoped lang="stylus">
.pro-modu-3 {
    position: relative;
    height: 744px;
    background-color: rgba(46,48,55,1);
    .container {
      padding: 0;
      .pro-mo3-hd {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
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
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 254px;
        height: 240px;
        width: 700px;
        ul {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 69%;
          padding: 0;
          margin: 42px 0 0 0;
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
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
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
          li {
            float: left;
            height: 80px;
            width: 19%;
            background-color: rgba(0, 0, 0, .1);
            margin: 0 1% 0 0;
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
</style>
