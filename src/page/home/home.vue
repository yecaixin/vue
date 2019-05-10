<template>
  <div class="container">
    <header class="header">
    
    </header>
    <ul >
      <li v-for="(item,index) in routes"  :key="index">
        <router-link :to="item.path">
          {{item.name}} {{item.title}}
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script type="text/javascript">


  export default{
    data(){
      return {
        routes:[],
      }
    },

    mounted(){
      this.routes=this.$router.options.routes;
    }
  }
</script>
<style scoped="scoped">
.container{ width: 500px; margin: 30px auto;}
.container a{ display: inline-block;  font-size: 20px; color:#333;line-height: 40px;text-decoration: underline;}
</style>