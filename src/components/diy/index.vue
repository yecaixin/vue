<template>
    <div>
{{userInfo}}
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data() {
        return {
          
        };
    },
     computed: {
     ...mapGetters({
        title: 'getTitle',
        userInfo: 'getUserInfo'
      })
    },
    methods: {

    }

}
</script>

<style lang="less" scoped>

</style>

