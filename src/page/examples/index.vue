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
      <ycx-area-select :province="{}" :city="{}" :country="{}" @select="handleSelectArea"></ycx-area-select>
    </div>
    <!-- Toast -->
    <h1>demo-Toast</h1>
    <div class="demo-box">
      <a href="javascript:;" @click="handleToast">打开一个Toast</a>
      <a href="javascript:;" @click="handleHorizontalToast">打开一个水平方向的 Toast</a>
    </div>
    <!-- dialog -->
    <h1>demo-Dialog</h1>
    <div class="demo-box">
      (1)：
      <a
        href="javascript:;"
        @click="visible=true;type='success';cancelButton=false"
        class="link-demo"
      >打开[success]</a>
      (2)：
      <a
        href="javascript:;"
        @click="visible=true;type='dialog'; cancelButton= true"
        class="link-demo"
      >打开[dialog]</a>
      <cx-dialog
        :visible.sync="visible"
        :type="type"
        title="弹出框"
        :lock="true"
        :cancel="cancelButton"
        :width="400"
      >
        <div class>测试dialog</div>
      </cx-dialog>
    </div>
    <!-- lazy-img -->
    <!-- @params
        1：src：图片路径 , 类型：String
        2：thumb：预览图，类型：String，默认：空(可为空)
        3：mum：是否显示菊花，类型：Boolean，默认：false
        4：autoLoad：主动加载，类型：Boolean，默认：false
    -->
    <h1>demo-lazyimg</h1>
    <a href="javascript:;" @click="autoLoad2 = true">测试加载下面的图片</a>
    <div class="demo-box-3" style="width:500px;">
      <coo-lazy-img src="https://photo.tuchong.com/1826690/f/10651083.jpg" :autoLoad="true"></coo-lazy-img>
    </div>

    <!-- uploader -->
    <!-- @params
        1：src：图片路径 , 类型：String
        2：thumb：预览图，类型：String，默认：空(可为空)
        3：mum：是否显示菊花，类型：Boolean，默认：false
        4：autoLoad：主动加载，类型：Boolean，默认：false
    -->
    <div class="demo-box">
      <cx-uploader
        :length="10"
        :files="['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1340925344,145113786&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=602288768,1056696022&fm=27&gp=0.jpg']"
        :readonly="false"
      ></cx-uploader>
    </div>

    <!-- paginate -->
    <!-- @params
        1：src：图片路径 , 类型：String
        2：thumb：预览图，类型：String，默认：空(可为空)
        3：mum：是否显示菊花，类型：Boolean，默认：false
        4：autoLoad：主动加载，类型：Boolean，默认：false
    -->
    <com-paginate
      :total-page="totalPage"
      :page-size="pageSize"
      :page-current="currentPage"
      @change="pageChange"
    ></com-paginate>

    <br>

    当前页码为：{{currentPage}}
  </div>
</template>

<script>
import Icon from "../../components/icon/icon.vue";
import ycxAreaSelect from "../../components/areaSelect/areaSelect.vue";
import ZsButton from "../../components/button/src/button.vue";
import Dialog from "../../components//dialog/dialog.vue";
import LazyImg from "../../components/lazyImg/lazyImg.vue";
import Uploader from "../../components/uploader/uploader.vue";
import ComPaginate from "../../components/paginate/ComPaginate.vue";

let _myToast;
let _otherToast;
export default {
  components: {
    ycxIcon: Icon,
    ycxAreaSelect,
    ZsButton,
    cxDialog: Dialog,
    cooLazyImg: LazyImg,
    cxUploader: Uploader,
    ComPaginate
  },
  data: function() {
    return {
      message: "Welcome",
      visible: false,
      type: "",
      cancelButton: false,
      totalPage: 11, //总页数
      pageSize: 10, //每页显示的数据条数
      currentPage: 1 //当前的页码
    };
  },
  created() {},
  methods: {
    handleSelectArea(area) {
      console.log(area);
    },
    handleToast() {
      _myToast = this.$toast({
        type: "success",
        message: "提示信息"
      });
      // 主动关闭
      // setTimeout(() => {
      //     _myToast.close();
      // }, 3000);
    },
    handleHorizontalToast() {
      _otherToast = this.$toast({
        type: "warn",
        message: "提示信息",
        direction: "horizontal",
        theme: "red"
      });
    },
    pageChange(val) {
      this.currentPage = val;
      console.log("pageChange:" + val);
    }
  }
};
</script>

<style lang="less" scoped>

</style>