<template>
  <header id="header" class="clearfix">
    <el-row style="margin:0 10px;" class="clearfix">
      <el-col :span="6" class="logo-container">
        <img src="@/assets/img/logo.png" class="logo" alt>
        <span class="title">XXX养老系统平台</span>
      </el-col>
      <div class="userinfo">
        <img src="@/assets/img/avatar.png" class="avatar" alt>
        <div class="welcome">
          <p class="name comename">您好！</p>
          <p class="name avatarname">{{userinfo.username}}</p>
        </div>
        <span class="username">
          <el-dropdown trigger="click" @command="setDialogInfo">
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">修改信息</el-dropdown-item>
              <el-dropdown-item command="pass">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <div class="logout" @click="logout">
          <img src="@/assets/img/logout.png" alt="">
           <!-- <i class="el-icon-d-arrow-right logout" ></i> -->
        退出
        </div> 
      </div>
      
    </el-row>
    <ul class="nav-wrap">
        <router-link to="/overview" class="nav">概览</router-link>
        <router-link  to="/diy" class="nav" :class="{'active': isActive('/diy')}">自定义</router-link>
        <router-link  to="/cart" class="nav" :class="{'active': isActive('/cart')}">购物车</router-link>
        <router-link  to="/dfManage" class="nav" :class="{'active': isActive('/dfManage')}">消毒管理</router-link>
        <router-link  to="/personnelManage" class="nav" :class="{'active': isActive('/personnelManage')}">人员管理</router-link>
        <router-link  to="/eWarningCorrection" class="nav" :class="{'active': isActive('/eWarningCorrection')}">预警纠偏</router-link>
        <router-link  to="/videoSurveillance" class="nav" :class="{'active': isActive('/videoSurveillance')}">视频监控</router-link>
      </ul>
  </header>
</template>

<script>
export default {
  // name: "header",
  data() {
    return {
      userinfo: { username: "叶才鑫" }
    };
  },
  created() {
    // this.userinfo =  mUtils.getStore('userinfo');
  },
  methods: {
    //判断是否是对应路由
      isActive (url) {
        let path = this.$route.path;
        if (path.indexOf(url) != -1) {
          return true
        } else {
          return false
        }
      },
    logout() {
        console.log("退出。。。")
      // this.$router.push("/");
    },
    /**
     * 弹出框-修改密码或者系统设置   
     * @param {string} cmditem 弹框类型
     */
    setDialogInfo(cmditem) {
        if (!cmditem) {
            console.log('test');
            this.$message('菜单选项缺少command属性');
            return;
        }
        switch (cmditem) {
            case 'info':
                console.log("详情。。。")
                this.$router.push('/infoModify');
                break;
            case 'pass':
                // this.showInfoList();
                console.log("修改密码。。。");
                this.$router.push('/slider');
                break;
            case 'logout':
                // this.logout();
                console.log("退出。。。")
                break;
        }
    },
  }
};
</script>

<style lang="scss" scoped>
a{text-decoration:none;color:inherit;}
.logo-container {
  line-height: 60px;
  min-width: 400px;
  .logo {
    height: 50px;
    width: 50px;
    margin-right: 5px;
    vertical-align: middle;
    display: inline-block;
  }
  .title {
    vertical-align: middle;
    font-size: 22px;
    font-family: cursive;
    letter-spacing: 3px;
    color: #fff;
  }
}
.userinfo {
  line-height: 60px;
  text-align: right;
  float: right;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
  .name {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
  }
  .comename {
    font-size: 14px;
    float: left;
  }
  .avatarname {
    color: #a9d86e;
    font-weight: bolder;
    float: right;
  }
}
.username {
  cursor: pointer;
  margin-right: 5px;
  .el-dropdown {
    color: #fff;
  }
}
.logout{float: right;color: #fff;margin-left:20px;
  img{
    display:inline-block;
    margin-top: 20px;
  }
}

#header {
  width: 100%;
  position: relative;
  height: 106px;
  min-width:600px;
  padding: 5px;
  background: url('../../assets/img/zhi001.png');
}
.nav-wrap {
  // position: absolute;
  top: 80px;
  margin: 0 auto;
      height: 50px;
      line-height: 50px;
      background: linear-gradient(10deg, #1ea3f2 0%, #2d81f2 100%);
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#1ea3f2,endColorstr=#2d81f2, gradientType=1);
      text-align: center;
      .nav {
        display: inline-block;
        width: 150px;
        text-align: center;
        font-size: 20px;
        margin: 0 18px;
        text-decoration: none;
        cursor: pointer;
        &.router-link-exact-active {
          position: relative;
          color: #20acff;
          background: url("../../assets/image/bg_xuanzhong.png") no-repeat center;
          background-size: 100%;
          transition: all .3s cubic-bezier(.645,.045,.355,1);
        }
        // &.active {
        //   @extend .router-link-exact-active;
        // }
        &.publicity{
          background: url("../../assets/image/icon-TV-n.png") no-repeat center;
          height: 24px;
          width: 22px;
          color: #000
        }
      }
    }

</style>
