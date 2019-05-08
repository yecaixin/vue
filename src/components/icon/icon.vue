<template>
    <i :class="['coo-icon', `coo-icon-${type}`,`cx-icon__${size}` ]" ></i>
</template>
<script>
    export default {
        props: {
            type: String,
            size : {
                type : String,
                default : '16'
            },
        }
    };
</script>
<style lang="less" src="./icon.less"></style>
