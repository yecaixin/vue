<template>
  <div id="subgrounp">{{message}}test</div>
</template>

<script>
import {isChinese} from '../../utils/utils';
export default {
  data: function() {
    return {
      message: "Welcome To"
    };
  },
  created(){
       var Mock = require('mockjs')
       var data = Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|10-12': [{
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              'id|+1': 1 ,
            "name|+1": [
              "Hello",
              "Mock.js",
              "!"
            ]
          }]
      })
// 输出结果
console.log(JSON.stringify(data, null, 4))
console.log(isChinese("你好你好"));
console.log(isChinese("111"));
    },
  methods: {
  
  }
};
</script>

<style lang="less" scoped>

</style>