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
      endTime: 10
    };
  },
  created() {
    var end = setInterval(() => {
      this.endTime--;
      console.log(this.endTime);
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
