<template>
  <div>
    <zs-button type="primary" @click="sure">确定</zs-button>
    <zs-button type="danger" @click="showMaterialDialog=true;dialogTitle='新建素材';submitTitle='上传素材'">新建素材</zs-button>
  </div>
</template>

<script>
export default {
   data() {
    return {
      showMaterialDialog:false,
    };
  },
  //  components: {
  //   ZsButton,
  // }
  methods:{
    sure(){
      console.log("点击确认~~~");
      this.$fetch('http://route.showapi.com/126-2?showapi_appid=65467&showapi_sign=9b914a5631af49d09a46b90baa816901')
      .then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less">
    // @import "./style.less";
</style>