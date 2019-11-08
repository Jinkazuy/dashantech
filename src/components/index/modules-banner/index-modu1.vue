<template>
  <div :class="['pro-modu-1', 'w100', mob ? 'pro-modu-1-mob-css' : '']">
    <div class="container">
      <div class="pro-modu-hd">
        <p class="pro-mo1-title">
          大善科技 立足于大健康医疗产业链
          <br v-if="mob" />是国内领先的医疗领域平台
        </p>
        <p class="pro-mo1-desc">
          多年耕耘于大健康医疗产业，<br
            v-if="mob"
          />积累了丰富的行业经验及实施方案。
          <br />
          拥有国内众多一线客户的一致好评。
        </p>
      </div>
    </div>
    <div class="bt-info w100">
      <ul class="container">
        <li>
          <h4>健康大数据平台</h4>
          <p>汇聚居民全生命周期的总和医疗和健康大数据</p>
        </li>
        <li>
          <h4>健康AI系统</h4>
          <p>
            依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
          </p>
        </li>
        <li>
          <h4>医疗大健康平台</h4>
          <p>
            中央数据中心，完善跟踪、采集居民医疗信息，形成诊疗监管、疾病上报、预防跟踪，解决卫生部、医院多机构的有效协同平台
          </p>
        </li>
      </ul>
    </div>
    <div class="video-mask w100 h100">
      <!--视频素材来资源 https://vimeo.com/82144045 未购买-->
      <video autoplay loop muted class="h100 vid posi-ab">
        <source
          v-if="!mob"
          poster="../../../common/images/product/modu-1/11e36ace051064945d6e60bb10ae9282.jpg"
          src="../../../common/images/product/modu-1/228129277a.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="mask-modu w100 h100"></div>
  </div>
</template>

<script>
export default {
  name: "pro-modu1",
  props: ["mob"]
  // 由父级传入mob，不需要每个子组件判断了；
  // data() {
  //   return {
  //     // 控制显示移动端还是pc端css样式的变量
  //     mob: false
  //   };
  // },
  // created() {
  //   if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
  //     console.log("index-modu-1-加载移动端样式");
  //     this.mob = true;
  //   } else {
  //     this.mob = false;
  //   }
  // }
};
</script>

<style scoped lang="stylus">
.pro-modu-1 {
    height: 690px;
    position: relative;
    background-color: pink;
    background-image: url("../../../common/images/product/modu-1/11e36ace051064945d6e60bb10ae9282.jpg")
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .container {
        z-index: 10;
        .pro-modu-hd {
            margin: 114px auto 0;
            text-align: center;
            color: #fff;
            p {
                margin: 0;
            }
            .pro-mo1-title {
                font-size: 40px;
                margin-bottom: 30px;
            }
            .pro-mo1-desc {
                font-size: 20px;
                line-height: 32px;
            }
        }
    }
    .bt-info {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 126px;
        background-color: rgba(38,41,51,0.8);
        z-index: 6;
        ul {
            display: flex;
            justify-content: center;
            li {
                width: 33.3333333%;
                text-align: center;
                color: #fff;
                padding: 16px 4% 0;
                h4 {
                    margin: 0 0 6px 0;
                    font-size: 20px;
                    font-weight: 700;
                }
                p {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.8)
                }
            }
        }
    }
    .mask-modu {
        position: absolute;
        left: 0;
        top: 0;
        background:rgba(38,41,51,1);
        opacity:0.8;
        z-index: 3;
    }
    .video-mask {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      z-index: 2;
      .vid {
        left: 50%;
        transform: translateX(-50%);
      }
    }
}
// 不同分辨率适配(不包括移动端样式)
@media (min-width: 1200px) {
  .vid {
    width: 100%;
    height: auto;
  }
}
// 不同分辨率适配(不包括移动端样式)
@media (max-width: 1200px) {
  .bt-info {
    height: 140px !important;
  }
}
@media (max-width: 992px) {
  .bt-info {
    height: 160px !important;
  }
}

// =============== 移动端样式 ===================
.pro-modu-1-mob-css {
  height: 600px;
  .container{
    .pro-modu-hd {
      .pro-mo1-title {
        font-size: 20px;
        font-weight: 700;
      }
      .pro-mo1-desc {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .bt-info {
    height: 260px !important;
    ul.container {
      display: block;
      li {
        float: none;
        width: 100%;
        h4 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
