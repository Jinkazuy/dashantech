<template>
  <div id="bottom">
    <div class="container">
      <div class="bottom-header">
        <div class="bt-logo">
          <div class="shadow-blur"></div>
          <img src="../../common/images/ds-logo.png" />
        </div>
        <ul>
          <li>
            <i class="icon iconfont icondianhua"></i>
            <span class="text">010 - 57220697</span>
          </li>
          <li>
            <i class="icon iconfont iconyouxiang-cuxiantiao-fill"></i>
            <span class="text email">supportyou@dashantech.com.cn</span>
          </li>
          <li>
            <a
              class="map-link"
              target="_blank"
              href="https://map.baidu.com/poi/%E5%A4%A7%E5%96%84%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@12947142.56,4818307.47,12z?uid=91dd81486fd3d57a26e0a0e2&primaryUid=4017263196093995871&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
            >
              <i class="icon iconfont iconditu"></i>
              <span class="text">北京南四环西路128号 - 诺德中心4号,楼8层</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="bottom-cont">
        <div class="lg-d">
          <img src="../../../public/images/Shan.png" />
        </div>
        <ul class="clearfix">
          <li class="bottom-nav">
            <h3 class="bottom-nav-title">网站导航</h3>
            <ul class="nav-list">
              <li><router-link to="/home">首页</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
              <li><router-link to="/product">产品中心</router-link></li>
              <li><router-link to="/newsCenter">公司动态</router-link></li>
              <li><router-link to="/solutionCenter">解决方案</router-link></li>
              <li><router-link to="/join">加入我们</router-link></li>
              <li><router-link to="/contact">联系大善</router-link></li>
            </ul>
          </li>
          <li class="cooperation">
            <h3 class="bottom-nav-title">商务合作</h3>
            <ul class="nav-list">
              <li>
                <ul class="add">
                  <li>华北地区</li>
                  <li class="num">张先森 13800138000</li>
                  <li class="num">王旅四 13800138000</li>
                </ul>
                <ul class="add">
                  <li>华北地区</li>
                  <li class="num">张先森 13800138000</li>
                  <li class="num">王旅四 13800138000</li>
                  <li class="num">王旅四 13800138000</li>
                </ul>
                <ul class="add">
                  <li>华北地区</li>
                  <li class="num">张先森 13800138000</li>
                  <li class="num">王旅四 13800138000</li>
                </ul>
                <ul class="add">
                  <li>华北地区</li>
                  <li class="num">张先森 13800138000</li>
                  <li class="num">王旅四 13800138000</li>
                  <li class="num">王旅四 13800138000</li>
                </ul>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li class="programme">
            <h3 class="bottom-nav-title">行业方案</h3>
            <ul class="nav-list">
              <li><a href="#">PACS影像云</a></li>
              <li><a href="#">随访系统</a></li>
              <li><a href="#">互联网医院信息平台</a></li>
              <li><a href="#">移动医生查房系统</a></li>
              <li><a href="#">电子胶片</a></li>
              <li><a href="#">区域慢病管理系统</a></li>
              <li><a href="#">智能康复管理系统</a></li>
            </ul>
          </li>
        </ul>
        <div class="follow">
          <span>关注我们</span>
          <div class="wechat-icon-wrapper">
            <i class="wechat-icon iconfont iconweixin"></i>
            <div class="qr-code">
              <img src="../../common/images/qr.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="border-t"></div>
        <ul class="find-link">
          <li><a href="#">服务条款</a></li>
          <span class="space"></span>
          <li><a href="#">隐私政策</a></li>
          <span class="space"></span>
          <li><a href="#">各种友链</a></li>
        </ul>
        <!--<div class="text-switch">-->
          <!--<i></i>-->
          <!--<span>切换语言</span>-->
        <!--</div>-->
        <p class="copyright">
          北京大善科技有限公司 Copyright &#169; 2019 www.dashantech.com.cn All
          rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style scoped lang="stylus">
// ============== 重置BS样式 - 开始 ==============
.container {
  padding: 0;
  line-height: 1;
}
// ============== 重置BS样式 - 结束 ==============
#bottom{
  width: 100%;
  background-color: #1f3158;
  border-top: 4px solid #14948a;
  box-sizing: border-box;
  .container {
    display: block;
    height: 100%;
    color: #fff;
    padding: 0 58px;
    // 头部logo部分 - 开始
    .bottom-header{
      z-index: 1;
      height: 161px;
      width: 100%;
      padding: 16px 0 0 32px;
      box-sizing: border-box;
      border-bottom: 1px solid #186674;
      display: flex;
      align-items: center;
      // logo
      .bt-logo {
        position: relative;
        border-radius: 22px;
        width: 140px;
        height: 44px;
        img {
          position: absolute;
          height: 44px;
          z-index: 2;
        }
        // 弥散阴影
        .shadow-blur {
          position: absolute;
          left: 10%;
          top: 10px;
          z-index: 1;
          width: 80%;
          height: 50%;
          background-color: #1ee7d7;
          filter: blur(16px);
        }
      }
      ul {
        margin:0 0 0 72px;
        padding: 0;
        display: flex;
        justify-content: center;
        li {
          margin-right: 32px;
          height: 22px;
          line-height: 22px;
          font-size: 16px;
          color: #fff;
          // 允许框选文字，用于复制
          -webkit-user-select: text
          .icon {
            display: inline-block;
            width: 22px;
            height: 22px;
            color: #d8d8d8;
            font-size: 20px;
            margin-right: 8px;
          }
          .icondianhua {
            font-size: 22px;
          }
          span {
            vertical-align: top !important;
          }
          .map-link {
            span {
              color: #14948a;
              transition: all .4s;
            }
            i {
              transition: all .4s;
            }
          }
          .map-link:hover {
            text-decoration: none !important;
            span {
              color: #15cfc0;
            }
            i {
              color: #15cfc0;
            }
          }
          .email {
            line-height: 18px;
          }
        }
      }
    }
    // 头部logo部分 - 结束
    // 内容部分 - 开始
    .bottom-cont {
      position: relative;
      padding-top: 44px;
      height: 506px;
      width: 100%;
      ul {
        position: relative;
        z-index: 2;
        margin: 0;
        .bottom-nav, .cooperation, .programme{
          margin-right: 130px;
          float: left;
          h3 {
            margin: 0 0 20px;
            font-size: 20px;
            font-weight: 700;
            color: rgba(255, 255, 255, .3);
          }
          .nav-list {
            padding: 0;
            li {
              margin-bottom: 16px;
              a{
                font-size: 14px;
                font-weight: 400;
                text-decoration:none;
                color: #fff;
                transition: all .4s;
              }
              a:hover {
                color: #15cfc0;
              }
            }
          }
        }
        // 商务合作
        .cooperation{
          width: 400px;
          margin-right: 82px;
          .add {
            float: left;
            margin: 0 60px 36px 0;
            padding: 0;
            .num {
              -webkit-user-select: text;
              font-weight: 300;
            }
          }
        }
      }
      // 点阵logo
      .lg-d {
        position: absolute;
        top: 32px;
        width: 334px;
        height: 356px;
        z-index: 0;
        right: 0;
        opacity: .1;
        animation: logofl 2.6s ease 0s infinite alternate running;
        img {
          width: 100%;
          height: 100%;
        }
      }
      // 点阵logo闪烁
      @keyframes logofl {
        from {
          opacity: .1;
        }
        to {
          opacity: .6;
        }
      }
      @media (min-width: 1336px) {
        .lg-d {
          right: 0;
        }
      }
      @media (min-width: 1600px) {
        .lg-d {
          right: -180px;
        }
      }
      // 关注我们
      .follow {
        display: flex;
        align-items: center;
        padding-left: 40px;
        height: 148px;
        position: absolute;
        left: 0;
        bottom: 0;
        span {
          transition: all .4s;
        }
        .wechat-icon-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 28px;
          width: 56px;
          height: 56px;
          background-color: #0B1D44;
          border-radius: 50%;
          .wechat-icon {
            display: inline-block;
            width: 32px;
            height: 32px;
            color: #D8D8D8;
            font-size: 34px;
          }
          .qr-code {
            opacity: 0;
            position: absolute;
            left: 70px;
            top: 50%;
            transform: translateY(-50%);
            width: 146px;
            height: 146px;
            border-radius: 2px;
            background-color: #fff;
            box-shadow:0 10px 10px 0 rgba(0,0,0,.3);
            transition: all .4s;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .qr-code::before {
            content: '';
            position: absolute;
            left: -10px;
            top: 50%;
            width: 20px;
            height: 20px;
            background-color: #fff;
            transform: translateY(-50%) rotateZ(45deg);
            z-index: -1;
          }
        }
      }
      .follow:hover {
        span {
          color: #15cfc0;
        }
        .wechat-icon {
          color: #fff;
        }
        .wechat-icon-wrapper {
          .qr-code{
            opacity: 1;
          }
        }
      }
    }
    // 内容部分 - 结束
    // 底部部分 - 开始
    .bottom-footer {
      z-index: 1;
      position: relative;
      padding: 0 40px 24px 40px;
      .border-t {
        width: 100%;
        height: 1px;
        background-color: #fff;
        border-top: 1px solid #186674;
        margin-bottom: 24px;
      }
      .find-link {
        margin: 0 0 0 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li {
          a{
            font-size: 14px;
            font-weight: 400;
            text-decoration:none;
            color: #fff;
            transition: all .4s;
          }
          a:hover {
            color: #15cfc0;
          }
        }
        .space {
          display: inline-block;
          height: 18px;
          width: 1px;
          background-color: rgba(255, 255, 255, .4);
          margin: 0 12px;
        }
      }
      .copyright {
        margin: 12px 0 0 0;
        color: rgba(255, 255, 255, .4);
      }
      .text-switch {
        cursor: pointer;
        position: absolute;
        right: 40px;
        top: 20px;
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: #fff;
          margin-right: 8px;
        }
        span {
          line-height: 21px;
          vertical-align: top;
          transition: all .2s;
        }
      }
      .text-switch:hover {
        span {
          color: #15cfc0;
        }
      }
    }
    // 底部部分 - 结束
  }
}
</style>
