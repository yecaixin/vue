<template>
  <div id="content">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@height=90%;
#content {
  flex: 1;
  // height: 100%;
  margin: 20px;
  box-sizing: border-box;
  background: white;
  border-radius: 6px;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(5, 37, 88, 0.05);
  -moz-box-shadow: 0px 5px 5px 0px rgba(5, 37, 88, 0.05);
  box-shadow: 0px 5px 5px 0px rgba(5, 37, 88, 0.05);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
