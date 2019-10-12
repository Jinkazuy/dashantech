<template>
  <div :class="['join-modu-3', mob ? 'join-modu-3-mob' : '']">
    <div class="container">
      <div class="jo-mo3-tit">
        <img
          class="w100 h100"
          src="../../../common/images/titles/join-title-FringeBenefits.png"
          alt="福利待遇"
        />
      </div>
      <div class="jo-mo3-pic w100">
        <ul class="w100">
          <li>
            <img src="../../../common/images/join/fl-1.png" />
          </li>
          <li>
            <img src="../../../common/images/join/fl-2.png" />
          </li>
          <li>
            <img src="../../../common/images/join/fl-3.png" />
          </li>
        </ul>
      </div>
      <div class="jo-mo3-ft w100">
        <ul class="w100">
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
        </ul>
        <ul class="w100">
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li class="h100">
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "joModu3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.join-modu-3 {
    .container {
        padding: 0 58px;
        display: block;
        .jo-mo3-tit {
            width: 138px;
            height: 87px;
            margin: 80px auto 40px;
        }
        .jo-mo3-pic {
            ul {
                display: flex;
                justify-content: space-between;
                padding: 0;
                li {
                    width: 31%;
                    border-radius: 4px;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
            }
        }
        .jo-mo3-ft {
            height: 300px;
            margin: 80px 0 0;
            ul {
                height: 84px;
                margin: 0 0 48px;
                display: flex;
                justify-content: space-around;
                padding: 0;
                li {
                    width: 80px;
                    border-radius: 4px;
                    overflow: hidden;
                    .icon-b {
                        width:44px;
                        height:44px;
                        border:2px solid rgba(51,51,51,1);
                        margin: 0 auto 16px;
                    }
                    .icon-i {
                        text-align: center;
                        font-size:16px;
                        color:rgba(128,134,149,1);
                    }
                }
            }
        }
    }
}
// =========== 移动端样式 ==========
.join-modu-3-mob {
  .container {
    padding: 0 20px;
    .jo-mo3-tit {
      width: 69px;
      height: 42px;
    }
    .jo-mo3-ft {
      height: 250px;
      ul {
        li {
          p {
            font-size: 12px !important;
          }
        }
      }
    }
  }
}
</style>
