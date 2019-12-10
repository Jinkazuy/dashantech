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
        // 大善pacs影像云平台
        {
          showNumber: 0,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/pacs.png",
          imgLtSrc: "images/lt-ch-pacs.png",
          h4: "大善PACS影像云平台",
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
          h4: "大善随访系统",
          p:
            "医学随访是指医院或者医疗保健机构对曾在医院就诊的病人以通讯或者其他的方式进行定期了解患者病情变化和指导患者康复的一种观察方法。医院随访是医院以门诊、住院患者为主要服务对象，是实现院后持续服务和评价反馈的主要手段，包括关怀性随访和管理性随访，主要目的是提高患者满意度，增强患者忠诚度，提升医院管理水平。",
          routerTo: "/productFollow"
        },
        // 互联网医院云平台
        {
          showNumber: 2,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/xxpt.png",
          imgLtSrc: "images/lt-ch-xxpt.png",
          h4: "大善互联网医院云平台",
          p:
            "互联网医院云平台是一套集健康大数据收集、健康管理与疾病预防、网上诊疗为一体的远程医疗服务与协同信息平台，提供基于互联网的医疗卫生服务，利用互联网延伸医嘱、电子处方等网络医疗健康服务应用，从而提高医疗服务效率，保证医疗质量和医疗安全。",
          routerTo: "/ProductHospitalInfo"
        },
        // 移动医生查房系统
        {
          showNumber: 3,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/ydys.png",
          imgLtSrc: "images/lt-ch-ydys.png",
          h4: "大善移动医生查房系统",
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
          h4: "大善电子胶片平台",
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
          h4: "大善医院慢病管理系统",
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
          h4: "大善智能康复管理系统",
          p:
            "康复治疗前应先对病、伤、残者进行康复评定，然后制定一个理想的康复方案，由以康复医师为中心，和临床医学相关人员共同组成的康复治疗组去实施，并在实施过程中不断总结、评定调查，直至治疗结束。可实现康复科室的数字化、信息化和过程的管控，有效避免信息孤岛的出现，实现全员的数据共享。",
          routerTo: "/productRecovery"
        },
        {
          showNumber: 7,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/ylt.png",
          imgLtSrc: "images/lt-ch-ylt.png",
          h4: "大善医联体云平台",
          p:
            "2019年5月，为贯彻落实《国务院办公厅关于推进医疗联合体建设和发展的指导意见》等有关要求，推进分级诊疗制度建设和医疗联合体(以下简称医联体)建设，构建优质高效的医疗卫生服务体系，逐步实现城市医联体网格化布局管理，国家卫生健康委、国家中医药局决定开展城市医联体建设试点工作。",
          routerTo: "/productYLT",
          videoSrc: "video/ylt.mp4"
        },
        {
          showNumber: 8,
          // 编译后，取根目录下的public的地址；
          imgBigSrc: "images/qyyyx.png",
          imgLtSrc: "images/lt-ch-qyyyx.png",
          h4: "区域医疗影像及诊断云平台",
          p:
            "区域医疗影像与诊断云平台是指为一定区域内居民提供代表该区域先进水平的医疗服务，承担一定的人才培养、医学科研、教学等任务的医院，区域阅片中心同时承担服务区域突发公共卫生事件的医疗救治和技术支持。其宗旨是:以健康为目标，以信息网络为基础;建立多层级医疗卫生机构的服务联盟;以多学科协同抓手，整合预防、诊治和健康工 作。",
          routerTo: "/productRegionalCloud",
          videoSrc: "video/pacs.mp4"
        },
        {
          showNumber: 9,
          // 编译后，取根目录下的public的地址；Intensive-care   IntensiveCare
          imgBigSrc: "images/zzhl.png",
          imgLtSrc: "images/lt-ch-zzhl.png",
          h4: "大善重症护理系统",
          p: "支持多品牌监护设备实时集中监控",
          routerTo: "/productIntensiveCare"
        },
        {
          showNumber: 10,
          // 编译后，取根目录下的public的地址； Wise-care  WiseCare
          imgBigSrc: "images/zhhl.png",
          imgLtSrc: "images/lt-ch-zhhl.png",
          h4: "大善智慧护理系统",
          p:
            "让新技术、新突破帮助医护人员更好的实现对人的照护和关怀，这是我们的目标和初心",
          routerTo: "/productWiseCare"
        },
        {
          showNumber: 11,
          // 编译后，取根目录下的public的地址；Clinical-drug  ClinicalDrug
          imgBigSrc: "images/ywlcsy.png",
          imgLtSrc: "images/lt-ch-ywlcsy.png",
          h4: "大善药物临床试验系统  ",
          p:
            "保证系统独立性的同时确保系统的可扩展性，满足I、II、III、IV期临床试验的需求",
          routerTo: "/productClinicalDrug"
        },
        {
          showNumber: 12,
          // 编译后，取根目录下的public的地址； hemodialysis
          imgBigSrc: "images/xytx.png",
          imgLtSrc: "images/lt-ch-xytx.png",
          h4: "大善血液透析管理平台",
          p:
            "采用信息化手段来促进血液透析中心的管理、运行效率，提高透析安全性及透析质量，已成为目前血液透析中心的重要发展方向",
          routerTo: "/productHemodialysis"
        },
        {
          showNumber: 13,
          // 编译后，取根目录下的public的地址；regional-slow  regionalSlow
          imgBigSrc: "images/qymb.png",
          imgLtSrc: "images/lt-ch-qymb.png",
          h4: "大善区域慢病管理系统",
          p:
            "大善区域慢病管理系统，是按照国家公共卫生服务规范，为区域患者提供统一标准化服务，结合互联网、物联网等技术，实现区域信息的互联互通，减少医生团队重复的管理工作量，并实现医疗信息的共享一级数据统一上报",
          routerTo: "/productRegionalSlow"
        }
      ]
    };
  }
};
