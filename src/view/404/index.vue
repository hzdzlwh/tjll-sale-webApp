<template>
    <div class="404">
        <h1>404</h1>
        <router-link :to="{ name: 'myOrder', params: { id: '5' } }">myOrder</router-link> <br>
        <router-link :to="{ name: 'orderDetails', params: { id: '5' } }">orderDetails</router-link> <br>
        <router-link :to="{ name: 'roomDetails', params: { id: '5' } }">roomDetails</router-link> <br>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
</style>
