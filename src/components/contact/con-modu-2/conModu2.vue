<template>
  <div :class="['con-modu-2', 'container', mob ? 'con-modu-2-mob' : '']">
    <div class="co-mo2-title po-lf50-tr50">
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
  name: "conModu2",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.con-modu-2 {
    height: 500px;
    padding: 0;
    .co-mo2-title {
        position: absolute;
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
// ============= 移动端样式 ============
.con-modu-2-mob {
  display: block;
  height: auto;
  .co-mo2-title {
    position: relative;
    top: 0;
    width: 69px;
    height: 42px;
    margin: 20px 0;
  }
  .co-mo2-bd {
    padding: 20px;
    .bd-l {
      float: none;
      margin: 0;
      h4 {
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
    .bd-r {
      width: 100%;
      margin: 60px 0 0;
      float: none;
      h4 {
        font-size: 20px;
        margin-bottom: 20px;
      }
      ul {
        li {
          margin-bottom: 20px;
        }
      }
      ul:before,ul:after {
        content:"";
        display:table;
      }
      ul:after {
        clear:both;
      }
    }
  }
}
</style>
