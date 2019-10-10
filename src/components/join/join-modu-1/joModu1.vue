<template>
  <div :class="['join-modu-1', 'w100', mob ? 'join-modu-1-mob' : '']">
    <div class="bg-mask w100 h100"></div>
    <div class="container">
      <h2>欢迎加入大善科技</h2>
      <h6>Welcome To Dashan Tech</h6>
      <div class="wec-text">
        <p>
          大数据的时代已经来领，利用数据的能力已经成为竞争中的关键罂粟，在大善，来自各个领域的专家致力于己决问题、创造性思考，从数据分析工作中，我们提供问题解决方案助力医疗事业，同时降低风向。如果你充满创造天赋与激情，对在前沿领域工作充满兴趣，渴望在新的医疗大数据浪场中创造价值，并且起到分享你对卓越的追求和动力，请联系我们，一起前行。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "joModu1",
  data() {
    return {
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
.join-modu-1 {
  position: relative;
  height: 460px;
  background-image: url("../../../common/images/join/hand.jpg");
  background-size: cover;
  background-position: center;
  .bg-mask {
    position: absolute;
    left: 0;
    top: 0;
    background:rgba(38,41,51,1);
    opacity:0.8;
  }
  .container {
    display: block;
    text-align: center;
    color: #fff;
    h2 {
      font-size: 50px;
      margin: 100px 0 24px 0;
      line-height: 1;
    }
    h6 {
      font-size: 24px;
      margin: 0;
      line-height: 1;
    }
    .wec-text {
      width: 60%;
      padding: 32px 60px;
      background-color: #fff;
      border-radius: 4px;
      margin: 100px auto 0;
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.1);
      background-image: url("../../../common/images/index/modu-4/mark.png");
      background-repeat: no-repeat;
      background-position: 20px 20px;
      background-size: 80px;
      p {
        color: rgba(23, 35, 61, 1);
        font-size: 16px;
        line-height: 32px;
      }
    }
  }
}
// ========== 移动端样式 =========
.join-modu-1-mob {
  .container {
    padding: 0;
    h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }
    h6 {
      font-size: 12px;
      opacity: .4;
    }
    .wec-text {
      width: 92%;
      padding: 20px;
    }
  }
}
</style>
