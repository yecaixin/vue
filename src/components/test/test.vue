<template>
  <div id="subgrounp">
  {{userInfo}}

  <button @click = get()> 获取</button>
  <button @click = get1()> 获取1</button>

  </div>
</template>

<script>
import store from '@/vuex/store.js'
  import {mapActions, mapGetters} from 'vuex';
export default {
  data () {
      return {
        userName: '默认用户名', // 用户名
      }
    },
  computed: {
     ...mapGetters({
        title: 'getTitle',
        userInfo: 'getUserInfo'
      })
    },
  created(){
      // 如果state里面没有用户信息则重新存
      if(store.state.info.userInfo == '') {
        console.log("@@@@")
        store.dispatch('fetchSetUserInfo')
      }
    },
  methods: {
    get:function(){
      store.dispatch('fetchSetUserInfo')
    },
    get1:function(){
      store.dispatch('fetchSetUserInfo1')
    }
  }
};
</script>

<style lang="less" scoped>

</style>