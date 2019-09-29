<template>
  <div class="contact">
    <modu1></modu1>
    <modu2></modu2>
    <modu3></modu3>
  </div>
</template>

<script>
import modu1 from "../../components/contact/con-modu-1/conModu1";
import modu2 from "../../components/contact/con-modu-2/conModu2";
import modu3 from "../../components/contact/con-modu-3/conModu3";
export default {
  name: "Contact",
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
    modu3
  }
};
</script>
<style scoped lang="stylus">
.contact {
}
</style>
