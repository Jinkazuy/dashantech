<template>
  <div :class="['home-cont-modu-3', 'w100', mob ? 'home-cont-modu-3-mob' : '']">
    <div class="container h100">
      <!--左侧操作列表-->
      <div class="modu-3-news-list" v-if="!mob">
        <div class="news-list-titles">
          <img src="../../../common/images/titles/news-title-news.png" />
        </div>
        <ul class="news-list-route w100">
          <li
            :class="{ 'news-list-route-cl': listModu === 1 }"
            @click="newsListRoute1"
          >
            <i class="iconfont icon24gf-newspapers2"></i>
            <span>{{ articleInfoData[0].btListInfo.btClass }}</span>
          </li>
          <li
            :class="{ 'news-list-route-cl': listModu === 2 }"
            @click="newsListRoute2"
          >
            <i class="iconfont icon24gf-newspapers2"></i>
            <span>{{ articleInfoData[1].btListInfo.btClass }}</span>
          </li>
          <!--文章分类，暂时没有更多，所以先注释掉-->
          <!--<li-->
          <!--:class="{ 'news-list-route-cl': listModu === 3 }"-->
          <!--@click="newsListRoute3"-->
          <!--&gt;-->
          <!--<i class="iconfont icon24gf-newspapers2"></i>-->
          <!--<span>{{ articleInfoData[2].btListInfo.btClass }}</span>-->
          <!--</li>-->
        </ul>
        <div class="list-qrcode w100">
          <img src="../../../common/images/qr.jpg" alt="微信公众号：大善科技" />
          <p class="w100">微信公众号：大善科技</p>
        </div>
      </div>
      <!--右侧文章列表-->
      <div class="modu-3-news-cont h100">
        <div class="news-list-titles" v-if="mob">
          <img src="../../../common/images/titles/news-title-news.png" />
        </div>
        <!--顶部大模块-->
        <div class="news-cont-top w100">
          <div class="left-cont h100">
            <div class="left-cont-dates">
              <span class="month">{{ articleInfo.topInfo.month }}</span>
              <span class="dates">{{ articleInfo.topInfo.dates }}</span>
            </div>
            <div class="left-cont-titles">
              <!--这里用v-html是因为有回行，用v-html更好控制-->
              <p v-html="articleInfo.topInfo.title"></p>
            </div>
            <div class="left-cont-conts">
              <p v-html="articleInfo.topInfo.conts"></p>
            </div>
            <div class="on-more">
              <router-link
                class="w100 h100"
                target="_blank"
                :to="articleInfo.topInfo.aLink"
                >查看更多</router-link
              >
            </div>
          </div>
          <div class="right-img h100">
            <img class="w100 h100" :src="articleInfo.topInfo.imgSrc" />
          </div>
        </div>
        <!--底部列表模块-->
        <div class="news-cont-bot w100">
          <h4 class="bot-class">{{ articleInfo.btListInfo.btClass }}</h4>
          <ul class="bot-cont w100">
            <li
              class="h100"
              v-for="item in articleInfo.btListInfo.btCont"
              :key="item.articleId"
            >
              <router-link :to="item.aLink" target="_blank">
                <div class="img-box">
                  <img class="w100" :src="item.imgSrc" />
                </div>
                <h4 class="w100" v-html="item.title"></h4>
                <div class="bot-cont-dates">
                  <span class="month">{{ item.month }}</span>
                  <span class="dates">{{ item.dates }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 文章顶部大文章图片,使用import的方式引入，除非在变异打包后不能读取dist下的images文件夹，否则不推荐这种引入的方式；
// import topImgObj from "../../../../public/images/news-bg-img.png";
export default {
  name: "modules3",
  props: ["mob"],
  data() {
    return {
      // 文章分类切换
      listModu: 1,
      // 右侧文章当前内容,默认为第1种分类，点击左侧列表进行切换；
      articleInfo: {},
      // 右侧文章分类具体内容，模仿json格式，用于不同类型切换,由于没有数据库，所以mock数据；
      articleInfoData: [
        // 文章类型分类1：
        {
          // 顶部单独文章内容
          topInfo: {
            articleId: 5,
            aLink: `newsDetail?id=${5}`,
            month: "January",
            dates: "2020/01/01",
            title:
              "喜讯|与雄安共成长！我司顺利交付容城县中医院远程医疗影像与诊断系统采购项目",
            conts: `在我司技术人员一个月时间的努力下，由大善科技自主研发的远程医疗影像与诊断系统顺利实施并交付容城县中医院。`,
            // 注意！这里的图片，不能写相对路径，必须写线上地址，或者从本文件中import引入图片，然后将对象放在这里；
            // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
            // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
            imgSrc: "./images/news-bg-img-xa.webp"
          },
          // 底部三个文章列表内容
          btListInfo: {
            // 与左侧按钮列表分类对应
            btClass: "精选文章",
            btCont: [
              {
                articleId: 6,
                aLink: `newsDetail?id=${6}`,
                month: "January",
                dates: "2020/01/01",
                title:
                  "喜讯|雄安又一城！我司中标安新县卫健局远程会诊系统采购项目",
                // 注意！这里的图片，不能写相对路径，必须写线上地址，或者从本文件中import引入图片，然后将对象放在这里；
                // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
                // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
                imgSrc: "./images/ax.webp"
              },
              // 女医师
              {
                articleId: 7,
                aLink: `newsDetail?id=${7}`,
                month: "December",
                dates: "2019/12/17",
                title:
                  "“智慧医疗+教育·精准扶贫行”在京启动，我司远程医疗云平台是技术支撑平台",
                imgSrc: "./detail/d-7/nys-00.png"
              },
              // 海南大会
              {
                articleId: 8,
                aLink: `newsDetail?id=${8}`,
                month: "December",
                dates: "2019/12/03",
                title: "我司受邀出席中国数字健康医疗大会",
                imgSrc: "./detail/d-8/hn-00.png"
              }
            ]
          }
        },
        // 文章类型分类1：
        {
          // 顶部单独文章内容
          topInfo: {
            articleId: 1,
            aLink: `newsDetail?id=${1}`,
            month: "August",
            dates: "2019/09/25",
            title:
              "喜报|我司获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位",
            conts: `2019年7月25日，我司正式获聘成为中国卫生信息与健康大数据学会第七届常务理事单位。<br/><br/> 中国卫生信息与健康医疗大数据学会中国卫生信息与健康医疗大数据学会（Chinese Health Information and Big Data Association, CHIBDA, 以下简称“学会”）……`,
            // 注意！这里的图片，是npm run build 后，也就是编译后的相对路径，也就是把public下的images文件夹直接输出到了编译后的根目录
            // 所以直接./images即可；
            // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
            // 2、import xxd from "../../xx.png" , 然后将这个xxd以对象的方式赋值给imgSrc；
            imgSrc: "./images/news-bg-img.png"
          },
          // 底部三个文章列表内容
          btListInfo: {
            // 与左侧按钮列表分类对应
            btClass: "往期精选",
            btCont: [
              {
                articleId: 2,
                // 这里是router-link的to属性对应的URL路由，后边直接?id=文章id即可；
                aLink: `newsDetail?id=${2}`,
                month: "September",
                dates: "2019/09/17",
                title: "公司团建|温暖中秋大善向阳，不忘初心共绘蓝图",
                imgSrc: "images/poto-1.jpg"
              },
              {
                articleId: 3,
                aLink: `newsDetail?id=${3}`,
                month: "August",
                dates: "2019/08/17",
                title: "公司团建|与大善同行，聚力向前，出发！",
                imgSrc: "./detail/d-3/det-3.webp"
              },
              {
                articleId: 4,
                aLink: `newsDetail?id=${4}`,
                month: "July",
                dates: "2019/07/30",
                title: "【关于我们】走进大善科技",
                imgSrc: "./detail/d-4/d-4.png"
              }
            ]
          }
        }
        // ,
        // 文章类型分类3：
        // {
        //   // 顶部单独文章内容
        //   topInfo: {
        //     articleId: 13,
        //     aLink: `newsDetail?id=${13}`,
        //     month: "August",
        //     dates: "2019/09/25",
        //     title:
        //       "喜报|我司获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位",
        //     conts: `2019年7月25日，我司正式获聘成为中国卫生信息与健康大数据学会第七届常务理事单位。<br/><br/> 中国卫生信息与健康医疗大数据学会中国卫生信息与健康医疗大数据学会（Chinese Health Information and Big Data Association, CHIBDA, 以下简称“学会”）……`,
        //     // 注意！这里的图片，不能写相对路径，必须写线上地址，或者从本文件中import引入图片，然后将对象放在这里；
        //     // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
        //     // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
        //     imgSrc: "./images/news-bg-img.png"
        //   },
        //   // 底部三个文章列表内容
        //   btListInfo: {
        //     // 与左侧按钮列表分类对应
        //     btClass: "往期推荐",
        //     btCont: [
        //       {
        //         articleId: 7,
        //         aLink: `newsDetail?id=${7}`,
        //         month: "August",
        //         dates: "2019/09/25",
        //         title:
        //           "喜报|我司获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位",
        //         // 注意！这里的图片，不能写相对路径，必须写线上地址，或者从本文件中import引入图片，然后将对象放在这里；
        //         // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
        //         // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
        //         imgSrc: "./images/news-bg-img.png"
        //       },
        //       {
        //         articleId: 8,
        //         aLink: `newsDetail?id=${8}`,
        //         month: "August",
        //         dates: "2019/09/25",
        //         title:
        //           "喜报|我司获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位",
        //         // 注意！这里的图片，不能写相对路径，必须写线上地址，或者从本文件中import引入图片，然后将对象放在这里；
        //         // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
        //         // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
        //         imgSrc: "./images/news-bg-img.png"
        //       },
        //       {
        //         articleId: 9,
        //         aLink: `newsDetail?id=${9}`,
        //         month: "August",
        //         dates: "2019/09/25",
        //         title: "公司团建 | 与大善同行，聚力向前，<br />出发！",
        //         // 注意！这里的图片，不能写相对路径，必须写线上地址，或者从本文件中import引入图片，然后将对象放在这里；
        //         // 1、线上地址(比如数据返回来的地址，或者pnm run build 编译后，手动添加图片文件，然后在这里引入也可以)：www.baidu.com/xx/xx/images/xx.png
        //         // 2、import xxd from "../../xx.png" , 然后将这个xxd赋值给imgSrc；
        //         imgSrc: "./images/news-bg-img.png"
        //       }
        //     ]
        //   }
        // }
      ]
    };
  },
  created() {
    this.articleInfo = this.articleInfoData[0];
  },
  methods: {
    newsListRoute1() {
      console.log(1);
      this.listModu = 1;
      // 切换右侧对应的文章分类
      this.articleInfo = this.articleInfoData[0];
    },
    newsListRoute2() {
      console.log(2);
      this.listModu = 2;
      // 切换右侧对应的文章分类
      this.articleInfo = this.articleInfoData[1];
    },
    newsListRoute3() {
      console.log(3);
      this.listModu = 3;
      // 切换右侧对应的文章分类
      this.articleInfo = this.articleInfoData[2];
    }
  }
};
</script>

<style scoped lang="stylus">
.home-cont-modu-3 {
    height: 880px;
    background-color: rgba(231, 233, 242, 1);
    .container {
        position: relative;
        padding: 0;
        // 左侧新闻列表切换
        .modu-3-news-list {
            position: absolute;
            left: 58px;
            top: 80px;
            width: 230px;
            height: 720px;
            border-radius: 4px;
            background-color: #fff;
            .news-list-titles {
                position: absolute;
                left: 50%;
                top: 40px;
                transform: translateX(-50%);
            }
            ul.news-list-route{
                position: absolute;
                top: 174px;
                margin: 0;
                padding: 0;
                li {
                    position: relative;
                    width: 100%;
                    height: 52px;
                    cursor: pointer;
                    transition: all .4s;
                    i {
                        position: absolute;
                        left: 60px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 24px;
                        height: 24px;
                        transition: all .4s;
                        font-size: 28px;
                        line-height: 0.9;
                        color: #ddd;
                    }
                    span {
                        width: 100%;
                        padding-left: 24px;
                        display: inline-block;
                        text-align: center;
                        font-size: 16px;
                        line-height: 52px;
                        transition: all .4s;
                        color: rgba(128, 134, 149, 1);
                    }
                }
                li:hover {
                    i {
                        color: #14948a;
                    }
                    span {
                        color: rgba(51, 51, 51, 1);
                    }
                }
                li.news-list-route-cl {
                    background-color: rgba(244, 245, 247, 1);
                    i {
                        color: #14948a;
                    }
                    span {
                        color: rgba(51, 51, 51, 1);
                        font-weight: 700;
                    }
                }
            }
            .list-qrcode {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 240px;
                img {
                    position: absolute;
                    bottom: 60px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 174px;
                    height: 174px;
                    background-color: #fff;
                    border-radius: 2px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    box-sizing: border-box;
                }
                p {
                    position: absolute;
                    bottom: 16px;
                    left: 50%;
                    transform: translateX(-50%);
                    margin: 0;
                    text-align: center;
                    font-size: 14px;
                    color: rgba(128, 134, 149, 1);
                }
            }
        }
        // 右侧新闻列表模块
        .modu-3-news-cont {
            position: absolute;
            right: 58px;
            top: 0;
            width: 958px;
            @media (max-width: 1336px) {
              width: 70%;
            }
            @media (min-width: 1336px) {
              width: 958px;
            }
            @media (max-width: 1200px) {
              width: 62%;
            }
            @media (max-width: 992px) {
              width: 52%;
            }
            // 顶部大模块
            .news-cont-top {
                position: absolute;
                top: 80px;
                left: 0;
                height: 383px;
                background-color: #fff;
                border-radius: 4px;
                overflow: hidden;
                .left-cont {
                    position: absolute;
                    left: 0;
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
                .right-img {
                    width: 32.8%;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
            // 三个小模块
            .news-cont-bot {
                position: absolute;
                bottom: 80px;
                left: 0;
                height: 300px;
                .bot-class {
                    margin: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: rgba(128, 134, 149, 1);
                    font-size: 16px;
                    line-height: 22px;
                }
                .bot-cont {
                    position: absolute;
                    padding: 0;
                    bottom: 0;
                    margin: 0;
                    height: 260px;
                    li {
                        position: relative;
                        width: 32.66%;
                        float: left;
                        background-color: #fff;
                        border-radius: 4px;
                        transition: all .4s;
                        cursor: pointer;
                        overflow: hidden;
                        a {
                            .img-box {
                              position: absolute;
                              top: 0;
                              left: 0;
                              height: 50%;
                              overflow: hidden;
                              img {
                                position: relative;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 100%;
                              }
                            }
                            h4 {
                                position: absolute;
                                top: 54%;
                                margin: 0;
                                font-size: 16px;
                                font-weight: 700;
                                color: rgba(23, 35, 61, 1);
                                line-height: 26px;
                                padding: 0 6%;
                            }
                            .bot-cont-dates {
                                position: absolute;
                                left: 50%;
                                transform: translateX(-50%);
                                bottom: 0;
                                height: 42px;
                                width: 88%;
                                box-sizing: border-box;
                                border-top: 1px solid rgba(224, 224, 224, 1);
                                padding: 0;
                                line-height: 42px;
                                .month {
                                    float: left;
                                    font-size: 16ps;
                                    font-weight: 700;
                                    color: rgba(128, 134, 149, 1);
                                }
                                .dates {
                                    float: right;
                                    font-size: 12px;
                                    color: rgba(153, 153, 153, 1);
                                }
                            }
                        }
                    }
                    li:nth-child(2) {
                        margin: 0 1%;
                    }
                    li:hover {
                        box-shadow: 0 10px 25px 10px rgba(0,0,150,0.1), 0 15px 15px 0 rgba(0,0,0,.1);
                        transform: translateY(-20px);
                    }
                }
            }
        }
    }
}
// ========== 移动端样式 ===========
.home-cont-modu-3-mob {
  height: 680px;
  .container {
    .modu-3-news-cont {
      position: relative;
      right: 0;
      width: 98%;
      margin: 0 auto;
      // 移动端单独写一个标题
      .news-list-titles {
        width: 80px;
        margin: 40px auto 0;
        img {
          width: 100%;
        }
      }
      .news-cont-top {
        top: 120px;
        height: 160px;
        .left-cont {
          .left-cont-dates {
            left: 10px;
            top: 10px;
            .month {
              font-size: 16px;
            }
            .dates {
              font-size: 12px;
            }
          }
          .left-cont-titles {
            left: 10px;
            top: 40px;
            p {
              font-size: 16px;
            }
          }
          .left-cont-conts {}
          .on-more {
             left: 10px;
            bottom: 16px;
            width: 70px;
            height: 24px;
            font-size: 12px;
            a {
              line-height: 24px;
            }
          }
        }
        .right-img {
          img {}
        }
      }
      .news-cont-bot {
        top: 320px;
        ul.bot-cont {
          li {
            a {
              img {}
              h4 {
                font-size: 12px;
                line-height: 20px;
              }
              .bot-cont-dates {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
