<template>
  <div id="subgrounp">{{message}}组件</div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "incomePayPosition"
    }
  },
  data: function() {
    return {
      message: "Welcome To"
    };
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>

</style>
