<template>
  <div :class="['proFollowMo-4', 'w100', mob ? 'proFollowMo-4-mob' : '']">
    <div class="container">
      <div class="pro-fol-mo4-tit">
        <img src="../../../common/images/titles/prd-title-char-white.png" />
      </div>
      <div class="pro-fol-mo4-bd">
        <ul class="clearfix">
          <li v-for="(item, idx) in proFolMmo4BdInfo" :key="idx">
            <h4>
              <img :src="item.imgSrc" />
              {{ item.h4 }}
            </h4>
            <p v-html="item.p"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proFollowModu4",
  data() {
    return {
      proFolMmo4BdInfo: [
        {
          h4: "完整",
          p: `完整的患者全息档案：打通患者医疗健康数据，实现全面管理；`,
          imgSrc: "./images/blockchain-1.png"
        },
        {
          h4: "多样化",
          p: `紧跟时代潮流，实现患者管理方式与途径多样化；`,
          imgSrc: "./images/blockchain-2.png"
        },
        {
          h4: "提高效率",
          p: `贴心设计，患者管理更高效，降低工作量，提高工作效率；`,
          imgSrc: "./images/blockchain-3.png"
        },
        {
          h4: "完善",
          p: `实现患者从离院到家庭到再入院的闭环管理，完善院后患者管理流程；`,
          imgSrc: "./images/blockchain-4.png"
        },
        {
          h4: "顺畅",
          p: `移动互联网与随访结合，提高医护患间信息交互的顺畅性；`,
          imgSrc: "./images/blockchain-5.png"
        },
        {
          h4: "物联网结合",
          p: `物联网技术与随访结合，院外可穿戴医疗设备检测健康情况；`,
          imgSrc: "./images/blockchain-6.png"
        },
        {
          h4: "统一",
          p: `搭建全院统一随访平台，避免重复投入，管理困难；`,
          imgSrc: "./images/blockchain-7.png"
        }
      ],
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    // 是否渲染移动端样式
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.proFollowMo-4 {
    background-color: rgba(23, 79, 196, 1);
    padding: 80px 0;
    .container {
        display: block;
        padding: 0 60px;
        .pro-fol-mo4-tit {
            margin: 0 auto 40px;
            width: 138px;
            img {
                width: 100%;
            }
        }
        .pro-fol-mo4-bd {
            ul {
                margin: 0;
                li {
                    margin: 0 0 40px 0;
                    color: #fff;
                    width: 33.3333333%;
                    float: left;
                    h4 {
                        margin: 0;
                        font-size: 20px
                        font-weight: 700;
                        img {
                            margin-right: 8px;
                        }
                    }
                    p {
                        margin: 0;
                        opacity: .6;
                        font-size: 16px;
                        line-height: 32px;
                        padding: 0 60px 0 65px;
                    }
                }
                // 因为最后一个是单独1个，所以最后一个居中显示；
                li:last-of-type {
                    float: none;
                    margin: 0 auto;
                }
                // 宽度小于1336时，让最后一个左浮动；
                @media (min-width: 992px) and (max-width: 1336px) {
                    li {
                        width: 50%;
                        height:114px;
                    }
                    li:last-of-type {
                        float: left;
                        margin: 0;
                    }
                }
                // 宽度小于992时，让每个li都居中；
                @media (max-width: 992px) {
                    li {
                        width: 80%;
                        float: none;
                        margin: 0 auto 40px;
                    }
                }
            }
        }
    }
}
// =========== 移动端样式 ===============
.proFollowMo-4-mob {
  .container {
    padding: 0 20px;
    .pro-fol-mo4-tit {
      width: 69px;
    }
    .pro-fol-mo4-bd {
      ul {
        padding: 0;
        li {
          width: 100%;
          h4 {
            font-size: 16px;
            img {
              width: 40px;
              height: 40px;
            }
          }
          p {
            width: 100%;
            padding: 0 0 0 52px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
