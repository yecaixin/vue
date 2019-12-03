// import API from '@/api/api';
// import configMap from '@/utils/config';
// import common from '@/utils/common'
import router from '@/router'
const actions = {
//   /*把userInfo设为全局*/
  fetchSetUserInfo ({state, commit}) {
    // let userInfo = JSON.parse(localStorage.getItem('userInfo'))  //从localstorage 取
    let userInfo = "new";
    console.log(userInfo);
    commit('SET_USERINFO', userInfo)
  },
  fetchSetUserInfo1 ({state, commit}) {
    // let userInfo = JSON.parse(localStorage.getItem('userInfo'))  //从localstorage 取
    let userInfo = "yecaixin";
    console.log(userInfo);
    commit('SET_USERINFO', userInfo)
  },
  /*标题信息*/
  fetchTitle ({commit}) {
    // return API.post(configMap.title).then(res => {
    //   // 改变页面title
      document.title = '餐饮食品安全智能监管平台'
    //   commit('SET_TITLE', res.object)
    // }).catch(err => {
    //   common.errorMsg(err.message)
    // })
  }
}

export default actions