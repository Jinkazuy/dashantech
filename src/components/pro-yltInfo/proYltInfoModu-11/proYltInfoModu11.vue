<template>
  <div
    :class="[
      'pro-YltInfo-mo11',
      'w100',
      'clearfix',
      mob ? 'pro-YltInfo-mo11-mob' : ''
    ]"
  >
    <div class="pro-YltInfo-mo11-hd">
      <img src="../../../common/images/titles/prd-title-YLT-OS.png" />
    </div>
    <div class="pro-YltInfo-mo11-bd container">
      <!--// 使用ondragstart防止拖拽ondragstart="return false;"-->
      <ul class="clearfix">
        <li>
          <div class="tit-box">
            <span></span>
            <h4>政策</h4>
          </div>
          <p>
            大善科技紧扣国家医改政策，对医疗健康方向 有着清晰、深刻认识与解读
          </p>
        </li>
        <li>
          <div class="tit-box">
            <span></span>
            <h4>资源</h4>
          </div>
          <p>
            大善科技深耕医疗行业多年，具有深厚的政府、医院、专家资源
          </p>
        </li>
        <li>
          <div class="tit-box">
            <span></span>
            <h4>技术</h4>
          </div>
          <p>
            大善科技紧扣国家医改政策，对医疗健康方向 有着清晰、深刻认识与解读
          </p>
        </li>
        <li>
          <div class="tit-box">
            <span></span>
            <h4>经验</h4>
          </div>
          <p>在医疗健康大数据、政府服务平台等大型项目均具备成功开发经验</p>
        </li>
        <li>
          <div class="tit-box">
            <span></span>
            <h4>资质</h4>
          </div>
          <p>大善科技正式成为中国卫生信息与健康医疗大数据学会常务理事单位</p>
        </li>
        <li>
          <div class="tit-box">
            <span></span>
            <h4>服务</h4>
          </div>
          <p>
            通过ICT技术与商业模式创新，为政府、企业、机构、
            家庭和个人提供多层次、多维度、一体化的大健康管理服务
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proYltInfoModu11",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-YltInfo-mo11 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40, 50, 122, 1);
    .pro-YltInfo-mo11-hd {
        position: relative;
        z-index: 5;
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
    }
    .pro-YltInfo-mo11-bd {
        ul {
            width: 100%;
            margin: 0;
            padding: 0;
            li {
                float: left;
                width: 33.333333%;
                color: #fff;
                .tit-box {
                    span {
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        margin-right: 16px;
                        color: rgba(255, 255, 255, .6);
                    }
                    h4 {
                        display: inline-block;
                        line-height: 50px;
                        vertical-align: top;
                        margin: 0;
                        font-size: 20px;
                    }
                }
                p {
                    padding: 0 66px 40px 64px;
                }
            }
            li:nth-of-type(1) {
                .tit-box {
                    span {
                        background-image: url('../../../common/images/pro-ylt/ylt-mo11-1.png')
                    }
                }
            }
            li:nth-of-type(2) {
                .tit-box {
                    span {
                        background-image: url('../../../common/images/pro-ylt/ylt-mo11-2.png')
                    }
                }
            }
            li:nth-of-type(3) {
                .tit-box {
                    span {
                        background-image: url('../../../common/images/pro-ylt/ylt-mo11-3.png')
                    }
                }
            }
            li:nth-of-type(4) {
                .tit-box {
                    span {
                        background-image: url('../../../common/images/pro-ylt/ylt-mo11-4.png')
                    }
                }
            }
            li:nth-of-type(5) {
                .tit-box {
                    span {
                        background-image: url('../../../common/images/pro-ylt/ylt-mo11-5.png')
                    }
                }
            }
            li:nth-of-type(6) {
                .tit-box {
                    span {
                        background-image: url('../../../common/images/pro-ylt/ylt-mo11-6.png')
                    }
                }
            }
        }
    }
}


// ========== 移动端样式 =========
.pro-YltInfo-mo11-mob {
    padding-bottom: 20px;
    .pro-YltInfo-mo11-hd {
        img{
            height: 42px;
        }
    }
    .pro-YltInfo-mo11-bd {
        padding: 0 20px;
        ul {
          li {
            width: 100%;
            .tit-box {
              span {
                width: 32px;
                height: 32px;
                background-size: 100%;
              }
              h4 {
                font-size: 16px;
                line-height: 32px;
              }
            }
            p {
              padding: 0 20px 40px 48px;
              opacity: .6;
              font-size: 14px;
            }
          }
        }
    }
}
</style>
