<template>
  <div class="pro-WardRound-modu-2">
    <div class="pro-WardRound-modu-2-hd">
      <img src="../../../common/images/titles/prd-title-WardRound-1.png" />
    </div>
    <div
      :class="[
        'pro-WardRound-modu-2-bd',
        'container',
        'w100',
        'clearfix',
        mob ? 'pro-WardRound-modu-2-bd-mob' : ''
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
  </div>
</template>

<script>
export default {
  name: "proWardRoundModu2",
  props: ["mob"],
  data() {
    return {
      // 当前悬停li的索引，用于替换UI界面图片&改变li背景色；
      currentHoverLi: 0,
      descInfo: [
        {
          bigText: "检查信息、检验信息、体征信息",
          // 图片文件需要放在项目根目录/public/images文件夹下；
          imgSrc: "./images/gui-1.png"
        },
        {
          bigText: "患者信息、医嘱信息",
          imgSrc: "./images/gui-2.png"
        },
        {
          bigText: "病历信息、备忘录",
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
.pro-WardRound-modu-2 {
  .pro-WardRound-modu-2-hd {
    margin: 80px 0 44px;
    img {
      height: 84px;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      margin-top: 80px;
    }
  }
  .pro-WardRound-modu-2-bd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0;
    margin-bottom: 48px;
    margin-top: 40px;
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
  .pro-WardRound-modu-2-bd-mob {
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
}
</style>
