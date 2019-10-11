<template>
  <div :class="['con-modu-1', 'w100', mob ? 'con-modu-1-mob' : '']">
    <div class="bg-mask w100 h100"></div>
    <div class="container w100 h100">
      <div class="text-gr w100">
        <h4>这里能够找到我们</h4>
        <p>
          大善科技始终秉承着“中国科技、服务华人”的经营理念，专注大健康医疗领域深度挖掘。
        </p>
      </div>
      <div class="cont-gr w100">
        <div class="input-gr">
          <!--mvvm,不用form表单-->
          <input
            type="text"
            :class="['cur-name', { 'bdr-err': tipsBorder === 'nameErr' }]"
            placeholder="*您怎么称呼"
            v-model="curName"
          />
          <input
            type="text"
            :class="['cur-ph', { 'bdr-err': tipsBorder === 'phoneErr' }]"
            placeholder="*您的电话"
            v-model="curPhone"
          />
          <input
            type="text"
            :class="['cur-em', { 'bdr-err': tipsBorder === 'emailErr' }]"
            placeholder="*您的邮箱"
            v-model="curEmail"
          />
          <select class="cur-ask-sel" v-model="myVal" title="">
            <option
              v-for="(item, index) in options"
              :value="item.value"
              :key="index"
            >
              {{ item.name }}
            </option>
          </select>
          <textarea
            v-model="textArea"
            placeholder="*您想要对我们说的"
            :class="{ 'bdr-err': tipsBorder === 'textErr' }"
          ></textarea>
          <div class="tips w100">
            <p :class="{ bingo: allB === true }">{{ tipsText }}</p>
          </div>
          <div class="sub-btn" @click="subBtn">提交</div>
        </div>
        <div class="contact-info">
          <ul class="w100 h100">
            <li class="w100">
              <h4>地址</h4>
              <p>北京市丰台区南四环西路128号 诺德中心4号楼8层&nbsp;&nbsp;</p>
            </li>
            <li>
              <h4>电话</h4>
              <p>&nbsp;010-57220697&nbsp;</p>
            </li>
            <li>
              <h4>邮箱</h4>
              <p>&nbsp;supportyou@dashantech.com.cn&nbsp;</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conModu1",
  data() {
    return {
      // 错误提示信息文案
      tipsText: "",
      // 错误边框类名
      tipsBorder: "",
      curName: "",
      curPhone: "",
      curEmail: "",
      textArea: "",
      myVal: 0, //默认选中第一项
      options: [
        {
          name: "服务咨询",
          value: 0
        },
        {
          name: "技术支持",
          value: 1
        },
        {
          name: "商务洽谈",
          value: 2
        },
        {
          name: "其他问题",
          value: 3
        }
      ],
      allB: false,
      // 控制显示移动端还是pc端css样式的变量
      mob: false
    };
  },
  created() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
      console.log("加载移动端样式");
      this.mob = true;
    } else {
      this.mob = false;
    }
  },
  methods: {
    subBtn() {
      // 判断
      if (this.curName.trim() === "") {
        this.tipsText = "请输入您的称呼";
        this.tipsBorder = "nameErr";
        return;
      }
      if (this.curPhone.trim() === "") {
        this.tipsText = "请输入您的电话";
        this.tipsBorder = "phoneErr";
        return;
      }
      if (this.curEmail.trim() === "") {
        this.tipsText = "请输入您的邮箱";
        this.tipsBorder = "emailErr";
        return;
      }
      if (this.textArea.trim() === "") {
        this.tipsText = "请输入您要提交的内容";
        this.tipsBorder = "textErr";
        return;
      }
      // 将拿到的数据变成对象，用于以后发送到后台
      var cusPostData = {
        name: this.curName,
        phone: this.curPhone,
        email: this.curEmail,
        askType: this.options[this.myVal].name,
        textInfo: this.textArea
      };
      console.log(cusPostData);
      // 向后台发送数据，后台通过qq邮箱API发送内容；
      // 数据都填写了, 提示成功
      this.tipsText = "提交成功，感谢您对大善科技的支持";
      this.allB = true;
      setTimeout(() => {
        this.tipsText = "";
        this.allB = false;
        // 清空输入框内容
        this.curName = "";
        this.curPhone = "";
        this.curEmail = "";
        this.myVal = 0;
        this.textArea = "";
      }, 3000);
      this.tipsBorder = "";
      // 清空提示信息；
    }
  }
};
</script>

<style scoped lang="stylus">
.con-modu-1 {
  position: relative;
  height: 750px;
  background-color: pink;
  background: url("../../../common/images/contact/hand.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  .bg-mask {
    position: absolute;
    left: 0;
    top: 0;
    background:rgba(38,41,51,1);
    opacity:0.8;
  }
  .container {
    padding: 0;
    .text-gr {
      margin-top: 80px;
      color: #fff;
      text-align: center;
      h4 {
        margin: 0 0 36px 0;
        font-size: 40px;
      }
      p {
        margin: 0;
        font-size: 24px;
      }
    }
    .cont-gr {
      position: absolute;
      top: 250px;
      left: 50%;
      transform: translateX(-50%);
      height: 414px;
      padding: 0 56px;
      .input-gr {
        width: 62%
        height: 414px;
        background-color: #fff;
        margin-right: 1;
        float: left;
        border-radius: 4px;
        padding: 40px;
        box-sizing: border-box;
        input {
          padding: 14px 20px;
          box-sizing: border-box;
          border-radius: 4px;
          background-color: rgba(243, 246, 255, 1);
          width: 48%;
          margin: 0 2% 2% 0;
          color: rgba(23, 35, 61, 1);
          font-size: 14px;
          border: 1px solid rgba(243, 246, 255, 1);
          transition: all .4s;
        }
        .bdr-err {
          border: 1px solid red;
        }
        .cur-ask-sel {
          padding: 14px 20px;
          box-sizing: border-box;
          border-radius: 4px;
          border: none;
          background-color: rgba(243, 246, 255, 1);
          width: 48%;
          margin: 0 1.5% 1.5% 0;
          color: rgba(23, 35, 61, 1);
          font-size: 14px;
          option {
            padding: 10px 0;
          }
        }
        textarea {
          width: 98%;
          height: 40%;
          color: rgba(23, 35, 61, 1);
          padding: 14px 20px;
          box-sizing: border-box;
          border-radius: 4px;
          border: none;
          font-size: 20px;
          resize: none;
          background-color: rgba(243, 246, 255, 1);
        }
        .tips {
          height: 20px;
          text-align: center;
          font-size: 16px;
          line-height: 1;
          p {
            margin: 12px 0 0 0;
            color: red;
          }
          .bingo {
            color: #14948a;
          }
        }
        .sub-btn {
          cursor: pointer;
          width: 94px;
          margin: 16px auto 0;
          height: 34px;
          border-radius: 30px;
          background-color: #fff
          font-size: 14px;
          line-height: 32px;
          color: #fff;
          text-decoration: none;
          background:linear-gradient(225deg,rgba(43,203,196,1) 0%,rgba(19,155,145,1) 100%);
          border:1px solid #fff;
          transition: all .4s;
          text-align: center;
          text-shadow: 0 4px 16px rgba(0,0,0,.2);
        }
        .sub-btn:hover {
          border:1px solid rgba(127,214,208,1);
          text-shadow: 0 4px 16px rgba(24,237,222,1);
          box-shadow:0 4px 16px 0 rgba(24,237,222,1);
        }

      }
      .contact-info {
        width: 32%
        height: 414px;
        background-color: #fff;
        float: right;
        border-radius: 4px;
        ul {
          border-radius: 4px;
          padding: 52px;
          li {
            height: 26%;
            margin-bottom: 10%;
            padding-left: 50px;
            color: rgba(23, 35, 61, 1);
            h4 {
              font-size: 20px;
              font-weight: 900;
              color: #14948a;
            }
            p {
              font-size: 14px;
              user-select: text;
            }
            P::selection
            {
              background:#14948a;
              color:#fff;
            }
          }
          li:first-of-type {
            background: url("../../../common/images/contact/add.png") no-repeat;
          }
          li:nth-of-type(2) {
            background: url("../../../common/images/contact/phone.png") no-repeat;
          }
          li:last-of-type {
            margin: 0;
            background: url("../../../common/images/contact/em.png") no-repeat;
          }
        }
      }
    }
  }
}
// ============== 移动端样式 ==============
.con-modu-1-mob {
  height: auto;
  padding: 0 0 20px;
  .container {
    display: block;
    .text-gr {
      margin-bottom: 40px;
      h4 {
        font-size: 20px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        padding: 0 40px;
      }
    }
    .cont-gr {
      position: relative;
      top: 0;
      height: auto;
      padding: 0 20px;
      .input-gr {
        width: 100%;
        float: none;
        margin-bottom: 20px;
        height: auto;
        padding: 20px;
        input {
          box-shadow: none;
        }
        textarea {
          font-size: 14px;
        }
      }
      .contact-info {
        float: none;
        width: 100%;
        ul {
          padding: 20px !important;
        }
      }
    }
  }
}
</style>
