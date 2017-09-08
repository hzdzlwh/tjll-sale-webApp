<template>
<div>
    
    <div class="payment-item"><span class="payment-label">需支付</span>￥100.00</div>
    <div class="payment-item">
    <img src="../../assets/images/weixin.png"  alt="" class="payment-ico"><span>微信支付<div class="payment-tip">微信安全支付</div></span></div>
    <div class="payment-item">
    <img src="../../assets/images/zhifubao.png"  alt="" class="payment-ico"><span>支付宝支付<div class="payment-tip">支付宝安全支付</div></span></div>
</div>

</template>
<script>
import http from '@/util/http';

import { isWeixin } from '@/util/mobileUtil';

export default {
    methods: {
        pay() {
            http.get('/directNet/payDirectOrder', { orderId: this.$route.orderId });
        }
    }
};
</script>
<style lang='scss' scoped>
    .payment-item{
    	margin-top:0.25rem;
    	padding:0.375rem 0.5rem;
    	font-size: 0.375rem;
    	background-color: #fff;
        color: #333;
        display: flex;
        .payment-ico{
            margin-right: 0.375rem;
        }
    	.payment-label{
    		width: 2.5rem;
    		display: inline-block;
    	}
        .payment-tip{
            color: #999;
            font-size: 0.375rem;
            margin-top: 0.1875rem;
        }
    }
    .payment-bottom{
    	position: fixed;
		bottom: 0;
		width: 100%;
		height: 1.0rem;
		text-align: center;;
		line-height: 1rem;
		font-size: 0.375rem;
		background-color: #009e9e;
		color: #fff;
    }
</style>