<template>
  <div :class="['side-bar', mob ? 'side-bar-mob' : '']">
    <transition name="back-top-trans">
      <div class="back-top" @click="moveTop" v-show="showSideBar">
        <i class="iconfont iconchevron-top-solid"></i>
      </div>
    </transition>
    <div class="we-chat">
      <i class="iconfont iconweixin"></i>
      <div class="side-qr-code">
        <img class="w100 h100" src="../../../common/images/qr.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideBar",
  props: ["showSideBar"],
  data() {
    return {
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    // index-modu-1加载移动端样式
    this.mob = !!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i);
  },
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

// ============== 移动端样式 =================
.side-bar-mob {
  bottom: 140px;
  right: 20px;
  .we-chat {
    .side-qr-code {
      display: none;
    }
  }
  .we-chat:hover {
    .side-qr-code {
      display: block;
    }
  }
}
</style>
