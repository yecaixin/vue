<template>
  <div id="nav">
    <el-row class="side">
        <el-col :span="24">
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            

            <!-- <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>elementui</span>
                </template>
                <el-menu-item index="2-1"><router-link tag="li"  to="/q"></router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link tag="li"  to="/w"></router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link tag="li"  to="/e"></router-link></el-menu-item>
                <el-menu-item index="2-4"><router-link tag="li"  to="/r"></router-link></el-menu-item>
                <el-menu-item index="2-5"><router-link tag="li"  to="/t"></router-link></el-menu-item>
            </el-submenu> -->

              <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据</span>
                </template>
                <el-menu-item index="3-1"><router-link tag="li"  to="/subgroup">组件</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link tag="li"  to="/echarts">echarts</router-link></el-menu-item>
                <el-menu-item index="3-3"><router-link tag="li"  to="/table">表格</router-link></el-menu-item>
                <!-- <el-menu-item index="3-5"><router-link tag="li"  to="/t"></router-link>测试</el-menu-item>
                <el-menu-item index="3-6"><router-link tag="li"  to="/mock"></router-link>测试</el-menu-item> -->
              </el-submenu>

            <!-- <el-menu-item index="3" disabled> 添加disable 可禁止
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item> -->

            <!-- <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>test</span>
                </template>
                <el-menu-item index="4-1"><router-link tag="li"  to="/test">test</router-link></el-menu-item>
              </el-submenu> -->
              <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>测试菜单</span>
                </template>
                <el-submenu index="1-4">
                <template slot="title">二级菜单</template>
                <el-menu-item index="1-1"><router-link tag="li"  to="/1">菜单一</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link tag="li"  to="/2">菜单二</router-link></el-menu-item>
                <el-menu-item index="1-3"><router-link tag="li"  to="/3">菜单三</router-link></el-menu-item>
                <el-menu-item index="1-4"><router-link tag="li"  to="/4">菜单四</router-link></el-menu-item>
                <el-menu-item index="1-5"><router-link tag="li"  to="/5">菜单五</router-link></el-menu-item>
                </el-submenu>
            </el-submenu>

            </el-menu>
        </el-col>
        </el-row>
  </div>
</template>
<script>

export default {
  // name: 'hello',
  data: function () {
    return {
      msg: "Welcome to your vue.js app"
    }
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>

<style>
#nav{
    width: 200px;
    height: 100%;
    background:rgb(84, 92, 100)
}
.side{
  width:200px;height:800px;background:rgb(84, 92, 100);
}
.sideItem{
  width:200px;height:100px;
}
li{font-size: white;}
</style>