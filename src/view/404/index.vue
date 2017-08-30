<template>
    <div class="404">
        <h1>404</h1>
        <router-link :to="{ name: 'myOrder', params: { id: '54797361' } }">myOrder</router-link> <br>
        <router-link :to="{ name: 'guest', params: { id: '54797361' } }">guest</router-link> <br>
        <router-link :to="{ name: 'login', params: { id: '54797361' } }">login</router-link> <br>
        <router-link :to="{ name: 'overview', params: { id: '54797361' } }">overview</router-link> <br>
    </div>
</template>

<script>
export default {
    title() {
        return '未知的地方';
    }
};
</script>

<style lang="css">
</style>
