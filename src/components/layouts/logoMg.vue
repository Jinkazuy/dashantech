<template>
  <div class="log-mg w100 h100">
    <img class="log-mg-n" src="../../common/images/name.png" />
    <img class="log-mg-c" src="../../common/images/chtn.png" />
  </div>
</template>

<script>
export default {
  name: "logoMg"
};
</script>

<style scoped lang="stylus">
.log-mg {
    z-index: 9999;
    position: relative;
    background-color: #14948a;
    border-radius: 25px;
    background-image: url("../../common/images/shan.png");
    background-repeat: no-repeat;
    background-position: 3% 50%;
    background-size: 24%;
    transition: all 1s;
    .log-mg-n {
        position: absolute;
        right: 12%;
        top: 50%;
        transform: translateY(-50%);
        height: 66%;
        opacity: 1;
        transition: all .5s;
        transition-timing-function: ease-in-out;
    }
    .log-mg-c {
        position: absolute;
        left: 12%;
        top: 50%;
        transform: translateY(-50%);
        height: 66%;
        opacity: 0;
        transition: all 1.8s;
    }
}
.log-mg:hover {
    background-position: 97% 50%;
    .log-mg-n {
        opacity: 0;
    }
    .log-mg-c {
        opacity: 1;
    }
}
</style>
