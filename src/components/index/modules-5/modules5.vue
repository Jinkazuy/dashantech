<template>
  <div class="home-cont-modu-4 w100">
    <div class="us-pics">
      <ul class="ln-1 w100">
        <li class="col-1">
          <img class="w100 h100" src="../../../../public/images/poto-1.jpg" alt="" />
        </li>
        <li class="col-2">
          <img class="w100 h100" src="../../../../public/images/poto-2.jpg" alt="" />
        </li>
        <li class="col-3">
          <img class="w100 h100" src="../../../../public/images/poto-3.jpg" alt="" />
        </li>
      </ul>
      <ul class="ln-2 w100">
        <li class="col-1">
          <img class="w100 h100" src="../../../../public/images/poto-3.jpg" alt="" />
        </li>
        <li class="col-2">
          <img class="w100 h100" src="../../../../public/images/poto-2.jpg" alt="" />
        </li>
        <li class="col-3">
          <img class="w100 h100" src="../../../../public/images/poto-1.jpg" alt="" />
        </li>
      </ul>
    </div>
    <div class="join-us">
      <img
        src="../../../common/images/titles/home-title-joinUs.png"
        alt="加入我们"
        class="titles"
      />
      <p class="join-text w100">
        在大善科技可以展示你的所有才华，我们期待这样的你加入进来。<br /><br />医疗科学工作者、大数据分析师、高级JAVA开发、数据可视化工程师。
        <br /><br />如果您具备创业精神，我们更欢迎你的加入，一起分享行业成果。
      </p>
      <div class="on-more">
        <router-link class="w100 h100" to="/join">加入我们</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modules5"
};
</script>

<style scoped lang="stylus">
.home-cont-modu-4 {
    position: relative;
    height: 820px;
    padding-top: 5%;
    box-sizing: border-box;
    background-color: #fff;
    .us-pics {
        position: absolute;
        right: 40%;
        height: 80%;
        width: 1180px;
        background-color: rgba(240, 240, 240, 1);
        padding: 8px;
        box-sizing: border-box;
        .ln-1, .ln-2 {
            height: 49.3%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            img {
              margin: 0 auto;
            }
        }
        .ln-1 {
            margin-bottom: 8px;
            .col-1 {
                width: 45%;
            }
            .col-2 {
                flex: 1;
                margin: 0 8px;
            }
            .col-3 {
                flex: 1;
            }
        }
        .ln-2 {
            margin-bottom: 8px;
            .col-1 {
                flex: 1;
            }
            .col-2 {
                flex: 1;
                margin: 0 8px;
            }
            .col-3 {
                width: 45%;
            }
        }
    }
    .join-us {
        position: absolute;
        right: 13%;
        width: 340px;
        height: 80%;
        padding: 18px 0 0 20px;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.9)
        .titles {
            margin-bottom: 10%;
        }
        .join-text {
            font-size: 20px;
            line-height: 36px;
            color: rgba(128, 134, 149, 1);
            margin-bottom: 10%;
        }
        .on-more {
            width: 94px;
            height: 34px;
            text-align: center;
            box-sizing: border-box;
            a {
                border-radius: 17px;
                border: 1px solid #14948a;
                color: #14948a;
                line-height: 32px;
                display: block;
                text-decoration: none;
                transition: all .4s;
                background-color: #fafafa;
            }
            a:hover {
                background-color: #14948a;
                color: #fff;
                font-weight: 800;
                box-shadow:0 4px 14px 0 rgba(50,230,210,0.9);
            }
        }
    }
}
</style>
