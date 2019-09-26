<template>
  <div class="side-bar">
    <transition name="back-top-trans">
      <div class="back-top" @click="moveTop" v-show="showSideBar">
        <i class="iconfont iconchevron-top-solid"></i>
      </div>
    </transition>
    <div class="we-chat">
      <i class="iconfont iconweixin"></i>
      <div class="side-qr-code">
        <img src="../../common/images/qr.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  props: ["showSideBar"],
  methods: {
    // 返回顶部，借用jquery
    moveTop() {
      // eslint-disable-next-line
      $("html,body").animate({ scrollTop: 0 }, 300);
      // eslint-disable-next-line
      if ($("html").scrollTop()) {
        // eslint-disable-next-line
        $("html").animate({ scrollTop: 0 }, 300);
        return false;
      }
      // eslint-disable-next-line
      $("body").animate({ scrollTop: 0 }, 300);
      console.log(12);
      return false;
    }
  }
};
</script>

<style scoped lang="stylus">
.side-bar {
    position: fixed;
    right: 40px;
    bottom: 100px;
    width: 46px;
    height: 112px;
    z-index: 9999;
    .back-top, .we-chat {
        position: absolute;
        width: 46px;
        height: 46px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
        background-color: #fff;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .4s;
        i {
            font-size: 24px;
            color: #aaa;
            transition: all .2s;
        }
        .side-qr-code {
            opacity: 0;
            position: absolute;
            right: 70px;
            top: 40%;
            transform: translateY(-44%);
            width: 146px;
            height: 146px;
            border-radius: 2px;
            background-color: #fff;
            box-shadow:0 10px 10px 0 rgba(0,0,0,.3);
            transition: all .4s;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .side-qr-code::before {
            content: '';
            position: absolute;
            right: -10px;
            top: 50%;
            width: 20px;
            height: 20px;
            background-color: #fff;
            transform: translateY(-50%) rotateZ(45deg);
            z-index: -1;
        }
    }
    .back-top:hover, .we-chat:hover {
        background-color: #14948a;
        i {
            color: #fff;
        }
    }
    .back-top {
        top: 0;
    }
    .back-top-trans-enter,
    .back-top-trans-leave-to {
        opacity: 0;
    }
    .we-chat {
        bottom: 0;
    }
    .we-chat:hover {
        .side-qr-code {
            opacity: 1;
        }
    }
}
</style>
