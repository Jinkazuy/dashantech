<template>
  <div :class="['about-modu-4', 'w100', mob ? 'about-modu-4-mob' : '']">
    <div class="container h100">
      <div class="ab-mo-4-title posi-ab">
        <img src="../../../common/images/titles/about-title-Ourteam.png" />
      </div>
      <div class="per-gr w100 posi-ab">
        <div class="per-pic posi-ab">
          <img class="h100 posi-ab" :src="perShowData.perImgSrc" />
          <div class="bg-cir posi-ab"></div>
        </div>
        <div class="per-tit posi-ab">
          <span class="per-name">{{ perShowData.perNameZh }}</span>
          <span class="per-title">{{ perShowData.perTit }}</span>
          <span class="per-en-name posi-ab">{{ perShowData.perNameEn }}</span>
        </div>
        <div class="per-info posi-ab">
          <p class="info-zh" v-html="perShowData.perInfoZh"></p>
          <p class="info-en">{{ perShowData.perInfoEn }}</p>
        </div>
      </div>
      <div class="per-list w100 posi-ab">
        <ul class="clearfix h100">
          <li class="h100" @mouseenter="perHover1">
            <div class="card-pic">
              <img src="#" />
            </div>
            <div
              :class="[
                'card-tit w100',
                { 'card-tit-active': perShowData.perNameZh === '汤道青' }
              ]"
            >
              <span>董事长</span>
            </div>
          </li>
          <li @mouseenter="perHover2">
            <div class="card-pic w100">
              <img class="w100 h100" src="#" />
            </div>
            <div
              :class="[
                'card-tit',
                { 'card-tit-active': perShowData.perNameZh === '郭志群' }
              ]"
            >
              <span>联合创始人&CEO</span>
            </div>
          </li>
          <li @mouseenter="perHover3">
            <div class="card-pic">
              <img src="#" />
            </div>
            <div
              :class="[
                'card-tit',
                { 'card-tit-active': perShowData.perNameZh === '吕辉' }
              ]"
            >
              <span>营销总裁</span>
            </div>
          </li>
          <li @mouseenter="perHover4">
            <div class="card-pic">
              <img src="#" />
            </div>
            <div
              :class="[
                'card-tit',
                { 'card-tit-active': perShowData.perNameZh === '赵明亮' }
              ]"
            >
              <span>技术总监</span>
            </div>
          </li>
          <li @mouseenter="perHover5">
            <div class="card-pic">
              <img src="#" />
            </div>
            <div
              :class="[
                'card-tit',
                { 'card-tit-active': perShowData.perNameZh === '唐凤' }
              ]"
            >
              <span>人力行政经理</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutModu4",
  data() {
    return {
      perData: [
        {
          // 汤道青
          perImgSrc: "./images/per.png",
          perNameZh: "汤道青",
          perNameEn: "Tang daoqing",
          perTit: "董事长",
          perInfoZh: "上善若水 厚德载物",
          perInfoEn:
            "Network Security Big Data Experts Successful Continuous Entrepreneurs"
        },
        {
          // 郭志群
          perImgSrc: "./images/per.png",
          perNameZh: "郭志群",
          perNameEn: "Guo Zhiqun",
          perTit: "联合创始人&CEO",
          perInfoZh: "网络安全大数据专家 连续成功创业者",
          perInfoEn:
            "Network Security Big Data Experts Successful Continuous Entrepreneurs"
        },
        {
          // 吕辉
          perImgSrc: "./images/per.png",
          perNameZh: "吕辉",
          perNameEn: "Lv Hui",
          perTit: "营销总裁",
          perInfoZh:
            "二十年医疗信息化销售经验<br />" +
            "前河北名软执行总裁<br />" +
            "具有丰富的临床经验<br />" +
            "市场形势及销售模式专家",
          perInfoEn:
            "Network Security Big Data Experts Successful Continuous Entrepreneurs"
        },
        {
          // 赵明亮
          perImgSrc: "./images/per.png",
          perNameZh: "赵明亮",
          perNameEn: "Zhao Mingliang",
          perTit: "技术总监",
          perInfoZh: "技术支持，善于沟通",
          perInfoEn:
            "Network Security Big Data Experts Successful Continuous Entrepreneurs"
        },
        {
          // 唐凤
          perImgSrc: "./images/per.png",
          perNameZh: "唐凤",
          perNameEn: "Tang Feng",
          perTit: "人力行政经理",
          perInfoZh: "人力资源专家 海外工作经验丰富",
          perInfoEn:
            "Network Security Big Data Experts Successful Continuous Entrepreneurs"
        }
      ],
      perShowData: {
        // 汤道青
        perImgSrc: "./images/per.png",
        perNameZh: "汤道青",
        perNameEn: "Tang Daoqing",
        perTit: "董事长",
        perInfoZh: "上善若水 厚德载物",
        perInfoEn:
          "Network Security Big Data Experts Successful Continuous Entrepreneurs"
      },
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("index-modu-1-加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  },
  methods: {
    perHover1() {
      this.perShowData = this.perData[0];
    },
    perHover2() {
      this.perShowData = this.perData[1];
    },
    perHover3() {
      this.perShowData = this.perData[2];
    },
    perHover4() {
      this.perShowData = this.perData[3];
    },
    perHover5() {
      this.perShowData = this.perData[4];
    }
  }
};
</script>

<style scoped lang="stylus">
.about-modu-4 {
    height: 900px;
    background-color: rgba(40,41,67,1);
    background-image: url("../../../common/images/about/modu-4/teamBG.png");
    background-size: cover ;
    .container {
        padding: 0;
        .ab-mo-4-title {
            left: 50%;
            transform: translateX(-50%);
            top: 80px;
            width: 266px;
            height: 85px;
        }
        .per-gr {
            left: 50%;
            transform: translateX(-50%);
            bottom: 80px;
            height: 640px;
            .per-pic {
                left: 0;
                top: 0;
                width: 500px;
                height: 590px;
                img {
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0;
                    z-index: 10;
                    display: inline-block;
                    margin: 0 atuo;
                }
                .bg-cir {
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 20px;
                    width: 500px;
                    height: 500px;
                    border-radius: 50%;
                    background: linear-gradient(180deg, rgba(251, 251, 251, 0.11) 0%, rgba(150, 163, 202, 0.26) 100%);
                    z-index: 4;
                }
            }
            .per-tit {
                left: 576px;
                top: 130px;
                width: 600px;
                height: 112px;
                .per-name {
                    display: inline-block;
                    font-size: 40px;
                    color: #fff;
                    font-weight: 700;
                    margin: 40px 16px 0 0;
                    line-height: 1;
                }
                .per-title {
                    display: inline-block;
                    margin-top: 60px;
                    color: rgba(63, 204, 199, 1);
                    font-size: 16px;
                }
                .per-en-name {
                    left: 0;
                    top: 0;
                    font-size: 70px;
                    color: rgba(255, 255, 255, .2);
                    line-height: 1;
                    font-weight: 700;
                }
            }
            .per-info {
                left: 578px;
                top: 260px;
                width: 440px;
                .info-zh {
                    font-size: 24px;
                    color: #fff;
                    line-height: 1.4;
                    margin-bottom: 34px;
                }
                .info-en {
                    font-size: 20px;
                    color: rgba(255, 255, 255, .2);
                    line-height: 28px;
                }
            }
        }
        .per-list {
            bottom: 80px;
            left: 0;
            height: 110px;
            ul {
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
                li {
                    float: left;
                    width: 172px;
                    margin: 0 12px 0 0;
                    background-color: pink;
                    border-radius: 4px;
                    overflow: hidden;
                    transition: all .4s;
                    .card-pic {
                      height: 74px;
                      background-color: #fff;
                    }
                    .card-tit {
                      text-align: center;
                      line-height: 36px;
                      font-size: 16px;
                      color: #fff;
                      background-color: rgba(66, 68, 97, 1);
                      transition: all .4s;
                    }
                    .card-tit-active {
                      background-color: #14948a;
                    }
                }
                li:last-of-type {
                    margin: 0;
                }
                li:hover {
                  box-shadow:0 0 12px 0  rgba(20,148,138,1);
                  .card-tit {
                    background-color: #14948a;
                  }
                }
            }
        }
    }
}
// =========== 移动端样式 ===============
.about-modu-4-mob {
  height: auto;
  .container {
    display: block;
    .ab-mo-4-title {
      position: relative;
      top: 0;
      margin: 40px 0;
      width: 132px;
      height: 42px;
      img {
        width: 100%;
      }
    }
    .per-gr {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      transform: translateX(0);
      margin-bottom: 360px;
      .per-pic {
        position: relative;
        left: 0;
        top: 0;
        width: 176px;
        height: 206px;
        .bg-cir {
          top: 50%;
          transform: translateY(-50%) translateX(-50%);
          width: 90%;
          height: 80%;
        }
      }
      .per-tit {
        top: 10px;
        left: 40%;
        width: 60%;
        height: auto;
        .per-name {
          font-size: 20px;
          margin-top: 10px;
        }
        .per-title {
          font-size: 14px;
        }
        .per-en-name {
          font-size: 28px;
          top: 36px;
        }
      }
      .per-info {
        top: 110px;
        left: 45%;
        width: 55%;
        p.info-zh {
          font-size: 14px;
          margin: 0 0 20px;
        }
        p.info-en {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .per-list {
      height: auto;
      bottom: 40px;
      ul {
        padding-left: 12px;
        display: block;
        width: 100%;
        li {
          margin-bottom: 12px;
          width: 30%;
          .card-tit {
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
