<template>
  <div class="proPacsMo-7">
    <div class="pacs-mo7-hd">
      <div class="pacs-mo7-hd-tit">
        <img src="../../../common/images/titles/prd-title-大善PACS-ylt.png" />
      </div>
    </div>
    <div class="pacs-mo7-bd">
      <div class="container">
        <img src="../../../common/images/pro-pacs/pacs-illus-5.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proPacsMo7"
};
</script>

<style scoped lang="stylus">
.proPacsMo-7 {
    padding: 80px 0 0;
    background: rgba(240,245,255,1);
    .pacs-mo7-hd {
        width: 377px;
        margin: 0 auto 20px;
        img {

            width: 100%;

        }
    }
    .pacs-mo7-bd {
        background: rgba(23,79,196,1);
        .container {
            justify-content: center;
            padding: 0 0 100px 0;
            margin: 460px auto 0;
            img {
                margin-top: -400px;
                width: 80%;
            }
        }
    }
}
</style>
