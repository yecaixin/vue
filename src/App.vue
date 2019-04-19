<template>
  <div id="app">
    <Header></Header>
     <div class="wrap">
      <v-nav></v-nav>
      <v-content></v-content>
    </div>
    
    
  </div>
</template>

<script>
import Header     from '@/components/Vheader/header'
import vNav       from '@/components/Vnav/nav'
import vContent       from '@/components/vContent/content'

export default {
  name: 'App',
  components: {
    Header,
    vNav,
    vContent
  }
}
</script>

<style>
	@import './style/common.css';
#app {
  width: 100%;
  height: 100%;
}
.wrap{
  display: flex;
  height: 100%;
    width: 100%;
}
</style>
