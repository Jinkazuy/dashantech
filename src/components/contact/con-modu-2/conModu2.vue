<template>
  <div class="con-modu-2 container">
    <div class="co-mo2-title">
      <img
        class="w100 h100"
        src="../../../common/images/titles/contact-title-ContactUs.png"
        alt="联系我们"
      />
    </div>
    <div class="co-mo2-bd">
      <div class="bd-l">
        <h4>技术支持</h4>
        <ul>
          <li>Email&nbsp;&nbsp;&nbsp;supportyou@dashantech.com.cn</li>
          <li>电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;010 - 57220697</li>
        </ul>
      </div>
      <div class="bd-r">
        <h4>业务洽谈</h4>
        <ul>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
          <li>华北地区 张先森 13800138000</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conModu2"
};
</script>

<style scoped lang="stylus">
.con-modu-2 {
    height: 500px;
    padding: 0;
    .co-mo2-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 80px;
        width: 136px;
        height: 84px;
    }
    .co-mo2-bd {
        .bd-l, .bd-r {
            h4 {
                color: rgba(23, 35, 61, 1);
                font-size: 24px;
                font-weight: 700;
                margin: 0 0 36px 0;
            }
            ul {
                padding: 0;
                li {
                    user-select: text;
                    font-size: 16px;
                    colro: rgba(23, 35, 61, 1);
                    margin: 0 0 10px 0;
                }
            }
        }
        .bd-l {
            margin: 210px 80px 0 40px;
            float: left;
        }
        .bd-r {
            width: 60%;
            margin: 210px 40px 0 0;
            float: left;
            ul {
                li {
                    float: left;
                    margin-right: 32px;
                }
            }
        }
    }
}
</style>
