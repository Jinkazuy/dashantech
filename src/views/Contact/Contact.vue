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
