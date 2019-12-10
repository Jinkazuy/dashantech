<template>
  <div
    :class="[
      'pro-HospitalInfoModu-mo3',
      'w100',
      'clearfix',
      mob ? 'pro-HospitalInfoModu-mo3-mob' : ''
    ]"
  >
    <div class="pro-HospitalInfoModu-mo3-bd">
      <ul>
        <li class="container">
          <div class="illus-box">
            <img
              src="../../../common/images/pro-HospitalInfo/interfactIMG/interfactIMG-1.png"
            />
          </div>
          <div class="text-box">
            <h4>1）在线诊疗</h4>
            <p>
              可在线挂号、在线咨询、预约挂号、智能导诊、在线诊疗和查看报告等，实现数据多跑路，百姓少跑腿。复诊患者使用终端设备访问互联网医院，上传病历资料，并与医生通过图文和视频等形式沟通，实现图文咨询、视频问诊。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>2）电子处方</h4>
            <p>
              患者在互联网医院经过详尽的网上问诊后，医生按照《处方管理办法》为患者开出电子处方，并由药师审核通过执行。
            </p>
          </div>
          <div class="illus-box">
            <img
              src="../../../common/images/pro-HospitalInfo/interfactIMG/interfactIMG-2.png"
            />
          </div>
        </li>
        <li class="container">
          <div class="illus-box">
            <img
              src="../../../common/images/pro-HospitalInfo/interfactIMG/interfactIMG-3.png"
            />
          </div>
          <div class="text-box">
            <h4>3）药品配送</h4>
            <p>
              利用第三方合作配送体系将药品配送到消费者手中，患者能够足不出户享受到完整的在线就医和购药服务。
            </p>
          </div>
        </li>
        <li class="container">
          <div class="text-box">
            <h4>4）预约转诊</h4>
            <p>
              针对病情紧急、疑难、复杂的患者，互联网医院提供预约转诊服务。
            </p>
          </div>
          <div class="illus-box">
            <img
              src="../../../common/images/pro-HospitalInfo/interfactIMG/interfactIMG-4.png"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProHospitalInfoModu3",
  props: ["mob"]
};
</script>

<style scoped lang="stylus">
.pro-HospitalInfoModu-mo3-hd {
    margin: 80px 0 32px;
    img {
        display: block;
        margin: 0 auto 20px;
        height: 84px;
    }
    p {
        font-size: 16px;
        color: rgba(23, 35, 61, 1);
        text-align: center;
        line-height: 22px;
        font-weight: 700;
    }
}
.pro-HospitalInfoModu-mo3-bd {
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
                    padding-left: 38px;
                    color: rgba(128, 134, 149, 1);
                }
            }
        }
    }

}

// =========== 移动端样式 =========
.pro-HospitalInfoModu-mo3-mob {
    .pro-HospitalInfoModu-mo3-hd {
        /*width: 50%;*/
        img {
            height: 42px;
        }
        p {
            font-size: 12px !important;
            padding: 0 !important;
        }
    }
    .pro-HospitalInfoModu-mo3-bd {
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
