<template>
  <div class="proPacsMo-5 w100">
    <ul class="pacs-mo5-btn-box">
      <li :class="{ 'on-hover': btnHoverNow === 1 }" @mouseenter="mouseHover1">
        全院PACS云
        <div class="tr"></div>
      </li>
      <li :class="{ 'on-hover': btnHoverNow === 2 }" @mouseenter="mouseHover2">
        本地PACS工作流程
        <div class="tr"></div>
      </li>
      <li :class="{ 'on-hover': btnHoverNow === 3 }" @mouseenter="mouseHover3">
        云端PACS工作流程
        <div class="tr"></div>
      </li>
      <li :class="{ 'on-hover': btnHoverNow === 4 }" @mouseenter="mouseHover4">
        PACS云适用于远程应用
        <div class="tr"></div>
      </li>
      <li :class="{ 'on-hover': btnHoverNow === 5 }" @mouseenter="mouseHover5">
        PACS云实现资源共享
        <div class="tr"></div>
      </li>
    </ul>
    <div class="pacs-mo5-illus-box container">
      <img
        :class="{ 'img-on-hover': btnHoverNow === 1 }"
        src="../../../common/images/pro-pacs/pacs-illus-3.png"
      />
      <img
        :class="{ 'img-on-hover': btnHoverNow === 2 }"
        src="../../../common/images/pro-pacs/pacs-illus-3.png"
      />
      <img
        :class="{ 'img-on-hover': btnHoverNow === 3 }"
        src="../../../common/images/pro-pacs/pacs-illus-3.png"
      />
      <img
        :class="{ 'img-on-hover': btnHoverNow === 4 }"
        src="../../../common/images/pro-pacs/pacs-illus-3.png"
      />
      <img
        :class="{ 'img-on-hover': btnHoverNow === 5 }"
        src="../../../common/images/pro-pacs/pacs-illus-3.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo5",
  data() {
    return {
      btnHoverNow: 1
    };
  },
  methods: {
    mouseHover1() {
      this.btnHoverNow = 1;
      console.log(1);
    },
    mouseHover2() {
      this.btnHoverNow = 2;
      console.log(2);
    },
    mouseHover3() {
      this.btnHoverNow = 3;
      console.log(3);
    },
    mouseHover4() {
      this.btnHoverNow = 4;
      console.log(4);
    },
    mouseHover5() {
      this.btnHoverNow = 5;
      console.log(5);
    }
  }
};
</script>

<style scoped lang="stylus">
.proPacsMo-5 {
    padding: 40px; 0;
    background: rgba(23,79,196,1);
    .pacs-mo5-btn-box {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0 0 24px 0;
        li {
            position: relative;
            float: left;
            padding: 12px;
            border-radius: 4px;
            background-color: rgba(32,89,208,1);
            color: #fff;
            margin-right: 20px;
            transition: all .4s;
            .tr {
                position: absolute;
                width: 100%;
                height: 10px;
                left: 0;
                bottom: -16px;
                overflow: hidden;
                opacity: 0;
                transition: all .4s;
            }
            .tr:after {
                position: absolute;
                left: 50%;
                top: 4px;
                transform: translateX(-50%) rotateZ(135deg);
                content: "";
                width: 16px;
                height: 16px;
                background-color: #fff;
            }
        }
        li:last-of-type {
            margin: 0;
        }
        li:hover {
            background-color: rgba(11, 52, 138, 1);
            .tr {
                opacity: 1;
            }
        }
        li.on-hover {
            background-color: rgba(11, 52, 138, 1);
            .tr {
                opacity: 1;
            }
        }
    }
    .container {
        padding: 0;
    }
    .pacs-mo5-illus-box {
        @media (max-width: 1366px) {
          width: 90% !important;
        }
        img {
            width: 100%;
            transition: all .4s;
            opacity: 0;
            float: left;
            display: none;
        }
        .img-on-hover {
            opacity: 1;
            display: inline-block;
        }
    }
}
</style>
