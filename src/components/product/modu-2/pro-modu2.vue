<template>
  <div class="pro-modu-2 clearfix">
    <div class="pro-mo2-title">
      <img src="../../../common/images/titles/home-title-Industry.png" />
    </div>
    <div class="pro-mo2-hd container">
      <ul>
        <li :class="{ 'pro-li-active': liActiveNum === 1 }" @click="proLi1">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">PACS影像云</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 2 }" @click="proLi2">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">随访系统</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 3 }" @click="proLi3">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">互联网医院信息平台</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 4 }" @click="proLi4">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">移动医生查房系统</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 5 }" @click="proLi5">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">电子胶片</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 6 }" @click="proLi6">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">区域慢病管理系统</p>
        </li>
        <li :class="{ 'pro-li-active': liActiveNum === 7 }" @click="proLi7">
          <div class="pro-mo2-hd-illus">
            <img
              src="../../../common/images/product/modu-2/test_20190924172645.png"
              alt=""
            />
          </div>
          <p class="pro-mo2-hd-text">
            <span>智能康复管理系统</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="pro-mo2-bd"></div>
  </div>
</template>

<script>
export default {
  name: "pro-modu2",
  data() {
    return {
      liActiveNum: 1
    };
  },
  methods: {
    proLi1() {
      this.liActiveNum = 1;
    },
    proLi2() {
      this.liActiveNum = 2;
    },
    proLi3() {
      this.liActiveNum = 3;
    },
    proLi4() {
      this.liActiveNum = 4;
    },
    proLi5() {
      this.liActiveNum = 5;
    },
    proLi6() {
      this.liActiveNum = 6;
    },
    proLi7() {
      this.liActiveNum = 7;
    }
  }
};
</script>

<style scoped lang="stylus">
.pro-modu-2 {
    width: 100%;
    height: 972px;
    background-color: #d8d8d8;
    position: relative;
    .pro-mo2-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 80px;
        width: 202px;
        img {
            width: 100%;
        }
    }
    .pro-mo2-hd {
        position: relative;
        margin-top: 220px;
        padding: 0;
        ul {
            margin: 0 auto;
            padding: 0;
            li {
                position: relative;
                margin: 0 20px 20px 0;
                float: left;
                height: 88px;
                width: 160px;
                background-color: #fff;
                .pro-mo2-hd-illus {
                    width: 100%;
                    height: 40px;
                    margin-bottom: 8px;
                    display: flex;
                    justify-content: center;
                    img {
                        height: 100%;
                        background-color: #fff;
                        opacity: .6;
                        transition: all .4s;
                    }
                }
                p {
                    text-align: center;
                    margin: 0;
                    color: rgba(23, 35, 61, 1);
                    font-size: 16px;
                    transition: all .4s;
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                    // todo:把li的after挪到span上来，达到下划横线和文字一样的宽度；
                }
            }
            li:last-of-type {
                margin: 0;
            }
            li:hover {
              P {
                color: #14948a;
              }
            }
            li:after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                width: 0;
                height: 6px;
                background-color: #14948a;
                transition: all .4s;
            }
            li.pro-li-active {
              p {
                color: #14948a;
                font-weight: 900;
              }
              .pro-mo2-hd-illus {
                img {
                  opacity: 1;
                }
              }
            }
            li.pro-li-active:after {
                width: 60%;
            }
        }
    }
}
</style>
