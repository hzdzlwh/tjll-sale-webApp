<template>
<div>
    
    <div><span>需支付</span>￥100.00</div>
    <div @click='pay'>微信支付：￥100.00</div>
</div>

</template>
<script>
import http from '@/util/http';

export default {
    methods: {
        pay() {
            http.get('/directNet/payDirectOrder', { orderId: this.$route.orderId });
        }
    }
};
</script>
<style lang='scss' scoped>
    
</style>