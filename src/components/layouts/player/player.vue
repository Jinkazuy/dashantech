<template>
  <div
    :class="['player-wrapper', mob ? 'player-wrapper-mob' : '']"
    v-show="videoShow"
  >
    <div id="vd-wrapper"></div>
    <!--视频播放器遮罩层-->
    <div class="player-mask"></div>
  </div>
</template>
<script>
// 引入video.js视频播放器插件
export default {
  name: "player",
  data() {
    return {};
  },
  // 接过父级组件传值，因为用到了默认值，所以不能用props:[]而是用props:{}
  props: {
    // 视频播放地址
    videoSrc: {
      type: String
    },
    // 视频组件是否显示&&播放
    videoShow: {
      type: Boolean,
      default: true
    },
    // 移动端
    mob: {
      type: Boolean,
      default: false
    }
  },
  // mounted() {
  //   this.initVideo();
  // },
  methods: {
    initVideo() {
      // 先判断之前有没有实例化过videoJs，实例化过的话就需要dispose()这个方法销毁实例化的对象；
      // 用JQ获取DOM元素，如果是undefined的话，说明没有这个DOM，那么创建这个DOM；
      // eslint-disable-next-line
      var videoPlayer = $("#video-c").get(0);
      if (typeof videoPlayer !== "undefined") {
        var myPlayer = this.$video("video-c");
        myPlayer.dispose();
      }
      // 之后在动态添加DOM
      var id = "video-c";
      // eslint-disable-next-line
      $("#vd-wrapper").html("<video id='" + id + "' controls preload='none' class='video-js'  poster='' ><source id='video-source' src='' type='video/mp4'></video>");
      //设置资源路径
      // eslint-disable-next-line
      $("#video-source").attr("src", this.videoSrc);

      //初始化视频方法
      // let Player = this.$video("myVideo", {
      //   //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      //   controls: true,
      //   //自动播放属性
      //   autoplay: false,
      //   //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      //   // none 不加载视频数据，因为数据不确定，所以等用户点击开始播放按钮的时候，才下载数据
      //   preload: "none"
      //   // loop : true // 循环播放
      //   // ,
      //   // //设置视频播放器的显示宽度（以像素为单位）
      //   // width: "800px",
      //   // //设置视频播放器的显示高度（以像素为单位）
      //   // height: "400px"
      // });
      // console.log(Player);
    },
    onPlay() {
      setTimeout(() => {
        // 初始化播放器
        this.initVideo();
        // 播放视频
        this.$video("video-c").ready(function() {
          this.play();
        });
      }, 200);
    },
    stopPlay() {
      this.$video("video-c").dispose();
    }
  }
};
</script>

<style lang="stylus">
.player-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  #vd-wrapper {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    #video-c {
      position: absolute !important;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 50%;
      height: 540px;
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
  .player-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .7;
  }
}

// 移动端样式
.player-wrapper-mob {
  #vd-wrapper {
    #video-c {
      position: absolute !important;
      left: 0;
      top: 50%;
      transform: translateY(-50%) ;
      width: 100%;
      height: 220px;
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
