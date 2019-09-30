<template>
  <div class="product-pacs">
    <mo1></mo1>
    <mo2></mo2>
    <mo3></mo3>
    <mo4></mo4>
    <mo5></mo5>
    <mo6></mo6>
    <mo7></mo7>
    <mo8></mo8>
  </div>
</template>

<script>
import mo1 from "../../components/pro-pacs/proPacsModu-1/proPacsMo1";
import mo2 from "../../components/pro-pacs/proPacsModu-2/proPacsMo2";
import mo3 from "../../components/pro-pacs/proPacsModu-3/proPacsMo3";
import mo4 from "../../components/pro-pacs/proPacsModu-4/proPacsMo4";
import mo5 from "../../components/pro-pacs/proPacsModu-5/proPacsMo5";
import mo6 from "../../components/pro-pacs/proPacsModu-6/proPacsMo6";
import mo7 from "../../components/pro-pacs/proPacsModu-7/proPacsMo7";
import mo8 from "../../components/pro-pacs/proPacsModu-8/proPacsMo8";
export default {
  name: "productPacs",
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
    mo1,
    mo2,
    mo3,
    mo4,
    mo5,
    mo6,
    mo7,
    mo8
  }
};
</script>

<style scoped lang="stylus">
.product-pacs {
}
</style>
