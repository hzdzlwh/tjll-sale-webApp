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
        <div class="order-button">
            <div class="button">取消订单</div>
        </div>
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
        padding: 0 0 1.1875rem;
        .order-head {
            display: flex;
            justify-content: space-between;
            margin: 0.4063rem 0;
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
            padding: 0 0.5rem;
            .button {
                text-align: center;
                border: 1px solid #e6e6e6;
                border-radius: 0.125rem;
                background-color: #fff;
                height: 1.1875rem;
                line-height: 1.1875rem;
                font-size: 0.4375rem;
                color: #999;
            }
        }
    }
</style>
