# dashantech

开发记录：

所用架构VUE-2 （vue-cli3）

UI框架-Bootstarp-3.3.7；
https://segmentfault.com/a/1190000014509984
1、安装
按照文章中步骤操作即可；
2、在main.js中另外添加↓
import "../src/common/css/bootstrap.min.css";

所用插件：

1、在JS中操作css：
> create-keyframe-animation
https://www.npmjs.com/package/create-keyframe-animation

2、进度条：
> nprogress.js
https://github.com/rstacruz/nprogress
https://www.jianshu.com/p/346c05d4d9d8
https://blog.csdn.net/tswc_byy/article/details/86713618

3、banner轮播插件
> swiper
https://www.swiper.com.cn/
https://github.com/surmon-china/vue-awesome-swiper
demo: https://surmon-china.github.io/vue-awesome-swiper/

4、粒子连线插件
> particles.js
npm install vue-particles --save-dev
https://www.cnblogs.com/ldlx-mars/p/8012142.html
https://github.com/VincentGarreau/particles.js
https://codepen.io/VincentGarreau/pen/pnlso?q=particles.js&order=popularity&depth=code&show_forks=false

5、图片懒加载
cnpm install vue-lazyload --save-dev
因为文章详情格式复杂，所以JK用的都是图片一张一张截图，所以使用懒加载插件；

6、视频播放插件 Video.js
https://videojs.com/
安装：npm install video.js
在main.js中引入
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video


============================
文件结构（部分）
dashantech
  src
    components
      nav-bar - 导航栏组件；

