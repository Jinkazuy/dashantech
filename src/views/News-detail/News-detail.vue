<template>
  <div class="news-detail">
    <div class="container">
      <div class="left-box">
        <div class="news-list-titles">
          <img src="../../common/images/titles/news-title-news.png" />
        </div>
        <div class="list-qrcode w100">
          <img src="../../common/images/qr.jpg" alt="微信公众号：大善科技" />
          <p class="w100">微信公众号：大善科技</p>
        </div>
      </div>
      <div class="right-box" ref="rgBox">
        <div class="art-header">
          <span class="art-h-month" v-html="articleInfo.month"></span>
          <span class="art-h-date" v-html="articleInfo.date"></span>
          <p class="art-h-tit" v-html="articleInfo.title"></p>
        </div>
        <div class="art-body">
          <p v-html="articleInfo.info"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News-detail",
  data() {
    return {
      rBoxH: 0,
      // 文章索引
      artId: 1,
      // 文章是否存在
      artFlag: true,
      // 当前文章数据，根据哈希值的id查找artDate，然后赋值
      articleInfo: {},
      // 文章数据
      artData: [
        {
          id: "1",
          month: "August",
          date: "2019/09/25",
          title:
            "喜报|我司获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位",
          info:
            "2019年7月25日，我司正式获聘成为中国卫生信息与健康大数据学会第七届常务理事单位。 中国卫生信息与健康医疗大数据学会中国卫生信息与健康医疗大数据学会（Chinese Health Information and Big Data Association, CHIBDA, 以下简称“学会”）是国家卫生和计划生育委员会主管的国家一级学会。其前身是成立于1984年的中国卫生统计学会；2004年更名为中国卫生信息学会。2017年7月，经民政部批复，同意中国卫生信息学会更名为中国卫生信息与健康医疗大数据学会，学会现有专业委员会56个。 近两年，伴随着“互联网+医疗健康”“医联体”“医共体”“大健康”等理念和战略的确立，健康中国建设逐步有效地推进，不断迈入新台阶，我司作为医疗领域信息化平台系统产品供应商和相关解决方案提供商（欢迎了解我司《【关于我们】走进大善科技》），竭力与同业仁人志士一起为医疗卫生事业共蓄力谋发展。 此次获得学会的聘任，我司将充分发挥自身高新技术资源优势和理念，在医疗卫生信息化和大健康数据建设方面为卫生健康事业服务。"
        },
        {
          id: "11",
          month: "August",
          date: "2019/09/25",
          title:
            "喜报|我司获聘成为【中国卫生信息与健康大数据学会】第七届常务理事单位",
          info:
            "2019年7月25日，我司正式获聘成为中国卫生信息与健康大数据学会第七届常务理事单位。 中国卫生信息与健康医疗大数据学会中国卫生信息与健康医疗大数据学会（Chinese Health Information and Big Data Association, CHIBDA, 以下简称“学会”）是国家卫生和计划生育委员会主管的国家一级学会。其前身是成立于1984年的中国卫生统计学会；2004年更名为中国卫生信息学会。2017年7月，经民政部批复，同意中国卫生信息学会更名为中国卫生信息与健康医疗大数据学会，学会现有专业委员会56个。 近两年，伴随着“互联网+医疗健康”“医联体”“医共体”“大健康”等理念和战略的确立，健康中国建设逐步有效地推进，不断迈入新台阶，我司作为医疗领域信息化平台系统产品供应商和相关解决方案提供商（欢迎了解我司《【关于我们】走进大善科技》），竭力与同业仁人志士一起为医疗卫生事业共蓄力谋发展。 此次获得学会的聘任，我司将充分发挥自身高新技术资源优势和理念，在医疗卫生信息化和大健康数据建设方面为卫生健康事业服务。"
        }
      ]
    };
  },
  created() {
    // 清空当前文章数据，防止缓存冲突
    this.articleInfo = {};
    // 在初始化的时候拿到哈希值的id内容，然后根据ajax，但是。。。并没有数据库，所以还是从本组件中mockData
    console.log(this.$route.query.id);
    if (!this.$route.query.id) {
      // todo:判断如果id是undefined则提示文章不存在，返回主页等操作；
      return;
    }
    this.artId = this.$route.query.id;
    // 查找文章是否存在，因为没有数据库，就在本地做对比效验
    let ret = this.artData.find(item => {
      return parseInt(item.id) === parseInt(this.artId);
    });
    // todo:判断如果id是不符合则提示文章不存在，返回主页等操作；
    if (!ret) {
      console.log("文章不存在");
    } else {
      this.articleInfo = ret;
    }
  },
  mounted() {
    // 监听页面实时滚动值，在滚动到底部的时候，改变左侧来的position: fixed;
    window.addEventListener("scroll", this.pageScroll);
    this.rBoxH =
      this.$refs.rgBox.clientHeight ||
      this.$refs.rgBox.offsetHeight ||
      this.$refs.rgBox.scrollHeight;

    // 因为所有页面是作为app.vue的router-view，所以滚动值会继承；
    // 那么切换router的时候就需要将网页的滚动值归零；
    // 出发mounted是，也就是初始化页面时，返回顶部；
    // 返回顶部，借用jquery
    // eslint-disable-next-line
    $("html,body").animate({ scrollTop: 0 }, 300);
    // eslint-disable-next-line
    if ($("html").scrollTop()) {
      // eslint-disable-next-line
      $("html").animate({ scrollTop: 0 }, 300);
      return false;
    }
    // eslint-disable-next-line
    $("body").animate({ scrollTop: 0 }, 300);
    console.log(12);
    return false;
  },
  methods: {
    pageScroll() {
      if (this.scrollTopPosition() > this.rBoxH / 2) {
        // eslint-disable-next-line
        $(".left-box").addClass("left-box-bt");
      } else {
        // eslint-disable-next-line
        $(".left-box").removeClass("left-box-bt");
      }
    },
    // 获取浏览器距离顶部的位置
    scrollTopPosition() {
      return (
        // 浏览器兼容
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      );
    }
  }
};
</script>

<style scoped lang="stylus">
.news-detail{
  background-color: rgba(234,236,243,1);
  margin-top: -20px;
  .container {
    display: block;
    padding: 60px 0 80px 0;
    box-sizing: border-box;
    .left-box {
      position: fixed;
      float: left;
      margin: 0 0 0 28px;
      width: 230px;
      height: 420px;
      border-radius: 4px;
      background-color: #fff;
      .news-list-titles {
        position: absolute;
        left: 50%;
        top: 40px;
        transform: translateX(-50%);
      }
      .list-qrcode {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 240px;
        img {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          width: 174px;
          height: 174px;
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          box-sizing: border-box;
        }
        p {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          text-align: center;
          font-size: 14px;
          color: rgba(128, 134, 149, 1);
        }
      }
    }
    .left-box-bt {
      position: absolute;
      bottom: 80px;
    }
    .right-box {
      float: left;
      margin-left: 300px;
      width: 820px;
      min-height: 420px;
      background-color: #fff;
      padding: 48px 60px;
      .art-header {
        user-select:text;
        border-bottom: 1px solid rgba(216, 216, 216, 1);
        margin-bottom: 36px;
        /*框选颜色更改*/
        .art-h-month::selection , .art-h-date::selection , .art-h-tit::selection
        {
          background:#14948a;
          color:#fff;
        }
        .art-h-month {
          font-size: 20px;
          color: rgba(128, 134, 149, 1);
          margin: 0 20px 24px 0;
        }
        .art-h-date {
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
        }
        .art-h-tit {
          font-size: 24px;
          font-weight: 700;
          color: rgba(23, 35, 61, 1);
          line-height: 32px;
          margin: 24px 0 40px;
        }
      }
      .art-body {
        color: rgba(128, 134, 149, 1);
        p {
          user-select:text;
          line-height: 32px;
        }
        p::selection {
            background:#14948a;
            color:#fff;
        }
      }
    }
  }
}
</style>
