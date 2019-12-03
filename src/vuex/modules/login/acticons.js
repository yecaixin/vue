// import API from '@/api/api';
// import configMap from '@/utils/config';
// import common from '@/utils/common'
// import router from '@/router'
const actions = {
  /*登录*/
  fetchLogin ({state, commit}, body) {
    // return API.post(configMap.loginApi, body).then(res => {
    //   // 登录后存用户信息
    //   localStorage.setItem('userInfo', JSON.stringify(res.object))
    //   commit('SET_USERINFO', res.object)
    //   common.successMsg(res.message)
    //   return Promise.resolve(res)
    // }).catch(err => {
    //   common.errorMsg(err.message)
    //   return Promise.reject(err.message)
    // })
  },
  /*把userInfo设为全局*/
  fetchSetUserInfo ({state, commit}) {
    // let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // commit('SET_USERINFO', userInfo)
  },
  /*注销*/
  fetchLoginOut () {
    // return API.post(configMap.loginOut).then(res => {
    //   localStorage.setItem('token', ''); // 清除登录信息
    //   router.push('/login')
    // }).catch(err => {
    //   common.errorMsg(err.message)
    // })
  },
  /*标题信息*/
  fetchTitle ({commit}) {
      document.title = '餐饮食品安全智能监管平台'
      commit('SET_TITLE', 'vuex change...')
    // return API.post(configMap.title).then(res => {
    //   // 改变页面title
    //   document.title = '餐饮食品安全智能监管平台'
    //   commit('SET_TITLE', res.object)
    // }).catch(err => {
    //   common.errorMsg(err.message)
    // })
  }
}

export default actions