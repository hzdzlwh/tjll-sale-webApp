<template>
    <div class="order" v-if='orderDetails'>
        <section class="order-section">
            <p class="order-section-title">住宿</p>
            <order-box :bottomBorder="false" :key="index" v-for="(item, index) in orderDetails.items" :data="item"></order-box>
        </section>
        <section class="order-section">
        <ddInput :label='"联系人"' v-model='name' :required=true :placeholder='"请输入联系人"'></ddInput>
        <ddInput :label='"手机号"' v-model='phone' :readonly=true :className='"phoneDisabeld"' :required=true :placeholder='"请输入手机号"'></ddInput>
        <ddSelect :label='"会员方案"' v-model='orderDetails.planId' :list='discountList'></ddSelect>
        <ddInput :label='"备注"' v-model='remark' :placeholder='"请输入备注"'></ddInput>
        </section>
        <section>
       <div v-if='orderDetails.payment'>
           <div class="order-pay">
                <div class="order-pay-label">订单金额</div>
                <div class="order-pay-content" style="color:#49a5f1">¥{{orderDetails.payment.total}}</div>
                <div class="order-pay-check"></div>
           </div>
           <div class="order-pay" v-if='orderDetails.payment.game'>
                <div class="order-pay-label">星球币</div>
                <div class="order-pay-content" >共500个，可使用500个</div>
                <div class="order-pay-check"><swich v-model='game'></swich></div>
           </div>
           <div class="order-pay" v-if='orderDetails.payment.member'>
                <div class="order-pay-label">余额</div>
                <div class="order-pay-content" >余额¥{{orderDetails.payment.member.lastFee}}，可使用
¥{{orderDetails.payment.member.ableFee}}</div>
                <div class="order-pay-check"><swich v-model='member'></swich></div>
           </div>
           <div class="order-pay" v-if='orderDetails.payment.card'>
                <div class="order-pay-label">会员卡余额</div>
                <div class="order-pay-content" >余额¥{{orderDetails.payment.card.lastFee}}，可使用
¥{{orderDetails.payment.card.ableFee}}</div>
                <div class="order-pay-check"><swich v-model='card'></swich></div>
           </div>
       </div>
       </section>
        <div class="order-pay-button">
            <div class="order-pay-info">实付款:<span>￥{{orderDetails.payment && orderDetails.payment.online}}</span></div>
            <div class="order-pay-sub" @click='subOrder'>提交订单</div>
        </div>
    </div>
</template>

<script>
import orderBox from '@/components/orderBox';
import { mapState } from 'vuex';
import ddInput from '@/components/dd-form-control/input';
import ddSelect from '@/components/dd-form-control/select';
import http from '@/util/http';
import swich from '@/components/common/swich';

export default {
    // asyncData({ store, route }) {
    //     return store.dispatch('getOrderDetail', route.params.orderId);
    // },
    title() {
        return '订单详情';
    },
    data() {
        return {
            name: '',
            orderDetails: {},
            discount: '',
            discountList: [],
            isVip: false,
            remark: '',
            card: false,
            member: false,
            game: false,
            flag: true
        };
    },
    computed: {
        ...mapState({
            phone: state => state.phone
        }),
        planId() {
            return this.orderDetails.planId;
        }
    },
    methods: {
        subOrder() {
            http.get('/directNet/commitDirectOrder', { customerName: this.name, planId: this.orderDetails.planId, remark: this.remark, customerPhone: this.phone, serialNum: this.$route.params.orderId }).then(res => {
                this.$router.push(`/${this.$route.params.id}/payment/${res.data.orderId}`);
            });
        },
        changPrice(flag) {
            if (flag === undefined) {
                if (!this.flag) {
                    return;
                }
            }
            let paymentPlan = 0;
            if (this.card) {
                paymentPlan += 1;
            }
            if (this.member) {
                paymentPlan += 3;
            }
            if (this.game) {
                paymentPlan += 2;
            }
            const params = {};
            if (paymentPlan) {
                params.paymentPlan = paymentPlan;
            }
            params.serialNum = this.$route.params.orderId;
            params.planId = this.orderDetails.planId;
            return http.get('/directNet/addDirectOrder', params).then(res => {
                const payment = res.data.payment;
                if (!payment.card) {
                    this.card = false;
                }
                if (!payment.member) {
                    this.member = false;
                }
                if (!payment.game) {
                    this.game = false;
                }
                this.orderDetails = res.data;
                return res;
            });
        },
        fetchDate() {
            http.get('/directNet/addDirectOrder', { serialNum: this.$route.params.orderId }).then(res => this.orderDetails = res.data);
        },
        getDisconutList() {
            http.get('/directNet/getVipInfo').then(res => {
                this.name = res.data.name;
                this.isVip = res.data.isVip;
                if (res.data.isVip) {
                    this.discountList = res.data.list.map(el => {
                        return {
                            ...el,
                            value: el.planId,
                            key: el.name + el.serialNum
                        };
                    });
                }
            });
        }
    },
    watch: {
        member() {
            this.changPrice();
        },
        card() {
            this.changPrice();
        },
        game() {
            this.changPrice();
        },
        planId() {
            this.flag = false;
            this.changPrice(true).then(() => this.flag = true);
        }
    },
    created() {
        this.fetchDate();
        this.getDisconutList();
    },
    components: {
        orderBox,
        ddInput,
        ddSelect,
        swich
    }
};
</script>
<style>
    .phoneDisabeld{
        background-color: #f0f0f0;
    }
</style>
<style lang="scss" scoped>
    .order {
        padding: 0.4063rem 0 2.5938rem ;
        .order-pay-button{
            font-size:0.5rem;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            padding-left:0.5rem;
            height: 1.25rem;
            background-color: #fff;
            border-top: 1px solid #e6e6e6;
            .order-pay-info{
                flex:1;
                span{
                    color:#49a5f1;
                }
            }
            .order-pay-sub{
                line-height:1.25rem;
                background:#49a5f1;
                width:3.0rem;
                height:1.25rem;
                text-align:center;
                color:#fff;
            }
        }
        .order-pay{
            // line-height:0.84375rem;
            padding:0.1875rem 0.5rem;
            font-size:0.375rem;
            color:#666;
            display:flex;
            border-top: 1px solid #e6e6e6;
            background-color:#fff;
            .order-pay-label{
                padding: 0.265625rem 0;
                width:2.5rem;
            }
            .order-pay-content{
                // font-size:0.4375rem;
                padding: 0.25rem 0;
                width:4rem;
                word-break: break-all;
            }
            .order-pay-check{
                flex: 1;
                text-align: right;
            }
        }
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
