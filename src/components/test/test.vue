<template>
  <div id="subgrounp">
     {{message}}
    <cx-serach>11</cx-serach>
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