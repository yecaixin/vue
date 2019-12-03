import {
    SET_TITLE,
    // SET_USERINFO
  } from './mutation-type'
  
  const mutations = {
    [SET_TITLE] (state, data) {
      state.title = data
    },
    // [SET_USERINFO] (state, data) {
    //   state.userInfo = data
    // }
  }
  
  export default mutations
  