<template>
  <div class="about-modu-3">
    <div class="container">
      <div class="ab-co-3-title">
        <img
          src="../../../common/images/titles/about-title-OurServiceContent.png"
          alt=""
        />
      </div>
      <div class="ab-co-3-body">
        <div class="ab3-hover-view-1">
          <a class="ab3-server-con-1" href="#">
            <div class="ab3-server-con-info">
              <h3>医疗大健康平台</h3>
              <p>
                依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
              </p>
            </div>
          </a>
          <a class="ab3-server-con-2" href="#">
            <div class="ab3-server-con-info">
              <h3>医疗大健康平台</h3>
              <p>
                依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
              </p>
            </div>
          </a>
          <a class="ab3-server-con-3" href="#">
            <div class="ab3-server-con-info">
              <h3>医疗大健康平台</h3>
              <p>
                依托大数据和人工智能，固化顶级专家经验和智慧不依赖稀缺医生资源自动给医疗救助人员提供医疗参考方案
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 使用jQuery页面加载事件
// 处理模块1 的动画效果，因为原生css无法直接选择前方兄弟元素，所以用JQ实现；
// eslint-disable-next-line
  $(window).on("load", function() {
  // eslint-disable-next-line
    $(".ab3-server-con-1").on("mouseenter", function() {
    // eslint-disable-next-line
      $(".ab3-server-con-1")
      .siblings("a")
      .css("opacity", "0.8");
  });
  // eslint-disable-next-line
    $(".ab3-server-con-1").on("mouseleave", function() {
    // eslint-disable-next-line
      $(".ab3-server-con-1")
      .siblings()
      .css("opacity", "1");
  });

  // eslint-disable-next-line
    $(".ab3-server-con-2").on("mouseenter", function() {
    // eslint-disable-next-line
      $(".ab3-server-con-2")
      .siblings("a")
      .css("opacity", "0.8");
  });
  // eslint-disable-next-line
    $(".ab3-server-con-2").on("mouseleave", function() {
    // eslint-disable-next-line
      $(".ab3-server-con-2")
      .siblings()
      .css("opacity", "1");
  });

  // eslint-disable-next-line
    $(".ab3-server-con-3").on("mouseenter", function() {
    // eslint-disable-next-line
      $(".ab3-server-con-3")
      .siblings("a")
      .css("opacity", "0.8");
  });
  // eslint-disable-next-line
    $(".ab3-server-con-3").on("mouseleave", function() {
    // eslint-disable-next-line
      $(".ab3-server-con-3")
      .siblings()
      .css("opacity", "1");
  });
});
export default {
  name: "aboutModu3"
};
</script>

<style scoped lang="stylus">
.about-modu-3 {
    background-color: #fff;
    height: 800px;
    width: 100%;
    .container {
        padding: 0;
        height: 100%;
        .ab-co-3-title {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 80px;
            width: 234px;
            height: 84px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .ab-co-3-body {
            position: absolute;
            top: 204px;
            width: 100%;
            height: 512px;
            .ab3-hover-view-1 {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 0;
                width: 1020px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                .ab3-server-con-1, .ab3-server-con-2, .ab3-server-con-3 {
                    position: relative;
                    display: block;
                    height: 100%;
                    width: 317px;
                    background-color: #fff;
                    color: #fff;
                    overflow: hidden;
                    border-radius: 4px;
                    box-sizing: border-box;
                    transition: all .4s;
                    // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                    // backdrop-filter: blur(20px);
                    .ab3-server-con-info {
                        position: absolute;
                        left: 0;
                        bottom: -120px;
                        height: 200px;
                        width: 100%;
                        padding-top: 26px;
                        text-align: center;
                        background-color: rgba(20, 40, 120, .6);
                        transition: all .4s;
                        border-radius: 0 0 8px 8px;
                        h3 {
                            line-height: 1;
                            font-size: 24px;
                            font-weight: 700;
                            margin: 0 0 30px 0;
                        }
                        p {
                            padding: 0 40px;
                            line-height: 1.6;
                            margin: 0;
                        }
                    }
                    // tudo:这里媒体查询
                }
                .ab3-server-con-1:hover, .ab3-server-con-2:hover, .ab3-server-con-3:hover{
                    box-shadow: 0 10px 25px 10px rgba(0,0,150,0.2), 0 10px 15px 0 rgba(0,0,0,.3);
                    transform: translateY(-20px);
                    .ab3-server-con-info {
                        bottom: 0;
                        background-color: rgba(20, 40, 120, .7);
                        // 背景模糊、毛玻璃效果，只有IOS&&chrome能够看到该效果；
                        backdrop-filter: blur(4px);
                    }
                }
                // 这里有个效果使用jQuery实现的，就是hover时，其他元素透明度变化；
                // 因为css原声无法选择前方的兄弟元素，所以私用jQuery实现；
                /*产品1*/
                .ab3-server-con-1 {
                    background: url('../../../common/images/index/modu-1/ourServer-ch-1.jpg') no-repeat;
                    background-size: cover;
                }
                /*产品2*/
                .ab3-server-con-2 {
                    background: url('../../../common/images/index/modu-1/ourServer-ch-2.jpg') no-repeat;
                    background-size: cover;
                }
                /*产品3*/
                .ab3-server-con-3 {
                    background: url('../../../common/images/index/modu-1/ourServer-ch-3.jpg') no-repeat;
                    background-size: cover;
                }
            }
        }
    }
}
</style>
