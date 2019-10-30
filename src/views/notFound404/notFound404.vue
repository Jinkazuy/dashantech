<template>
  <div class="not-found">
    <p class="sorry">
      抱歉，您所访问的页面不存在
    </p>
    <div class="back-home"><a href="/">返回首页</a></div>
    <img class="qr" src="images/qr.jpg" />
    <p class="flow">请关注 ‘大善科技’ 公众号，了解更多医疗科技资讯</p>
  </div>
</template>

<script>
export default {
  name: "notFound404"
};
</script>

<style scoped lang="stylus">
.not-found {
    margin: 100px 0;
    p.sorry {
        text-align: center;
        font-size: 40px;
        color: #14948a;
    }
    .back-home {
        margin-top: 40px;
        text-align: center;
        a {
            display: inline-block;
            text-decoration: none;
            margin: 0 auto;
            padding: 20px 50px;
            font-size: 20px;
            border-radius: 50px;
            background-color: #14948a;
            border: 2px solid #14948a;
            color: #fff;
            transition: all .2s;
        }
        a:hover {
            background-color: #fff;
            color: #14948a;
        }
    }
    img.qr {
        display: block;
        margin: 120px auto 0;
        width: 200px;
        height: 200px;
        border: 2px solid #14948a;
        border-radius: 4px;
    }
    p.flow {
        margin-top: 16px;
        color: #14948a;
        font-size: 16px;
        text-align: center;
        font-weight: 900;
    }
}
</style>
