<template>
  <div :class="['about-modu-5', 'w100', mob ? 'about-modu-5-mob' : '']">
    <div class="container">
      <div class="ab-mo5-title posi-ab">
        <img src="../../../common/images/titles/about-title-Reasons.png" />
      </div>
      <div class="ab-mo5-info posi-ab">
        <h3>大健康医疗服务云平台</h3>
        <p class="w100">
          依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案。
          <br />
          <br v-if="mob" />
          移动大健康综合服务云平台汇聚居民全生命周期的总和医疗和健康大数据，建立居民健康画像及家庭实施、有效、精准健康档案。
        </p>
      </div>
      <div class="ab-mo5-body posi-ab">
        <ul class="w100 h100 posi-re">
          <li class="reason-1">
            <img
              class="h100 w100"
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-1.png"
              alt=""
            />
          </li>
          <li class="reason-2">
            <img
              class="h100 w100"
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-2.png"
              alt=""
            />
          </li>
          <li class="reason-3">
            <img
              class="h100 w100"
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-3.png"
              alt=""
            />
          </li>
          <li class="reason-4">
            <img
              class="h100 w100"
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-4.png"
              alt=""
            />
          </li>
        </ul>
        <div class="more-button posi-ab">
          <a class="w100 h100" href="#">行业解决方案</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutModu5",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.about-modu-5 {
    height: 1166px;
    background-image: url("../../../common/images/about/modu-5/ab-mo-5BG.png");
    background-size: cover ;
    background-position: center center;
    .container {
      .ab-mo5-title {
        left: 50%;
        transform: translateX(-50%);
        top: 80px;
        width:496px;
        height: 170px;
        background-image: url("../../../common/images/about/modu-5/title-bg.png");
        background-size: cover ;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ab-mo5-info {
        left: 50%;
        transform: translateX(-50%);
        top: 280px;
        width: 70%;
        color: #fff;
        text-align: center;
        h3 {
          font-size: 28px;
          line-heihgt: 1;
          margin: 0 0 24px 0;
        }
        p {
          margin: 0;
          font-size: 16px;
          line-height: 30px;
        }
      }
      .ab-mo5-body {
        left: 50%;
        transform: translateX(-50%);
        top: 440px;
        width: 80%;
        ul {
          padding: 0;
          li {
            width: 46%;
            height: 46%;
            float: left;
            margin: 0 4% 3.9% 0;
            border-radius: 6px;
            overflow: hidden;
            transition: all .4s;
          }
          // 因为卡片颜色不同，所以投影颜色分开写；
          li:hover{
            transform: translateY(-20px);
          }
          .reason-1:hover{
            box-shadow: 0 10px 25px 10px rgba(65,155,19,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
          }
          .reason-2:hover{
            box-shadow: 0 10px 25px 10px rgba(16,164,200,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
          }
          .reason-3:hover{
            box-shadow: 0 10px 25px 10px rgba(242,159,26,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
          }
          .reason-4:hover{
            box-shadow: 0 10px 25px 10px rgba(9,68,116,0.2), 0 20px 15px 0 rgba(0,0,0,.3);
          }
        }
        .more-button {
          left: 48%;
          transform: translateX(-50%);
          bottom: -80px;
          width: 190px;
          height: 60px;
          a {
            display: inline-block;
            border-radius: 30px;
            background-color: #fff
            font-size: 20px;
            line-height: 60px;
            color: #fff;
            text-decoration: none;
            background:linear-gradient(225deg,rgba(43,203,196,1) 0%,rgba(19,155,145,1) 100%);
            border:1px solid #14948a;
            transition: all .4s;
            text-align: center;
            text-shadow: 0 4px 16px rgba(0,0,0,.2);
          }
          a:hover {
            border:1px solid rgba(127,214,208,1);
            text-shadow: 0 4px 16px rgba(24,237,222,1);
            box-shadow:0 4px 16px 0 rgba(24,237,222,1);
          }
        }
      }
    }
}
// ============= 移动端样式 ===========
.about-modu-5-mob {
  height: auto;
  padding-bottom: 99px;
  .container {
    display: block;
    .ab-mo5-title {
      position: relative;
      width: 100%;
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: 50%;
      top: 30px;
      margin-bottom: 20px;
      img {
        width: 116px;
        height: 44px;
      }
    }
    .ab-mo5-info {
      position: relative;
      top: 0;
      margin-bottom: 20px;
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 12px;
        line-height: 20px;
      }
    }
    .ab-mo5-body {
      position: relative;
      width: 98%;
      top: 0;
      .more-button {
        position: relative;
        top: 0;
      }
    }
  }
}
</style>
