<template>
  <div
    :class="[
      'pro-regionalCloud-mo8',
      'w100',
      'clearfix',
      mob ? 'pro-regionalCloud-mo8-mob' : ''
    ]"
  >
    <div class="pro-regionalCloud-mo8-hd">
      <img
        src="../../../common/images/titles/prd-title-QYYYX-Projectconstructioncontent.png"
        ondragstart="return false;"
      />
      <!--<p>区域阅片中心利国利民，顺应医改方向，为政府解决实际问题</p>-->
    </div>
    <ul class="pro-regionalCloud-mo8-bd">
      <li class="container">
        <!--// 使用ondragstart防止拖拽-->
        <div class="mo8-bd-text-box">
          <h4>1）搭建1个平台</h4>
          <p>
            搭建“区域医疗影像与诊断云平台”，该平台是区域“医联体/医共体”体系内进行分级诊
            疗影像医技协作共赢的平台，内可含“区域远程影像(放射)诊断系统”、“区域预约影像检
            查系统”。该平台用于支撑区域中心医院设立的区域阅片中心，可联网基层医院对接上级医疗
            机构开展医学影像远程医疗合作业务。
          </p>
        </div>
        <div class="mo8-bd-img-box">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-1.png"
          />
        </div>
      </li>
      <li class="container">
        <div class="mo8-bd-img-box" v-if="!mob">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-2.png"
          />
        </div>
        <!--// 使用ondragstart防止拖拽-->
        <div class="mo8-bd-text-box">
          <h4>2）打造1个中心</h4>
          <p>
            依托“区域医疗影像与诊 断云平台”，将区域中心医院
            原来的影像科室资源整合、升 格建设成“区域阅片中心”后，
            实现“远程影像诊断中心”及“ 区域预约影像检查中心”2 个
            中心功能。区域中心医院组织 区域内外高端影像专家团队、
            充分利用医院配备高端影像 检查设备的优势，面向下级医
            院提供远程影像诊断、检查报 告审核质控、大型设备预约检
            查等服务，既可发挥对基层医 疗机构的帮扶作用，又可拉动
            区域中心医院高端影像检查、 住院治疗业务的持续增长。
          </p>
        </div>
        <div class="mo8-bd-img-box" v-if="mob">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-2.png"
          />
        </div>
      </li>
      <li class="container">
        <!--// 使用ondragstart防止拖拽-->
        <div class="mo8-bd-text-box">
          <h4>3）覆盖全区域N个基层医疗机构节点</h4>
          <p>
            依托云平台，基层医院乃至位于群众健康服务网点的广大卫生站都可联接成一张紧密的医
            学影像医技协同网络，同步开展转检和远程影像诊断协作。
          </p>
        </div>
        <div class="mo8-bd-img-box">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-3.png"
          />
        </div>
      </li>
      <li class="container">
        <div class="mo8-bd-img-box" v-if="!mob">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-4.png"
          />
        </div>
        <!--// 使用ondragstart防止拖拽-->
        <div class="mo8-bd-text-box">
          <h4>4）区域诊断报告系统</h4>
          <p>
            直接获取云端原始影像数据并进行报告书写，链接所有影像设备。下面是影像报告系统，
            可以移动端实现无损图像浏览、影像报告书写和云端上传等功能。该系统具备传统PACS的基
            本报告书写功能，还具备影像后处理功能。
          </p>
        </div>
        <div class="mo8-bd-img-box" v-if="mob">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-4.png"
          />
        </div>
      </li>
      <li class="container">
        <!--// 使用ondragstart防止拖拽-->
        <div class="mo8-bd-text-box">
          <h4>5）随行移动阅片系统</h4>
          <p>
            随行移动阅片系统可以根据需要作为扩充配置，包括12.3英寸便携
            Surface和12.3英寸移 动高清竖屏一台(分辨率达5MP)，全网通4G移动 WIFI。
            Surface用于报告书写与申请单浏览，高清移动竖屏用于影像图像浏览，保证影像图像不失
            真，病灶得到充分显示，让专家敢诊断，易于诊断。并且，此竖屏配有多种接口，可与常规笔
            记本、台式电脑进行连接。
          </p>
        </div>
        <div class="mo8-bd-img-box">
          <img
            ondragstart="return false;"
            src="../../../common/images/pro-regionalCloud/regionalCloud8-5.png"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "proRegionalCloudMO8",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regionalCloud-mo8 {
    position: relative;
    padding-bottom: 80px;
    background-color: rgba(23, 79, 196, 1);
    .pro-regionalCloud-mo8-hd {
        margin: 80px 0 44px;
        img {
            height: 84px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            margin-top: 80px;
        }
        p {
            font-size: 16px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }
    }
    .pro-regionalCloud-mo8-bd {
        padding: 0;
        li {
            display: flex;
            align-content: center;
            justify-content: space-between;
            background-color: #fff;
            padding: 68px 60px;
            border-radius: 8px;
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.05);
            margin-bottom: 20px;
            .mo8-bd-text-box {
                width: 40%;
                h4 {
                    margin: 0 0 16px;
                    font-size: 26px;
                    font-weight: 700;
                    color: rgba(20, 148, 138, 1);
                }
                p {
                    margin: 0;
                    font-size: 16px;
                    line-height: 32px;
                    color: rgba(33, 27, 50, 1);
                }
            }
            .mo8-bd-img-box {
                height: 100%;
                width: 40%;
                img {
                    width: 100%;
                }
            }
        }
        li:last-of-type{
            margin-bottom: 0;
        }
    }
}


// ========== 移动端样式 =========
.pro-regionalCloud-mo8-mob {
    padding-bottom: 20px;
    .pro-regionalCloud-mo8-hd {
        img{
            height: 42px;
        }
        p {
            font-size: 12px;
        }
    }
    .pro-regionalCloud-mo8-bd {
        padding: 0 20px;
        li {
          display: block;
          padding: 20px;
          .mo8-bd-text-box {
            width: 100%;
            margin-bottom: 20px;
            h4 {
              font-size: 16px;
            }
            p {
              font-size: 14px;
              line-height: 22px;
            }
          }
          .mo8-bd-img-box {
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
    }
}
</style>
