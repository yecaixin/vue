<template>
  <div id="app">
    <Header></Header>
    <!-- <v-nav></v-nav> -->
    <router-view/>
  </div>
</template>

<script>
import Header     from '@/components/Vheader/header'
import vNav       from '@/components/Vnav/nav'

export default {
  name: 'App',
  components: {
    Header,
    vNav
  }
}
</script>

<style>
	@import './style/common.css';
#app {
  width: 100%;
  height: 100%;
}
</style>
