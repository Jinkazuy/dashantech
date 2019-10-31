<template>
  <div class="on-up-data">
    <h4>
      该模块正在升级中，将于&nbsp;&nbsp;{{
        endTime
      }}&nbsp;&nbsp;秒后跳转到产品中心
    </h4>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "onUpData",
  data() {
    return {
      endTime: 10,
      // 当前路由的路径
      currentRouter: ""
    };
  },
  created() {
    // 首先获取当前路由路径
    this.currentRouter = this.$router.history.current.path;
    var end = setInterval(() => {
      this.endTime--;
      // 每次倒计时都判断当前页面路由，是否是哪些正在升级中的页面的路由，如果不是，那么就清空倒计时；
      // 用每次倒计时的路径，和刚进入页面时的路径取对比，如果不相等，那么就清除这个定时器；
      if (this.currentRouter !== this.$router.history.current.path) {
        clearInterval(end);
      }
      // 如果相等的话，说明当前的路由，就是刚进入时的路由，
      // 那么就可以当倒计时<=1秒的时候，清除定时器，然后跳转到product页面；
      if (this.endTime <= 1) {
        clearInterval(end);
        this.$router.push({
          path: "/product"
        });
      }
    }, 1000);
  }
};
</script>

<style scoped lang="stylus">
.on-up-data {
    color: #14948a;
    text-align: center;
    padding: 120px 0;
    h4 {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
    }
    p {
        margin: 0;
    }
}
</style>
