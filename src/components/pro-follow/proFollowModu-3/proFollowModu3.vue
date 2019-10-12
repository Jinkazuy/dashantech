<template>
  <div
    :class="[
      'proFollowMo-3',
      'container',
      'w100',
      'clearfix',
      mob ? 'proFollowMo-3-mob' : ''
    ]"
  >
    <div class="pro-follow-inter-face-img-box" v-if="!mob">
      <img :src="descInfo[currentHoverLi].imgSrc" />
    </div>
    <ul class="pro-follow-desc-list-box">
      <li
        v-for="(item, index) in descInfo"
        :key="index"
        :class="{ 'current-hover': currentHoverLi === index }"
        @mouseenter="liHover(index)"
      >
        <span class="big-tx">{{ item.bigText }}</span>
        <span class="lit-tx">{{ item.litText }}</span>
        <div class="pro-follow-inter-face-img-box" v-if="mob">
          <img :src="descInfo[currentHoverLi].imgSrc" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "proFollowModu3",
  props: ["mob"],
  data() {
    return {
      // 当前悬停li的索引，用于替换UI界面图片&改变li背景色；
      currentHoverLi: 0,
      descInfo: [
        {
          bigText: "患者信息",
          litText: "从HIS、电子病历等系统中自动到处患者信息",
          // 图片文件需要放在项目根目录/public/images文件夹下；
          imgSrc: "./images/gui-1.png"
        },
        {
          bigText: "问卷计划",
          litText: "根据病种设计的随访内容及随访间隔时间",
          imgSrc: "./images/gui-2.png"
        },
        {
          bigText: "随访工作",
          litText: "系统根据随访计划，每天自动提醒随访",
          imgSrc: "./images/gui-1.png"
        },
        {
          bigText: "统计分析",
          litText: "对随访情况、问卷答案自动统计",
          imgSrc: "./images/gui-2.png"
        },
        {
          bigText: "知识库",
          litText: "收纳各种医学知识，位医护人员提供医学参考",
          imgSrc: "./images/gui-1.png"
        },
        {
          bigText: "反馈管理",
          litText: "记录患者的反馈信息，方便医护人员处理",
          imgSrc: "./images/gui-2.png"
        },
        {
          bigText: "通讯管理",
          litText: "支持软件拨号、耳麦通话、电话录音、自动保存记录",
          imgSrc: "./images/gui-1.png"
        }
      ]
    };
  },
  methods: {
    liHover(idx) {
      this.currentHoverLi = idx;
    }
  }
};
</script>

<style scoped lang="stylus">
.proFollowMo-3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0;
    margin-bottom: 48px;
    .pro-follow-inter-face-img-box {
        width: 46%;
        position: relative;
        float: left;
        img {
            width: 100%;
            transition: all .4s;
        }
    }
    .pro-follow-desc-list-box {
        padding: 0;
        margin: 0 0 0 28px;
        width: 40%;
        li {
            width: 100%;
            padding: 16px;
            border-radius: 4px;
            transition: all .4s;
            border-left: 2px solid rgba(248, 248, 250, 1);
            span.big-tx {
                vertical-align: middle;
                font-size: 20px;
                color: rgba(23, 35, 61, 1);
                font-weight: 700;
                margin-right: 16px;
                transition: all .4s;
            }
            span.lit-tx {
                vertical-align: middle;
                font-size: 16px;
                color: rgba(128, 134, 149, 1);
                font-weight: 400;
                transition: all .4s;
            }
        }
        li.current-hover {
            border-left: 8px solid #14948a;
            background-color: rgba(248, 248, 250, 1);
            border-radius: 0 4px 4px 0;
            span.big-tx{
                color: rgba(20, 148, 138, 1);
            }
            span.lit-tx{
                font-weight: 700;
                color: rgba(23, 35, 61, 1);
            }
        }
    }
}
// ============= 移动端样式 ============
.proFollowMo-3-mob {
  display: block;
  .pro-follow-inter-face-img-box {
    float: none;
    margin: 0 auto 30px;
    width: 80%;
  }
  ul.pro-follow-desc-list-box {
    float: none;
    width: 100%;
    margin: 0;
    li {
      border-left: 8px solid #ccc;
      border-radius: 0;
      .big-tx{
        display: block;
        font-size: 16px;
        height: 100%;
      }
      .lit-tx{
        font-size: 12px;
      }
      .pro-follow-inter-face-img-box {
        margin: 0;
        height: 0;
        transition: all .3s;
        img {
          height: 0;
        }
      }
    }
    li.current-hover {
      .pro-follow-inter-face-img-box {
        margin: 40px;
        height: auto;
        img {
          height: auto;
        }
      }
    }
  }
}
</style>
