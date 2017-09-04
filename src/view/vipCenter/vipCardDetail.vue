<template lang="html">
    <h1>card详情</h1>
</template>

<script>
// import { mapState, mapActions } from 'vuex';

export default {
    title() {
        return '会员卡详情';
    },
    asyncData({ store, route }) {
        return store.dispatch('getVipCardDescription', route.params.vipCardId);
    }
};
</script>

<style lang="scss">
</style>
