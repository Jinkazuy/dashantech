<template>
  <div
    :class="[
      'pro-film-modu-5',
      'w100',
      'clearfix',
      mob ? 'pro-film-modu-5-mob' : ''
    ]"
  >
    <div class="pro-film-modu-5-hd">
      <img src="../../../common/images/titles/prd-title-film-4.png" />
    </div>
    <div class="pro-film-modu-5-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>使用更方便</h4>
            <p>
              借助二维码技术，个人可以随时将自己的影像资料分享给世界各地的任何人，让咨询、就医更加方便。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>获取速度更快</h4>
            <p>
              患者可以通过电脑、手机、PAD等终端设备浏览、管理、处理、下载自己的数字影像数据，在任何互联网网络条件下，实现便捷浏览。
            </p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-2.png" />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-3.png" />
          </div>
          <div class="text-box">
            <h4>信息量更加完整</h4>
            <p>
              电子胶片包含了患者在医院生成的全部原始影像数据，个人带上智能手机就可以随时随地浏览并向医生分享自己的影像资料、诊断报告。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>使用成本更低</h4>
            <p>
              传统干式胶片的费用单张则要30元左右，而使用电子胶片，患者只需要承担25元左右的费用还可以长期免费浏览、使用存储在云端的影像资料。
            </p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-4.png" />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-5.png" />
          </div>
          <div class="text-box">
            <h4>辅助诊断工具</h4>
            <p>
              电子胶片自带的辅助诊断工具和智能分析工具还能帮助医生对影像数据进行深度分析，对疾病发展做出预测。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>多种共享方式</h4>
            <p>
              患者可以通过手机二维码影像分享的方式，向医生或朋友分享影像数据，以及二次诊断。
            </p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-4.png" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proFilmModu5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-film-modu-5-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
    p {
        padding: 0 30%;
        font-size: 16px;
        color: rgba(23, 35, 61, 1);
        text-align: center;
        line-height: 22px;
        font-weight: 700;
    }
}
.pro-film-modu-5-bd {
    ul {
        padding: 0;
        margin: 0;
        li.container {
            padding: 80px 0;
            justify-content: space-between;
            align-items: center;
            .illus-box {
                width: 30%;
                img {
                    width: 100%;
                }
            }
            .text-box {
                width: 40%;
                h4 {
                    font-size: 24px;
                    color: #14948a;
                    margin-bottom: 20px;
                    font-weight: 700;
                }
                p {
                    font-size: 16px;
                    line-height: 26px;
                    color: rgba(128, 134, 149, 1);
                }
            }
        }
    }

}

// =========== 移动端样式 =========
.pro-film-modu-5-mob {
    .pro-film-modu-5-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
        p {
            font-size: 12px !important;
            padding: 0 20px !important;
        }
    }
    .pro-film-modu-5-bd {
        ul {
            li {
                padding: 40px 0 !important;
                .text-box {
                    h4 {
                        font-size : 16px !important;
                        line-height: 30px;
                    }
                    p {
                        font-size: 12px !important;
                        padding: 0 !important;
                    }
                }
            }
        }
    }
}
</style>
