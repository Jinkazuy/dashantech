<template>
  <div class="join">
    <modu1 :mob="mob"></modu1>
    <modu2 :mob="mob"></modu2>
    <modu3 :mob="mob"></modu3>
    <modu4 :mob="mob"></modu4>
  </div>
</template>

<script>
import modu1 from "../../components/join/join-modu-1/joModu1";
import modu2 from "../../components/join/join-modu-2/joModu2";
import modu3 from "../../components/join/join-modu-3/joModu3";
import modu4 from "../../components/join/join-modu-4/joModu4";
export default {
  name: "Join",
  props: ["mob"],
  mounted() {
    // 因为所有页面是作为app.vue的router-view，所以滚动值会继承；
    // 那么切换router的时候就需要将网页的滚动值归零；
    // 出发mounted是，也就是初始化页面时，返回顶部；
    // 返回顶部，借用jquery
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
  },
  components: {
    modu1,
    modu2,
    modu3,
    modu4
  }
};
</script>

<style scoped lang="stylus">
.join {}
</style>
