// 混入文件，重复内容都将放入这个文件中，在其他文件需要时引入即可；
export const consoleMixin = {
  created() {
    console.log("mixin");
  }
};

export const productInfo = {
  data() {
    return {
      // 每个tab的代表数字
      dda: 0,
      // 产品信息详情模块数据
      proInfoData: [
        // PACS影像云
        {
          showNumber: 0,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/pacs.png",
          imgLtSrc: "images/lt-ch-pacs.png",
          h4: "PACS影像云",
          p:
            "基于现有的区域PACS、区域超声、区域心电，进一步实现区域影像数据的在各医疗机构内的共享和应用，推进胶片的按需分发，减少患者就医成本；建立影像云平台，实现影像数据的云存储和互联网调阅，方便患者检查结果的调阅，推进最多跑一次政策的执行。",
          routerTo: "/productPacs"
        },
        // 随访系统
        {
          showNumber: 1,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/sfxt.png",
          imgLtSrc: "images/lt-ch-sfxt.png",
          h4: "随访系统",
          p:
            "大善随访系统解决方案随访系统将互联网、物联网技术与患者院内外医疗健康管理结合，以智能随访、智能宣教、智能提醒、健康监测、医护患沟通为患者管理主要手段，通过平台化的设计理念，为不同类型医疗机构，打造统一随访平台。",
          routerTo: "/productFollow"
        },
        // 互联网医院信息平台
        {
          showNumber: 2,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/xxpt.png",
          imgLtSrc: "images/lt-ch-xxpt.png",
          h4: "互联网医院信息平台",
          p:
            "互联网医院信息平台是一套集健康大数据收集、健康管理与疾病预防、网上诊疗为一体的远程医疗服务与协同信息平台，提供基于互联网的医疗卫生服务，利用互联网延伸医嘱、电子处方等网络医疗健康服务应用，从而提高医疗服务效率，保证医疗质量和医疗安全。",
          routerTo: "/ProductHospitalInfo"
        },
        // 移动医生查房系统
        {
          showNumber: 3,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/ydys.png",
          imgLtSrc: "images/lt-ch-ydys.png",
          h4: "移动医生查房系统",
          p:
            "大善移动医生查房系统通过与众多医院已有的相关信息系统进行对接，实现了在移动终端设备上查看病人的基本信息、医嘱信息、电子病历、检查信息、检验信息、护理信息，同时还支持医生在终端设备上通过手写、语音以及图片的方式进行备注，很好地将医生的信息系统延伸到病人床边。",
          routerTo: "/productWardRound"
        },
        // 电子胶片
        {
          showNumber: 4,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/dzjp.png",
          imgLtSrc: "images/lt-ch-dzjp.png",
          h4: "电子胶片",
          p:
            "电子胶片，是基于移动互联网、、云存储、云计算技术，相对于传统感光胶片而言的一种新型影像浏览应用服务。医院可通过该技术把患者的数字影像发布到云端并长期存储，为医疗机构、医生及其患者提供便捷的医学影响信息服务。",
          routerTo: "/productFilm"
        },
        // 医院慢病管理系统
        {
          showNumber: 5,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/mbgl.png",
          imgLtSrc: "images/lt-ch-mbgl.png",
          h4: "医院慢病管理系统",
          p:
            "大善医院慢病管理系统是致力于辅助医护人员、健康管理师更好的管理患者，为医护人员提供信息化、自动化的手段来为患者提供更优质的服务，让患者居家也能享受到医疗服务。通过专业精准的慢病评估，医护患全程与决策，针对不同患者提供健康营养套餐（食物、运动、休息，衣，食，住，行）。",
          routerTo: "/productIllMG"
        },
        // 智能康复管理系统
        {
          showNumber: 6,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/jkgl.png",
          imgLtSrc: "images/lt-ch-jkgl.png",
          h4: "智能康复管理系统",
          p:
            "康复治疗前应先对病、伤、残者进行康复评定，然后制定一个理想的康复方案，由以康复医师为中心，和临床医学相关人员共同组成的康复治疗组去实施，并在实施过程中不断总结、评定调查，直至治疗结束。可实现康复科室的数字化、信息化和过程的管控，有效避免信息孤岛的出现，实现全员的数据共享。",
          routerTo: "/productRecovery"
        },
        // {
        //   showNumber: 7,
        //   // 编译后，取根目录下的public的地址；
        //   imgBigSrc: "images/ylt.png",
        //   imgLtSrc: "images/lt-ch-ylt.png",
        //   h4: "城市医疗联合体信息平台",
        //   p: "",
        //   routerTo: "/productYLT"
        // },
        // {
        //   showNumber: 8,
        //   // 编译后，取根目录下的public的地址；
        //   imgBigSrc: "images/qyyyx.png",
        //   imgLtSrc: "images/lt-ch-qyyyx.png",
        //   h4: "区域医疗影像及诊断云平台",
        //   p: "",
        //   routerTo: "/productRegionalCloud"
        // },
        // {
        //   showNumber: 9,
        //   // 编译后，取根目录下的public的地址；Intensive-care   IntensiveCare
        //   imgBigSrc: "images/zzhl.png",
        //   imgLtSrc: "images/lt-ch-zzhl.png",
        //   h4: "重症护理信息管理平台",
        //   p: "",
        //   routerTo: "/productIntensiveCare"
        // },
        // {
        //   showNumber: 10,
        //   // 编译后，取根目录下的public的地址； Wise-care  WiseCare
        //   imgBigSrc: "images/zhhl.png",
        //   imgLtSrc: "images/lt-ch-zhhl.png",
        //   h4: "智慧护理管理系统",
        //   p: "",
        //   routerTo: "/productWiseCare"
        // },
        // {
        //   showNumber: 11,
        //   // 编译后，取根目录下的public的地址；Clinical-drug  ClinicalDrug
        //   imgBigSrc: "images/ywlcsy.png",
        //   imgLtSrc: "images/lt-ch-ywlcsy.png",
        //   h4: "药物临床试验系统",
        //   p: "",
        //   routerTo: "/productClinicalDrug"
        // },
        // {
        //   showNumber: 12,
        //   // 编译后，取根目录下的public的地址； hemodialysis
        //   imgBigSrc: "images/xytx.png",
        //   imgLtSrc: "images/lt-ch-xytx.png",
        //   h4: "血液透析信息管理平台",
        //   p: "",
        //   routerTo: "/productHemodialysis"
        // },
        {
          showNumber: 13,
          // 编译后，取根目录下的public的地址；regional-slow  regionalSlow
          imgBigSrc: "images/qymb.png",
          imgLtSrc: "images/lt-ch-qymb.png",
          h4: "区域慢病管理系统",
          p:
            "大善区域慢病管理系统，是按照国家公共卫生服务规范，为区域患者提供统一标准化服务，结合互联网、物联网等技术，实现区域信息的互联互通，减少医生团队重复的管理工作量，并实现医疗信息的共享一级数据统一上报",
          routerTo: "/productRegionalSlow"
        }
      ]
    };
  }
};
