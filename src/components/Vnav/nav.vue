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
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>vue 样例</span>
                </template>
                <el-submenu index="1-4">
                <template slot="title">vue</template>
                <el-menu-item index="1-1"><router-link tag="li" to="/">父传子</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link tag="li"  to="/a">子传父</router-link></el-menu-item>
                <el-menu-item index="1-3"><router-link tag="li"  to="/b">less</router-link></el-menu-item>
                <el-menu-item index="1-4"><router-link tag="li"  to="/c">elementUI</router-link></el-menu-item>
                <el-menu-item index="1-5"><router-link tag="li"  to="/d">vuex</router-link></el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>elementui</span>
                </template>
                <!-- <el-submenu index="2-4"> -->
                <!-- <template slot="title">vue</template> -->
                <el-menu-item index="2-1"><router-link tag="li"  to="/q">父传子</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link tag="li"  to="/w">子传父</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link tag="li"  to="/e">less</router-link></el-menu-item>
                <el-menu-item index="2-4"><router-link tag="li"  to="/r">elementUI</router-link></el-menu-item>
                <el-menu-item index="2-5"><router-link tag="li"  to="/t">vuex</router-link></el-menu-item>
                <!-- </el-submenu> -->
            </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据</span>
                </template>
                <el-menu-item index="3-1"><router-link tag="li"  to="/g">过滤器</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link tag="li"  to="/l">axios</router-link></el-menu-item>
                <el-menu-item index="3-3"><router-link tag="li"  to="/coms">自定义组件</router-link></el-menu-item>
                <el-menu-item index="3-4"><router-link tag="li"  to="/table">自定义表格组件</router-link></el-menu-item>
                <el-menu-item index="3-5"><router-link tag="li"  to="/t">vuex</router-link></el-menu-item>
                <el-menu-item index="3-6"><router-link tag="li"  to="/mock">mock</router-link></el-menu-item>
              </el-submenu>

            <!-- <el-menu-item index="3" disabled> 添加disable 可禁止
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item> -->

            <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>test</span>
                </template>
                <el-menu-item index="4-1"><router-link tag="li"  to="/test">test</router-link></el-menu-item>
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