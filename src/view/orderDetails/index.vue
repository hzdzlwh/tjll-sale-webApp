<template>
    <div class="order">
        <div class="qrcode-box" v-if="orderDetails.qrcodeUrl">
            <img class="qrcode-img" :src="orderDetails.qrcodeUrl" alt="qrcode">
            <a :href="orderDetails.qrcodeUrl" :download="orderDetails.qrcodeUrl" class="qrcode-download">保存二维码</a>
        </div>
        <header class="order-head">
            <p class="order-head-status">
                <span class="status">{{ orderDetails.orderState | orderState }}</span>
                <span class="countdown" v-if="orderDetails.orderState === -1">剩余：{{ this.countDown | secondsFormat }}</span>
            </p>
            <p class="order-head-tips" v-if="orderDetails.startDate">计划出行：{{ orderDetails.startDate | dateFormat('YYYY-MM-DD') }}</p>
        </header>
        <section class="order-section">
            <p class="order-section-title" v-if="orderDetails.orderType === 0">住宿</p>
            <p class="order-section-title" v-if="orderDetails.orderType === 1">餐饮</p>
            <p class="order-section-title" v-if="orderDetails.orderType === 2">娱乐</p>
            <order-box :bottomBorder="false" :showButton="orderDetails.orderState !== 1" :saveId="item.saveId" :key="index" v-for="(item, index) in orderDetails.items" :data="item"></order-box>
        </section>
        <section class="order-section">
            <p class="order-section-info"><span class="info">联系人</span>{{ orderDetails.customerName }}</p>
            <p class="order-section-info"><span class="info">手机号</span>{{ orderDetails.customerPhone }}</p>
        </section>
        <section class="order-section">
            <p class="order-section-info"><span class="info">订单号</span>{{ orderDetails.orderNum }}</p>
            <p class="order-section-info"><span class="info">创建时间</span>{{ orderDetails.createDate }}</p>
        </section>
        <section class="order-section">
            <div class="order-section-bill">
                <p class="info">金额</p>
                <p>￥ {{ orderDetails.payment.total }}</p>
            </div>
            <div class="order-section-bill" v-for="paid in orderDetails.payment.paid">
                <p class="info">{{ paid.name }}</p>
                <p>-￥{{ paid.fee }}</p>
            </div>
            <div class="order-section-total" v-if="!(orderDetails.orderState === -1 || orderDetails.orderState === 1)">
                <p class="info">{{isWeixin ? '微信' : '支付宝'}}付款</p>
                <p>{{ orderDetails.payment.need }}</p>
            </div>
        </section>
        <div class="order-button" v-if="orderDetails.orderState === -1">
            <div class="order-button-cancel" @click="handleOrder">取消订单</div>
            <div class="order-button-pay" @click="pay">
                {{isWeixin ? '微信' : '支付宝'}}支付
            </div>
        </div>
    </div>
</template>

<script>
import orderBox from '@/components/orderBox';
import { mapState, mapActions } from 'vuex';
import moment from 'moment';
import { isWeixin, wxpayUrl } from '@/util/mobileUtil';
import http from '@/util/http';


export default {
    asyncData({ store, route }) {
        return store.dispatch('getOrderDetail', route.params.orderId);
    },
    title() {
        return '订单详情';
    },
    data() {
        return {
            countDown: 0,
            isWeixin
        };
    },
    computed: {
        ...mapState([
            'orderDetails'
        ])
    },
    created() {
        if (this.orderDetails.orderState === -1) {
            this.initCountDown(this.orderDetails.createDate);
        }
    },
    components: {
        orderBox
    },
    methods: {
        ...mapActions([
            'cancelOrder'
        ]),
        initCountDown(time) {
            const createTime = moment(time).format('X');
            const nowTime = moment().format('X');
            this.countDown = (createTime - nowTime) + 900;
            /* eslint no-unused-vars: 0 */
            let timer = setInterval(() => {
                this.countDown -= 1;
                if (this.countDown < 1) {
                    timer = null;
                }
            }, 1000);
        },
        handleOrder() {
            this.cancelOrder(this.orderDetails.orderId).then(() => {
                this.$router.push({ name: 'myOrder' });
            });
        },
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

<style lang="scss" scoped>
    .order {
        padding: 0.4063rem 0 2.5938rem;
        .order-head {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.4063rem;
            padding: 0 0.5rem;
            height: 1.4375rem;
            background: #fff;
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            &-status {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .status {
                    font-size:0.4375rem;
                    color:#49a5f1;
                }
                .countdown {
                    margin-top: 0.0625rem;
                    font-size: 0.3438rem;
                    color: #bbb;
                }
            }
            &-tips {
                font-size: 0.375rem;
                line-height: 1.4375rem;
            }
        }
        .order-section {
            margin-bottom: 0.4063rem;
            background: #fff;
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            .order-section-title {
                padding: 0 0.5rem;
                height: 1.1875rem;
                line-height: 1.1875rem;
                font-size: 0.4375rem;
                text-indent: 0.75rem;
                color: #333;
                background-image: url(~assets/images/house-icon.png);
                background-repeat: no-repeat;
                background-position: 0.5rem center;
                background-size: 0.5rem;
            }
            .order-section-info {
                padding: 0 0.5rem;
                margin: 0.375rem 0;
                font-size: 0.3438rem;
                color: #999;
                .info {
                    display: inline-block;
                    width: 1.875rem;
                    color: #bbb;
                }
            }
            .order-section-bill {
                margin: 0.25rem 0;
                padding: 0 0.5rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.3438rem;
                &:first-child {
                    margin: 0.375rem 0 0.25rem;
                }
                &:last-child {
                    margin: 0.25rem 0 0.375rem;
                }
                .info {
                    display: inline-block;
                    width: 1.875rem;
                    color: #bbb;
                }
                p {
                    color: #999;
                }
            }
            .order-section-total {
                padding: 0 0.5rem;
                display: flex;
                justify-content: space-between;
                height: 1.1875rem;
                line-height: 1.1875rem;
                font-size: 0.3438rem;
                border-top: 1px solid #e6e6e6;
                .info {
                    display: inline-block;
                    width: 1.875rem;
                    color: #bbb;
                }
                p {
                    color: #999;
                }
            }
        }
        .order-button {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 0.5rem;
            height: 2.1875rem;
            background-color: #fff;
            border-top: 1px solid #e6e6e6;
            .order-button-cancel, .order-button-pay {
                width: 4.25rem;
                text-align: center;
                border: 1px solid #e6e6e6;
                border-radius: 0.125rem;
                background-color: #fff;
                height: 1.1875rem;
                line-height: 1.1875rem;
                font-size: 0.4375rem;
                color: #999;
            }
            .order-button-pay {
                background-color: #49a5f1;
                color: #fff;
            }
        }
        .qrcode-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            .qrcode-img {
                width: 5.1563rem;
                height: 5.1563rem;
                border-radius: 0.1563rem;
                margin-bottom: 0.4063rem;
            }
            .qrcode-download {
                display: block;
                text-decoration: none;
                font-size: 0.375rem;
                text-align: center;
                line-height: 0.875rem;
                height: 0.875rem;
                width: 3.375rem;
                border: 1px solid #49a5f1;
                color: #49a5f1;
                background: #fff;
                border-radius: 0.125rem;
                margin-bottom: 0.4063rem;
            }
        }
    }
</style>
