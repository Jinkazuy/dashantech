import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引入bootstrap相关
// eslint-disable-next-line
import $ from "jquery";
import "bootstrap";
import "../src/common/css/bootstrap.min.css";

// 进度条插件 ==========================
import NProgress from "nprogress";
import "../src/common/css/nprogress.css";
// 隐藏右侧的loading圈圈
NProgress.configure({ showSpinner: false });
// 在切换路由的时候显示进度条插件
// router加载前
router.beforeEach((to, from, next) => {
  NProgress.start();
  // 设置进度条曲线和动画时间
  NProgress.configure({ ease: "ease-in-out", speed: 100 });
  next();
});
// router加载之后，隐藏进度条
// router加载之后，判断是否存在，如果router不存在则跳转到404页面
router.afterEach(() => {
  NProgress.done();
});
// 进度条插件 ==========================

// 图片懒加载插件 =========================
import VueLazyload from "vue-lazyload";
// 挂载懒加载插件
Vue.use(VueLazyload, {
  // 这里加载前默认的兜底加载图
  loading: "detail/default.png"
});
// 图片懒加载插件 =========================

// 轮播图插件 ==========================
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);
// require styles
import "swiper/dist/css/swiper.css";
// 轮播图插件 ==========================

// 粒子动画背景插件 ================================
import VueParticles from "vue-particles";
Vue.use(VueParticles);
// 粒子动画背景插件 ================================

// 视频播放器插件 ================================
import Video from "video.js";
import "video.js/dist/video-js.css";
Vue.prototype.$video = Video;
// 视频播放器插件 ================================

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
