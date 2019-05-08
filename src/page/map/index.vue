<template>
  <div class="amap-page-container">
    <!-- 
    	zoom：放缩程度 , 
    	plugin：data中有定义，是一些插件，如工具栏等等，
    	center：定位经纬度位置
    	el-amap：高德地图组件
    -->
    <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >  
    </el-amap>
    <div class="toolbar">
        <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
    </div>
</div>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      zoom: 17,
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [   //一些工具插件
        {
          pName: 'Geolocation',   //定位
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];         //设置坐标
                  self.loaded = true;                         //load
                  self.$nextTick();                           //页面渲染好后
                }
              })
            }
          }
        },
        {
          pName: 'ToolBar',  //工具栏
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'OverView',  //鹰眼
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'MapType',  //地图类型
          defaultType: 0,
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        }
      ]
    }
  },
  methods: {
    //把经纬度传到父组件
    sendlnglat (){ 
      this.$emit('register', this.lng, this.lat)
    }
  }
}
</script>

<style>
.amap-page-container {
  position: relative;
  width: 100%;
  margin-top: 0.03rem;
  height: 500px;
  font-size: 0.12rem;
  color: #000;
}
.amap-logo{
    display: none;
}
.amap-copyright {
    opacity:0;
}
</style>
