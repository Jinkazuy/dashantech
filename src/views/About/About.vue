<template>
  <div class="about">
    <modu1></modu1>
    <modu2></modu2>
    <modu3></modu3>
    <modu4></modu4>
    <modu5></modu5>
  </div>
</template>

<script>
import modu1 from "../../components/about/about-modu-1/aboutModu1";
import modu2 from "../../components/about/about-modu-2/aboutModu2";
import modu3 from "../../components/about/about-modu-3/aboutModu3";
import modu4 from "../../components/about/about-modu-4/aboutModu4";
import modu5 from "../../components/about/about-modu-5/aboutModu5";
export default {
  name: "about",
  components: {
    modu1,
    modu2,
    modu3,
    modu4,
    modu5
  }
};
</script>

<style scoped lang="stylus"></style>
