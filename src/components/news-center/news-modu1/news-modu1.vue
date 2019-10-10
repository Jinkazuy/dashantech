<template>
  <div :class="['news-modu-3', 'w100', mob ? 'news-modu-3-mob' : '']">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.1"
      :particlesNumber="120"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.05"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="container w100 h100">
      <div class="news-m3-title">
        <img
          class="w100 h100"
          src="../../../common/images/titles/news-title-Events.png"
        />
      </div>
      <div class="news-m3-logo">
        <img class="w100 h100" src="../../../common/images/ds-logo.svg" />
      </div>
      <div class="news-m3-time-line w100">
        <ul class="t-l-box">
          <li v-for="(item, index) in timeLineData" :key="index">
            <div class="li-or">
              <div class="or-cont"></div>
            </div>
            <div class="li-date" v-html="item.eventDate"></div>
            <div class="li-p" v-html="item.eventInfo"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modu1",
  data() {
    return {
      // 时间线mock数据，DOM排列顺序与数组中的顺序相同；
      timeLineData: [
        {
          eventDate: "2019/08",
          eventInfo:
            "大善科技获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位"
        },
        {
          eventDate: "2019/07",
          eventInfo:
            "大善科技获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位"
        },
        {
          eventDate: "2019/06",
          eventInfo:
            "大善科技获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位"
        }
      ],
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
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
.news-modu-3 {
    height: 860px;
    background:rgba(14,24,51,1);
    position: relative;
    overflow: hidden;
    #particles-js {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
    .container {
        padding: 0;
        .news-m3-title, .news-m3-logo, .news-m3-time-line {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            img {
                position: relative;
                z-index: 5;
            }
        }
        .news-m3-title {
            top: 80px;
            width: 106px;
            height: 84px;
        }
        .news-m3-logo {
            top: 244px;
            width: 276px;
            height: 86px;
            border-radius: 43px;
        }
        .news-m3-logo:after {
            content: '';
            width: 80%;
            height: 50%;
            position: absolute;
            bottom: -2px;
            left: 10%;
            filter: blur(20px);
            border-radius: 14px;
            background-color: #1addcf;
            z-index: 1;
            animation: auto-shadows 3s ease 0s infinite alternate;
        }
        @keyframes auto-shadows {
            from {
                filter: blur(20px); bottom: -2px;
                width: 80%;
                height: 100%;
            }
            to {
                filter: blur(0); bottom: 10px;
            }
        }
        .news-m3-time-line {
            top: 420px;
            height: 50px;
            ul {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 44%;
                padding: 0;
                li {
                    position: relative;
                    height: 120px;
                    border-left: 1px solid rgba(36, 148, 138, .6);
                    box-sizing: border-box;
                }
                // 左上角圆圈
                .li-or {
                    position: absolute;
                    left: -20px;
                    top: -20px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid rgba(36,148,138,.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(14,24,51,1);
                    .or-cont {
                        width: 35%;
                        height: 35%;
                        border-radius: 50%;
                        background-color: rgba(59, 193, 181, 1);
                        box-shadow:0 0 13px 0 rgba(51,192,179,1);
                        border:1px solid rgba(59,193,181,1);
                    }
                }
                .li-date {
                    position: absolute;
                    left: 40px;
                    top: -12px;
                    color: rgba(36, 148, 138, 1);
                    font-size: 16px;
                    font-weight: 700;
                }
                .li-p {
                    position: absolute;
                    left: 40px;
                    top: 16px;
                    color: #fff;
                    font-size: 16px;
                }
                li:last-of-type {
                    border-left: 1px solid rgba(36, 148, 138, .0);
                }
            }
        }
    }
}
// ============== 移动端样式 ===========
.news-modu-3-mob {
  height: 760px;
  .container {
    display: block;
    .news-m3-title {
      position: relative;
      top: 40px;
      width: 58px;
      height: 42px;
    }
    .news-m3-logo {
      position: relative;
      top: 110px;
    }
    .news-m3-time-line {
      height: auto;
      top: 340px;
      ul {
        position: relative;
        left: 0;
        transform: translateX(40px);
        width: 80%;
        li {
          .li-date {
            font-size: 12px;
          }
          .li-p {
            font-size: 14px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
