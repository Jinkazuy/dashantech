<template>
  <div class="about-modu-5">
    <div class="container">
      <div class="ab-mo5-title">
        <img src="../../../common/images/titles/about-title-Reasons.png" />
      </div>
      <div class="ab-mo5-info">
        <h3>大健康医疗服务云平台</h3>
        <p>
          依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案。
          <br />
          移动大健康综合服务云平台汇聚居民全生命周期的总和医疗和健康大数据，建立居民健康画像及家庭实施、有效、精准健康档案。
        </p>
      </div>
      <div class="ab-mo5-body">
        <ul>
          <li class="reason-1">
            <img
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-1.png"
              alt=""
            />
          </li>
          <li class="reason-2">
            <img
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-2.png"
              alt=""
            />
          </li>
          <li class="reason-3">
            <img
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-3.png"
              alt=""
            />
          </li>
          <li class="reason-4">
            <img
              src="../../../common/images/index/modu-1/home-modu1-reus-ch-4.png"
              alt=""
            />
          </li>
        </ul>
        <div class="more-button">
          <a href="#">行业解决方案</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutModu5"
};
</script>

<style scoped lang="stylus">
.about-modu-5 {
    width: 100%;
    height: 1166px;
    background-image: url("../../../common/images/about/modu-5/ab-mo-5BG.png");
    background-size: cover ;
    background-position: center center;
    .container {
      .ab-mo5-title {
        position: absolute;
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
        position: absolute;
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
          width: 100%;
          margin: 0;
          font-size: 16px;
          line-height: 30px;
        }
      }
      .ab-mo5-body {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 440px;
        width: 80%;
        ul {
          position: relative;
          padding: 0;
          width: 100%;
          height: 100%;
          li {
            width: 46%;
            height: 46%;
            float: left;
            margin: 0 4% 3.9% 0;
            border-radius: 6px;
            overflow: hidden;
            transition: all .4s;
            a {
              width: 100%
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
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
          position: absolute;
          left: 48%;
          transform: translateX(-50%);
          bottom: -80px;
          width: 190px;
          height: 60px;
          a {
            width: 100%;
            height: 100%;
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
</style>
