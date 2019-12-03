<template>
    <div id="cart">
        <h3>Vuex购物车demo</h3>
        <shop-list></shop-list>
        <shop-cart></shop-cart>
        <shop-info></shop-info>
    </div>
</template>

<script>
    // import Resource from './components/Resource';
    // import {Info,List,Cart} from '../../components/Shop/';

    import Cart from '../../components/Shop/Cart/Cart.vue';
    import List from '../../components/Shop/List/List.vue';
    import Info from '../../components/Shop/Info/Info.vue';

    export default {
        name: 'app',
        components: {
            ShopList:List,
            ShopInfo:Info,
            ShopCart:Cart
        }
    }
</script>

<style>
    /* #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    } */
</style>