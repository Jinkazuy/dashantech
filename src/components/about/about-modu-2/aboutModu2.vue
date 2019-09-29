<template>
  <div class="about-modu-2 w100">
    <div class="container">
      <div class="ab-mo-wrapper w100">
        <div class="ab-mo2-title">
          <img
            class="w100"
            src="../../../common/images/titles/about-title-DaDshanTech.png"
          />
        </div>
        <div class="ab-mo2-body w100">
          <ul>
            <li class="posi-re">
              <div class="ill w100 posi-ab">
                <img
                  class="w100 h100 posi-ab"
                  src="../../../common/images/about/modu-2/ch-rc.png"
                />
              </div>
              <div class="num posi-ab">
                <span class="number">107</span>
                <span class="Company">位</span>
                <p class="p-type">技术人才</p>
              </div>
            </li>
            <li class="posi-re">
              <div class="ill w100 posi-ab">
                <img
                  class="w100 h100 posi-ab"
                  src="../../../common/images/about/modu-2/ch-zj.png"
                />
              </div>
              <div class="num posi-ab">
                <span class="number">500</span>
                <span class="Company">位</span>
                <p class="p-type">行业专家</p>
              </div>
            </li>
            <li class="posi-re">
              <div class="ill w100 posi-ab">
                <img
                  class="w100 h100 posi-ab"
                  src="../../../common/images/about/modu-2/ch-zl.png"
                />
              </div>
              <div class="num posi-ab">
                <span class="number">79</span>
                <span class="Company">项</span>
                <p class="p-type">技术专利</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutModu2"
};
</script>

<style scoped lang="stylus">
.about-modu-2 {
    height: 734px;
    background-color: #f9f9f9;
    padding-top: 230px;
    .container {
        padding: 0;
        .ab-mo-wrapper{
            .ab-mo2-title {
                width: 330px;
                margin: 0 auto;
                height: 84px;
            }
            .ab-mo2-body {
                ul {
                    width: 69%;
                    padding: 0;
                    margin: 42px auto 0;
                    display: flex;
                    justify-content: space-between;
                    li {
                        width: 230px;
                        height: 300px;
                        .ill {
                            top: 0;
                            left: 0;
                            height: 198px;
                            transition: all .4s;
                            img {
                                z-index: 10;
                            }
                        }
                        .ill::after {
                          content: '1';
                          position: absolute;
                          left: 50%;
                          top: 70%;
                          transform: translateX(-50%) translateY(-50%);
                          transition: all .4s;
                          width: 50%;
                          height: 50%;
                          background-color: #14948a;
                          opacity: 0;
                          z-index: 3;
                          filter: blur(40px);
                        }
                        .num {
                            top: 200px;
                            left: 50%;
                            transform: translateX(-50%);
                            line-height: 1;
                            margin-top: 14px;
                            text-align: center;
                            vertical-align: top;
                            .number {
                                font-size: 40px;
                                color: #14948a;
                                font-weight: 700;
                            }
                            .Company {
                                font-size: 16px;
                                color: rgba(153, 153, 153, 1);
                            }
                            .p-type {
                                font-size: 24px;
                                color: rgba(102, 102, 102, 1);
                                line-height: 40px;
                            }
                        }
                    }
                    li:hover {
                        .ill {
                            top: -20px;
                        }
                        .ill::after {
                          opacity: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>
