<template>
  <div :class="['pro-modu-4', 'w100', mob ? 'pro-modu-4-mob' : '']">
    <div class="pro-modu-4-hd">
      <img src="../../../common/images/titles/prd-title-CASE.png" />
    </div>
    <div class="pro-modu-4-bd container">
      <router-link
        class="news-cont-top w100"
        v-for="(itm, idx) in caseDatas"
        :key="idx"
        target="_blank"
        :to="itm.aLink"
      >
        <div class="left-cont h100">
          <div class="left-cont-dates">
            <span class="month">{{ itm.month }}</span>
            <span class="dates">{{ itm.dates }}</span>
          </div>
          <div class="left-cont-titles">
            <!--这里用v-html是因为有回行，用v-html更好控制-->
            <p v-html="itm.title"></p>
          </div>
          <div class="left-cont-conts">
            <p v-html="itm.conts"></p>
          </div>
          <div class="on-more">
            <router-link class="w100 h100" target="_blank" :to="itm.aLink"
              >查看更多</router-link
            >
          </div>
        </div>
        <div class="left-img h100">
          <img class="w100 h100" :src="itm.imgSrc" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "pro-modu4",
  props: ["mob"],
  data() {
    return {
      caseDatas: [
        {
          articleId: 1,
          aLink: `newsDetail?id=${1}`,
          month: "August",
          dates: "2019/09/25",
          title: "蓉城项目",
          conts: `2019年7月25日，我司正式获聘成为中国卫生信息与健康大数据学会第七届常务理事单位。<br/><br/> 中国卫生信息与健康医疗大数据学会中国卫生信息与健康医疗大数据学会（Chinese Health Information and Big Data Association, CHIBDA, 以下简称“学会”）……`,
          // 注意！这里的图片，是npm run build 后，也就是编译后的相对路径，也就是把public下的images文件夹直接输出到了编译后的根目录
          // 所以直接./images即可；
          // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
          // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
          imgSrc: "./images/news-bg-img.png"
        },
        {
          articleId: 2,
          aLink: `newsDetail?id=${1}`,
          month: "August",
          dates: "2019/09/25",
          title:
            "安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县安新县",
          conts: `2019年7月25日，我司正式获聘成为中国卫生信息与健康大数据学会第七届常务理事单位。<br/><br/> 中国卫生信息与健康医疗大数据学会中国卫生信息与健康医疗大数据学会（Chinese Health Information and Big Data Association, CHIBDA, 以下简称“学会”）……`,
          // 注意！这里的图片，是npm run build 后，也就是编译后的相对路径，也就是把public下的images文件夹直接输出到了编译后的根目录
          // 所以直接./images即可；
          // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
          // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
          imgSrc: "./images/news-bg-img.png"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.pro-modu-4 {
    padding: 80px 0 ;
    .pro-modu-4-hd {
        height: 84;
        margin-bottom: 40px;
        img {
            height: 100%;
            display: block;
            margin: 0 auto;
        }
    }
    .pro-modu-4-bd, .container {
        display: block;
        position: relative;
        .news-cont-top {
            display: block;
            position: relative;
            height: 383px;
            background-color: #fff;
            border-radius: 4px;
            overflow: hidden;
            box-shadow:0 5px 10px 0 rgba(0,0,0,0.1);
            padding: 20px 0;
            margin: 20px 0;
            .left-cont {
                position: absolute;
                left: 32.8%;
                top: 0;
                width: 67%;
                .left-cont-dates {
                    position: absolute;
                    left: 44px;
                    top: 36px;
                    .month {
                        font-size: 20px;
                        color: rgba(128, 134, 149, 1);
                        margin-right: 20px;
                    }
                    .dates {
                        font-size: 12px;
                        color: rgba(153, 153, 153, 1);
                    }
                }
                .left-cont-titles {
                    position: absolute;
                    left: 44px;
                    top: 90px;
                    width: 92%;
                    p {
                        font-size: 24px;
                        font-weight: 700;
                        color: rgba(23, 35, 61, 1);
                        margin: 0;
                        transition: all .4s;
                    }
                }
                .left-cont-conts {
                    position: absolute;
                    left: 44px;
                    top: 176px;
                    width: 92%;
                    p {
                        font-size: 14px;
                        color: rgba(128, 134, 149, 1);
                        line-height: 24px;
                        transition: all .4s;
                    }
                }
                .on-more {
                    position: absolute;
                    bottom: 36px;
                    left: 44px;
                    width: 94px;
                    height: 34px;
                    text-align: center;
                    box-sizing: border-box;
                    a {
                        border-radius: 17px;
                        border: 1px solid #14948a;
                        color: #14948a;
                        line-height: 32px;
                        display: block;
                        text-decoration: none;
                        transition: all .4s;
                        background-color: #fafafa;
                    }
                    a:hover {
                        background-color: #14948a;
                        color: #fff;
                        font-weight: 800;
                        box-shadow:0 4px 14px 0 rgba(50,230,210,0.9);
                    }
                }
            }
            .left-img {
                width: 32.8%;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .news-cont-top:hover {
            .left-cont {
                .left-cont-titles {
                    p {
                        color: #14948a;
                    }
                }
                .left-cont-conts {
                    p {
                        color: rgba(23, 35, 61, 1);
                    }
                }
                .on-more {
                    a {
                        background-color: #14948a;
                        color: #fff;
                        font-weight: 800;
                        box-shadow:0 4px 14px 0 rgba(50,230,210,0.9);
                    }
                }
            }
            .left-img {
                width: 32.8%;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
}
// 移动端样式
.pro-modu-4-mob {
  .pro-modu-4-hd{
    height: 44px;
  }
  .pro-modu-4-bd {
    .news-cont-top {
      height: 160px;
      .left-cont {
        .left-cont-dates {
          left: 10%;
          top: 10px;
          .month {
            font-size:12px;
          }
        }
        .left-cont-titles {
          left: 10%;
          top: 40px;
          p {
            width: 90%;
            font-size: 16px;
            white-space: nowrap;
            overflow:hidden;
            text-overflow: ellipsis;
          }
        }
        .left-cont-conts {
          display: none;
        }
        .on-more {
          left: 10%;
          bottom: 14px;
          width: 70px;
          height: 30px;
          a {
            font-size: 12px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
