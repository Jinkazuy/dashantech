<template>
  <div :class="['join-modu-4', 'w100', mob ? 'join-modu-4-mob' : '']">
    <div class="container">
      <div class="jo-mo4-tit">
        <img
          class="w100 h100"
          src="../../../common/images/titles/join-title-InterviewProcess.png"
          alt="面试流程"
        />
      </div>
      <div class="jo-mo4-bd w100">
        <ul class="w100 h100">
          <li class="mo4-bd-mo h100">
            <div class="bd-icon">
              <img src="../../../common/images/join/bd-icon-1.png" />
            </div>
            <p class="bd-link">简历投递</p>
            <p class="bd-desc">发送个人建立到：hr@xxx.com</p>
          </li>
          <li class="mo4-bd-arr h100">
            <i class="iconfont iconjiantou"></i>
          </li>
          <li class="mo4-bd-mo h100">
            <div class="bd-icon">
              <img src="../../../common/images/join/bd-icon-2.png" />
            </div>
            <p class="bd-link">视频面试 & 面试邀约</p>
            <p class="bd-desc">
              部分地区视频面试后 &nbsp; <br v-if="!mob" />等待面试邀约
            </p>
          </li>
          <li class="mo4-bd-arr h100">
            <i class="iconfont iconjiantou"></i>
          </li>
          <li class="mo4-bd-mo h100">
            <div class="bd-icon">
              <img src="../../../common/images/join/bd-icon-3.png" />
            </div>
            <p class="bd-link">面试 & offer</p>
            <p class="bd-desc">部门总监面试 & 收获offer</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "joModu4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.join-modu-4 {
    height: 400px;
    background-color: rgba(247,248,249,1);
    .container {
        display: block;
        padding: 80px 0;
        .jo-mo4-tit {
            width: 138px;
            height: 84px;
            margin: 0 auto 40px;
        }
        .jo-mo4-bd {
            height: 122px;
            ul {
                padding: 0;
                display: flex;
                justify-content: space-between;
                margin: 0;
                li {
                    flex: 1;
                    margin: 0 40px;
                }
                li.mo4-bd-mo {
                    flex: 0 0 16%;
                    font-size: 16px;
                    text-align: center;
                    line-height: 1;
                    .bd-icon {
                        height: 44px;
                        margin: 0 auto 14px;
                    }
                    .bd-link {
                        color: rgba(23, 35, 61, 1);
                        margin-bottom: 14px;
                        font-weight: 700;
                    }
                    .bd-desc {
                        color: rgba(128, 134, 149, 1);
                        line-height: 1.5;
                    }
                }
                .mo4-bd-arr {
                    flex: 1;
                    position: relative;
                    i {
                        display: inline-block;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%) rotateZ(-90deg);
                        color: rgba(0, 0, 0, 0.1);
                        font-size: 80px;
                    }
                }
            }
        }
    }
}
//  =================== 移动端样式 ================
.join-modu-4-mob {
  height: auto;
  .container {
    padding: 40px 0;
    .jo-mo4-tit {
      width: 69px;
      height: 42px;
    }
    .jo-mo4-bd {
      height: auto;
      ul {
        display: block;
        li.mo4-bd-mo {
          .bd-icon {
            height: 30px;
            img {
              height: 100%;
            }
          }
          .bd-link {}
          .bd-desc {
            font-size: 12px;
          }
        }
        li.mo4-bd-arr {
          i {
            position: relative;
            top: 0;
            transform: translateX(-50%) rotateZ(0);
            opacity: .4;
            font-size: 32px;
            color: #14948a;
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>
