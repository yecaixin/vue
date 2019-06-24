<template>
  <div id="subgrounp">
     {{message}}
    <cx-serach>11</cx-serach>
    <div class="block">
      <span class="demonstration">周</span>
      <el-date-picker
        v-model="value3"
        type="week"
        format="yyyy 第 WW 周"
        placeholder="选择周">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import Serach from '../search/search.vue';

export default {
   components: {
          cxSerach:Serach
        },
  data: function() {
    return {
      message: "Welcome",
      value3: '',
     
    };
  },
  created(){
      
    },
  methods: {
  
  }
};
</script>

<style lang="less" scoped>

</style>