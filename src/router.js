import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      // 重定向到推荐页路由
      path: "/",
      redirect: "/home"
    },
    {
      // 关于我们
      path: "/home",
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
    }
  ]
  // ,
  // linkActiveClass: 'router-link-active'
  // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
  // 每个路由的 router-link 在被点击激活的时候会有一个临时加的类，这个类原名叫做router-link-active，
  // 当然可以改成别的，比如my-router-link，不过该不该无所谓
});
