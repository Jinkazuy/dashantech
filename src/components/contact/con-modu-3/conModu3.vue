<template>
  <div class="con-modu-3 w100">
    <div id="plant"></div>
    <div :id="id" class="m-map w100 h100"></div>
  </div>
</template>

<script>
export default {
  // 所用地图API由高德地图提供
  // 实例地址：https://lbs.amap.com/api/javascript-api/example/poi-search/keywords-search
  name: "comMondu3",
  data() {
    return {
      //  这里需要先定义一个静态的id值，不然下方的this.id会出问题；
      id: `map`,
      // 高德地图的开发者的key
      key: "0dbc0dfd7c775f2a927174493eab8220",
      // 经纬度
      point: [116.299087, 39.828949]
    };
  },
  // 在mounted钩子时发送请求，拿到地图
  mounted() {
    // 只有在mounted钩子下才能拿到的window对象
    // 下边的这些api都是高地地图提供的

    const self = this;

    // 只有在mounted钩子下才能拿到的window对象
    // 下边的这些api都是高地地图提供的
    window.onmaploaded = () => {
      const map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 20,
        center: self.point
      });
      self.map = map;

      // 放大缩小控件，高德地图提供
      window.AMap.plugin("AMap.ToolBar", () => {
        const toolbar = new window.AMap.ToolBar();
        map.addControl(toolbar);
        // marker就是小红点icon，也是高德地图提供
        const marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: self.point
        });
        self.marker = marker;
        marker.setMap(map);
      });
    };
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmaploaded`;
    // 动态添加script标签
    const jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style scoped lang="stylus">
.con-modu-3 {
    height: 480px;
    background-color: #fafafa;
}
</style>
