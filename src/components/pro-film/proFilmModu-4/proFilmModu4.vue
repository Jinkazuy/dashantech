<template>
  <div
    :class="[
      'pro-film-modu-4',
      'w100',
      'clearfix',
      mob ? 'pro-film-modu-4-mob' : ''
    ]"
  >
    <div class="pro-film-modu-4-hd">
      <img src="../../../common/images/titles/prd-title-film-3.png" />
    </div>
    <div class="pro-film-modu-4-bd container">
      <!--// 使用ondragstart防止拖拽-->
      <img
        ondragstart="return false;"
        src="../../../common/images/pro-film/mo-4.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "proFilmModu4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-film-modu-4 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(40, 50, 122, 1);
    .pro-film-modu-4-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
    }
    .pro-film-modu-4-bd {
        padding: 0 160px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}


// ========== 移动端样式 =========
.pro-film-modu-4-mob {
    padding-bottom: 20px;
    .pro-film-modu-4-hd {
        img{
            height: 42px;
        }
    }
    .pro-film-modu-4-bd {
        padding: 0 20px;
    }
}
</style>
