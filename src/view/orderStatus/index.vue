<template>
    <div class="order">
        <header class="order-head">
            <p class="order-head-status">等待出行</p>
            <p class="order-head-time">计划出行：8月3日</p>
        </header>
        <section class="order-section">
            <p class="order-section-title">住宿</p>
            <order-box></order-box>
        </section>
        <section class="order-section">
            <p class="order-section-info">联系人： 秋丽</p>
            <p class="order-section-info">联系人： 15068790698</p>
        </section>
        <section class="order-section">
            <p class="order-section-info">订单编号： 1708080952122700907</p>
            <p class="order-section-info">创建时间： 2017-08-08 09:52:12</p>
        </section>
        <section class="order-section">
            <div class="order-section-bill">
                <p>金额</p>
                <p>￥ 200.00</p>
            </div>
            <div class="order-section-bill">
                <p>星球币</p>
                <p>-￥ 50.00</p>
            </div>
            <div class="order-section-bill">
                <p>余额</p>
                <p>-￥ 50.00</p>
            </div>
            <div class="order-section-tatol">
                微信付款：￥100.00
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

<style lang="sass" scoped>
    .order
        height: 100%

        .order-head
            display: flex
            justify-content: space-between
            height: 50px
            line-height: 50px
            background: #fff
            margin-bottom: 10px

        .order-section
            margin-bottom: 10px
            background: #fff
            border-top: 1px solid #ccc
            border-bottom: 1px solid #ccc

            .order-section-title
                height: 30px
                line-height: 30px

            .order-section-info

            .order-section-bill
                display: flex
                justify-content: space-between

            .order-section-tatol
                text-align: right


</style>
