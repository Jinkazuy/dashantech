<template>
  <div class="join-modu-3">
    <div class="container">
      <div class="jo-mo3-tit">
        <img
          src="../../../common/images/titles/join-title-FringeBenefits.png"
          alt="福利待遇"
        />
      </div>
      <div class="jo-mo3-pic">
        <ul>
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
      <div class="jo-mo3-ft">
        <ul>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
        </ul>
        <ul>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li>
            <div class="icon-b"></div>
            <p class="icon-i">弹性工作</p>
          </li>
          <li>
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
  name: "joModu3"
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
            img {
                width: 100%;
                height: 100%;
            }
        }
        .jo-mo3-pic {
            width: 100%;
            ul {
                width: 100%;
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
            width: 100%;
            height: 300px;
            margin: 80px 0 0;
            ul {
                width: 100%;
                height: 84px;
                margin: 0 0 48px;
                display: flex;
                justify-content: space-around;
                padding: 0;
                li {
                    height: 100%;
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
</style>
