<template>
<div>
    
    <div class="payment-item" ><span class="payment-label">需支付</span>￥{{ orderDetails.payment.need }}</div>
    <div class="payment-item" v-if='isWeixin'>
    <img src="../../assets/images/weixin.png"  alt="" class="payment-ico"><span>微信支付<div class="payment-tip">微信安全支付</div></span></div>
    <div class="payment-item" v-else>
    <img src="../../assets/images/zhifubao.png"  alt="" class="payment-ico"><span>支付宝支付<div class="payment-tip">支付宝安全支付</div></span></div>
    <div class="payment-bottom" @click='pay' >
        {{isWeixin ? '微信' : '支付宝'}}支付：¥{{ orderDetails.payment.need }}
    </div>
</div>

</template>
<script>
import http from '@/util/http';
import { isWeixin, wxpayUrl } from '@/util/mobileUtil';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            isWeixin
        };
    },
    asyncData({ store, route }) {
        return store.dispatch('getOrderDetail', route.params.orderId);
    },
    computed: {
        ...mapState([
            'orderDetails'
        ])
    },
    methods: {
        pay() {
            http.get('/directNet/payDirectOrder', { orderId: this.$route.params.orderId, payType: isWeixin ? 1 : 0 }).then(res => {
                if (this.isWeixin) {
                    window.location.href = wxpayUrl + res.data.html;
                    return;
                }
                window.localStorage.setItem('phone', res.data.customerPhone);
                window.localStorage.setItem('uuid', res.data.uuid);
                const div = document.createElement('div');
                div.innerHTML = res.data.html;
                document.body.appendChild(div);
                document.forms.alipaysubmit.submit();
            });
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
		height: 1.25rem;
		text-align: center;;
		line-height: 1.25rem;
		font-size: 0.4375rem;
		background-color: #49a5f1;
		color: #fff;
    }
</style>