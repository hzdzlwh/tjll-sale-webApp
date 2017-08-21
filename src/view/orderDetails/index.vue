<template>
    <div class="order">
        <header class="order-head">
            <p class="order-head-status">
                <span class="status">等待付款</span>
                <span class="countdown">剩余14分12秒</span>
            </p>
            <p class="order-head-tips">计划出行：8月3日</p>
        </header>
        <section class="order-section">
            <p class="order-section-title">住宿</p>
            <order-box :bottomBorder="false"></order-box>
            <order-box :bottomBorder="false"></order-box>
            <order-box :bottomBorder="false"></order-box>
        </section>
        <section class="order-section">
            <p class="order-section-info"><span class="info">联系人</span>秋丽</p>
            <p class="order-section-info"><span class="info">手机号</span>15068790698</p>
        </section>
        <section class="order-section">
            <p class="order-section-info"><span class="info">订单号</span>1708080952122700907</p>
            <p class="order-section-info"><span class="info">创建时间</span>2017-08-08 09:52:12</p>
        </section>
        <section class="order-section">
            <div class="order-section-bill">
                <p class="info">金额</p>
                <p>￥ 200.00</p>
            </div>
            <div class="order-section-bill">
                <p class="info">星球币</p>
                <p>-￥ 50.00</p>
            </div>
            <div class="order-section-bill">
                <p class="info">余额</p>
                <p>-￥ 50.00</p>
            </div>
            <div class="order-section-total">
                <p class="info">微信付款</p>
                <p>￥100.00</p>
            </div>
        </section>
    </div>
</template>

<script>
import orderBox from '@/components/orderBox';

export default {
    components: {
        orderBox
    }
};
</script>

<style lang="scss" scoped>
    .order {
        height: 100%;
        .order-head {
            display: flex;
            justify-content: space-between;
            margin: 0.463rem 0;
            padding: 0 0.593rem;
            height: 1.704rem;
            background: #fff;
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            &-status {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .status {
                    font-size:0.519rem;
                    color:#49a5f1;
                }
                .countdown {
                    font-size: 0.407rem;
                    color: #bbb;
                }
            }
            &-tips {
                font-size: 0.444rem;
                line-height: 1.704rem;
            }
        }
        .order-section {
            margin-bottom: 0.463rem;
            background: #fff;
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            .order-section-title {
                padding: 0 0.593rem;
                height: 1.407rem;
                line-height: 1.407rem;
                font-size: 0.519rem;
                text-indent: 0.889rem;
                color: #333;
                background-image: url(~assets/images/house-icon.png);
                background-repeat: no-repeat;
                background-position: 0.593rem center;
                background-size: 0.593rem;
            }
            .order-section-info {
                padding: 0 0.593rem;
                margin: 0.444rem 0;
                font-size: 0.407rem;
                color: #999;
                .info {
                    display: inline-block;
                    width: 2.222rem;
                    color: #bbb;
                }
            }
            .order-section-bill {
                margin: 0.296rem 0;
                padding: 0 0.593rem;
                display: flex;
                justify-content: space-between;
                font-size: 0.407rem;
                &:first-child {
                    margin: 0.444rem 0 0.296rem;
                }
                &:last-child {
                    margin: 0.296rem 0 0.444rem;
                }
                .info {
                    display: inline-block;
                    width: 2.222rem;
                    color: #bbb;
                }
                p {
                    color: #999;
                }
            }
            .order-section-total {
                padding: 0 0.593rem;
                display: flex;
                justify-content: space-between;
                height: 1.407rem;
                line-height: 1.407rem;
                font-size: 0.407rem;
                border-top: 1px solid #e6e6e6;
                .info {
                    display: inline-block;
                    width: 2.222rem;
                    color: #bbb;
                }
                p {
                    color: #999;
                }
            }
        }
    }
</style>
