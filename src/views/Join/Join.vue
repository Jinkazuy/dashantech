<template>
  <div class="join">
    <modu1></modu1>
    <modu2></modu2>
    <modu3></modu3>
    <modu4></modu4>
  </div>
</template>

<script>
import modu1 from "../../components/join/join-modu-1/joModu1";
import modu2 from "../../components/join/join-modu-2/joModu2";
import modu3 from "../../components/join/join-modu-3/joModu3";
import modu4 from "../../components/join/join-modu-4/joModu4";
export default {
  name: "Join",
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
