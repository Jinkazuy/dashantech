import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 使用路由懒加载

// 一级路由：首页
const home = resolve => {
  import("./views/Home/Home.vue").then(module => {
    resolve(module);
  });
};

// 一级路由：关于我们
const about = resolve => {
  import("./views/About/About").then(module => {
    resolve(module);
  });
};

// 一级路由：产品中心
const product = resolve => {
  import("./views/Product/Product").then(module => {
    resolve(module);
  });
};
// 一级路由：产品详情-PACS
const productPacs = resolve => {
  import("./views/Product-PACS/productPacs.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：产品详情-随访系统
const productFollow = resolve => {
  import("./views/Product-follow/productFollow.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：产品详情-互联网医院信息管理平台
const ProductHospitalInfo = resolve => {
  import("./views/Product-hospitalInfo/ProductHospitalInfo.vue").then(
    module => {
      resolve(module);
    }
  );
};
// 一级路由：产品详情-移动医生查房
const productWardRound = resolve => {
  import("./views/Product-wardRound/productWardRound.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：产品详情-电子胶片
const productFilm = resolve => {
  import("./views/Product-Film/productFilm.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：产品详情-慢病管理系统
const productIllMG = resolve => {
  import("./views/Product-illnessMG/ProductIllnessMG.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：产品详情-智能康复管理系统
const productRecovery = resolve => {
  import("./views/Product-recovery/ProductRecovery.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：医联体
const productYLT = resolve => {
  import("./views/Product-yltInfo/ProductYltInfo.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：区域医疗影像及诊断云平台
const productRegionalCloud = resolve => {
  import("./views/Product-RegionalCloud/ProductRegionalCloud.vue").then(
    module => {
      resolve(module);
    }
  );
};
// 一级路由：重症护理信息管理平台
const productIntensiveCare = resolve => {
  import("./views/Product-intensiveCare/ProductIntensiveCare.vue").then(
    module => {
      resolve(module);
    }
  );
};
// 一级路由：智慧护理管理平台
const productWiseCare = resolve => {
  import("./views/Product-wiseCare/ProductWiseCare.vue").then(module => {
    resolve(module);
  });
};
// 一级路由：药物临床试验系统
const productClinicalDrug = resolve => {
  import("./views/Product-clinicalDrug/ProductClinicalDrug.vue").then(
    module => {
      resolve(module);
    }
  );
};
// 一级路由：血液透析信息管理平台
const productHemodialysis = resolve => {
  import("./views/Product-hemodialysis/productHemodialysis.vue").then(
    module => {
      resolve(module);
    }
  );
};
// 一级路由：区域慢病管理系统
const productRegionalSlow = resolve => {
  import("./views/Product-regionalSlow/ProductRegionalSlow.vue").then(
    module => {
      resolve(module);
    }
  );
};

// 一级路由：公司动态
const newsCenter = resolve => {
  import("./views/News-center/News-center").then(module => {
    resolve(module);
  });
};

// 一级路由：解决方案
const solutionCenter = resolve => {
  import("./views/Solution-center/Solution-center").then(module => {
    resolve(module);
  });
};

// 一级路由：加入我们
const join = resolve => {
  import("./views/Join/Join").then(module => {
    resolve(module);
  });
};

// 一级路由：联系大善
const contact = resolve => {
  import("./views/Contact/Contact").then(module => {
    resolve(module);
  });
};
// 一级路由：文章详情页
const newsDetail = resolve => {
  import("./views/News-detail/News-detail").then(module => {
    resolve(module);
  });
};
// 一级路由：404
const notFound = resolve => {
  import("./views/notFound404/notFound404").then(module => {
    resolve(module);
  });
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      // 首页
      path: "/",
      name: "home",
      component: home
    },
    {
      // 关于我们
      path: "/about",
      name: "about",
      component: about
    },
    {
      // 产品中心
      path: "/product",
      component: product
    },
    {
      // ProductHospitalInfo
      // 产品详情 - PACS
      path: "/productPacs",
      component: productPacs
    },
    {
      // 产品详情 - 随访系统
      path: "/productFollow",
      component: productFollow
    },
    {
      // 产品详情 - 互联网医院信息管理平台
      path: "/ProductHospitalInfo",
      component: ProductHospitalInfo
    },
    {
      // 产品详情 - 移动医生查房
      path: "/productWardRound",
      component: productWardRound
    },
    {
      // 产品详情 - 电子胶片
      path: "/productFilm",
      component: productFilm
    },
    {
      // 产品详情 - 慢病管理系统
      path: "/productIllMG",
      component: productIllMG
    },
    {
      // 产品详情 - 智能康复管理系统
      path: "/productRecovery",
      component: productRecovery
    },
    {
      // 产品详情 - 医联体
      path: "/productYLT",
      component: productYLT
    },
    {
      // 产品详情 - 区域医疗影像及诊断云平台
      path: "/productRegionalCloud",
      component: productRegionalCloud
    },
    {
      // 产品详情 - 重症护理信息管理平台
      path: "/productIntensiveCare",
      component: productIntensiveCare
    },
    {
      // 产品详情 - 智慧护理管理平台
      path: "/productWiseCare",
      component: productWiseCare
    },
    {
      // 产品详情 - 血液透析信息管理平台
      path: "/productHemodialysis",
      component: productHemodialysis
    },
    {
      // 产品详情 - 药物临床试验系统
      path: "/productClinicalDrug",
      component: productClinicalDrug
    },
    {
      // 产品详情 - 区域慢病管理系统
      path: "/productRegionalSlow",
      component: productRegionalSlow
    },
    {
      // 公司动态
      path: "/newsCenter",
      component: newsCenter
    },
    {
      // 解决方案
      path: "/solutionCenter",
      component: solutionCenter
    },
    {
      // 加入我们
      path: "/join",
      component: join
    },
    {
      // 联系大善
      path: "/contact",
      component: contact
    },
    {
      // 文章详情页，点击文章列表时进入，根据传入的id值获取数据
      path: "/newsDetail",
      component: newsDetail
    },
    {
      // 404
      path: "/notFound",
      component: notFound
    }
  ]
  // ,
  // linkActiveClass: 'router-link-active'
  // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
  // 每个路由的 router-link 在被点击激活的时候会有一个临时加的类，这个类原名叫做router-link-active，
  // 当然可以改成别的，比如my-router-link，不过该不该无所谓
});
