/**
 * vuex各模块引入
 */

import Vue from 'vue'
import Vuex from 'vuex'
// import login from './modules/login'
// import overview from './modules/overview'
// import foodManage from './modules/foodManage'
// import humidMonitor from './modules/humidMonitor'
// import disinfectionManage from './modules/disinfectionManage'
// import personnelManage from './modules/personnelManage'
// import eWarningCorrection from './modules/eWarningCorrection'
// import videoSurveillance from './modules/videoSurveillance'
// import setting from './modules/setting'

import cart from './cart/index';
import info from './info/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // login,
    // overview,
    // foodManage,
    // humidMonitor,
    // disinfectionManage,
    // personnelManage,
    // eWarningCorrection,
    // videoSurveillance,
    // setting
    cart,
    info
  }
})
// module.exports = new Vuex.Store({
//   modules: {
//       cart
//   }
// });