<template>
  <div id="subgrounp">
      <h1>demo-icon</h1>
      <!-- icon -->
          <ycx-icon type="waiting" size="big"></ycx-icon>
          
      <!-- botton -->
      <h1>demo-botton</h1>
          <ZsButton type="danger">111</ZsButton>
      <!-- message -->

      <h1>demo-areaselect</h1>
      <!-- areaselect -->
      <div class="demo-box" style="max-width: 500px;">
            <ycx-area-select
                    :province="{}"
                    :city="{}"
                    :country="{}"
                    @select="handleSelectArea"
            ></ycx-area-select>
      </div>


  </div>
</template>

<script>
import {isChinese} from '../../utils/utils';
import Icon from '../icon/icon.vue';
import ycxAreaSelect from '../areaSelect/areaSelect.vue';
import ZsButton from '../button/src/button.vue';


export default {
   components: {
            ycxIcon: Icon,
            ycxAreaSelect,
            ZsButton
        },
  data: function() {
    return {
      message: "Welcome"
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
   handleSelectArea (area) {
                console.log(area);
            },
  }
};
</script>

<style lang="less" scoped>

</style>