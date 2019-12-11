<template>
  <div
    :class="[
      'pro-film-modu-3',
      'w100',
      'clearfix',
      mob ? 'pro-film-modu-3-mob' : ''
    ]"
  >
    <div class="pro-film-modu-3-hd">
      <img src="../../../common/images/titles/prd-title-film-2.png" />
      <p>
        随着移动互联网、云存储、云计算、医学影像技术、移动终端技术的不断发展，数字影像云存储及应用已经成为现实，电子胶片时代已扑面而来。电子胶片时代是相对于传统感光胶片而言的一种新型影像浏览应用服务。它既与传统胶片存在形式上的映射关系，又比传统胶片有更广泛的应用价值。此外，国家出台了相关政策支持。在政策、经济、科技三大驱动下，电子胶片普及是大势所趋。
      </p>
    </div>
    <div class="color-bg-mask"></div>
    <div class="pro-film-modu-3-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-film/mo-3.png"
      />
      <ul>
        <li>
          <h4>政策支持</h4>
          <p>
            《医学影像诊断中心基本标准(试行)》、《医学影像诊断中心管理规范(试行)》、《关于加强医疗联合体建设和发展的指导意见》，双向转诊、分级诊疗政策的推进，国家鼓励二、三级医院向基层医疗卫生机构提供远程影像诊断的服务，需要医院内部、医疗机构之间有影像数据互通的平台。
          </p>
        </li>
        <li>
          <h4>经济发展</h4>
          <p>
            经济快速发展下移动端支付的普及、患者已经渐渐习惯数字化的就医方式，传统胶片巨大成本压力逐渐暴露的窘境。
          </p>
        </li>
        <li>
          <h4>科技进步</h4>
          <p>
            互联网技术的兴起，医学影像设备数字化普及，医院信息化系统、PACS系统的广泛应用，医院影像云平台的搭建。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proFilmModu3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-film-modu-3 {
    position: relative;
    padding-bottom: 80px;
    background-color: #28327a;
    .pro-film-modu-3-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
        p {
            padding: 0 20%;
            font-size: 16px;
            color: #ffff;
            text-align: center;
        }
    }
    .color-bg-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40%;
        background-color: rgba(240, 245, 255, 1);
    }
    .pro-film-modu-3-bd {
        display: block;
        padding: 0 58px;
        img {
            width: 100%;
            height: 100%;
        }
        ul {
            li {
                margin: 40px 0;
                h4 {
                    color: #211B32;
                    font-size: 20px;
                    font-weight: 700;
                }
                p {
                    font-size: 16px;
                    color: #211B32;
                }
            }
        }
    }
}


// ========== 移动端样式 =========
.pro-film-modu-3-mob {
    padding-bottom: 20px;
    .pro-film-modu-3-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
            padding: 0 20px;
        }
    }
    .color-bg-mask {
        height: 0px;
    }
    .pro-film-modu-3-bd {
        padding: 0 20px;
        background-color: #28327a;
        ul {
          padding: 0;
          li {
            h4 {
              color: #fff;
              font-size: 16px;
            }
            p {
              color: #fff;
              font-size: 14px;
            }
          }
        }
    }
}
</style>
