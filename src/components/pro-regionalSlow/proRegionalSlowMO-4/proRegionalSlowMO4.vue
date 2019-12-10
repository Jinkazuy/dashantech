<template>
  <div
    :class="[
      'pro-regional-slow-mo-4',
      'w100',
      'clearfix',
      mob ? 'pro-regional-slow-mo-4-mob' : ''
    ]"
  >
    <div class="pro-regional-slow-mo-4-hd">
      <img src="../../../common/images/titles/prd-title-RegionalSlow-3.png" />
    </div>
    <div class="pro-regional-slow-mo-4-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-1.png" />
          </div>
          <div class="text-box">
            <h4>区域信息共享</h4>
            <p>公卫档案、诊疗记录、住院记录<br />体检记录、监测数据</p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>慢病闭环管理</h4>
            <p>医健融合、筛查建档、自动随访、<br />居家服务、成效分析</p>
          </div>
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-2.png" />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img src="../../../common/images/pro-pacs/mo8/illustration-3.png" />
          </div>
          <div class="text-box">
            <h4>医疗协同枢纽</h4>
            <p>双向转诊、远程会诊、在线诊疗、<br />药品续方、远程监测</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "proRegionalSlowMO4",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-regional-slow-mo-4-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
}
.pro-regional-slow-mo-4-bd {
    ul {
        padding: 0;
        margin: 0;
        li.container {
            padding: 80px 0;
            justify-content: space-between;
            align-items: center;
            .illus-box {
                width: 30%;
                img {
                    width: 100%;
                }
            }
            .text-box {
                width: 40%;
                h4 {
                    font-size: 24px;
                    color: #14948a;
                    margin-bottom: 20px;
                    font-weight: 700;
                }
                p {
                    font-size: 16px;
                    line-height: 26px;
                    color: rgba(128, 134, 149, 1);
                }
            }
        }
    }

}

// =========== 移动端样式 =========
.pro-regional-slow-mo-4-mob {
    .pro-regional-slow-mo-4-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
    }
    .pro-regional-slow-mo-4-bd {
        ul {
            li {
                padding: 40px 0 !important;
                .text-box {
                    h4 {
                        font-size : 16px !important;
                        line-height: 30px;
                    }
                    p {
                        font-size: 12px !important;
                        padding: 0 !important;
                    }
                }
            }
        }
    }
}
</style>
