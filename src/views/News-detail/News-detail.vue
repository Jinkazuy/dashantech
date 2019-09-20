<template>
  <div class="news-detail">
    文章详情页
  </div>
</template>

<script>
export default {
  name: "News-detail",
  created() {
    // 在初始化的时候拿到哈希值的id内容，然后根据ajax，但是。。。并没有数据库，所以还是从本组件中mockData
    console.log(this.$route.query.id);
    if (!this.$route.query.id) {
      // todo:判断如果id是undefined则提示文章不存在，返回主页等操作；
      console.log(this.$route.query.id);
      return;
    }
    console.log(123);
  }
};
</script>

<style scoped lang="stylus">
.news-detail{}
</style>
