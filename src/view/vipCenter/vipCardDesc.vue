<template lang="html">
    <div class="cardDesc">
        <div class="cardDesc-title">权益说明</div>
        <ul class="cardDesc-list">
            <li v-for="item in vipCardDetail.discountList" class="cardDesc-list-item">
                <p class="label">{{ item.name }}</p>
                <p class="text">{{ item.content }}</p>
            </li>
        </ul>
        <div class="cardDesc-title">可支付项目</div>
        <ul class="cardDesc-list">
            <li v-for="item in vipCardDetail.payStrategyList" class="cardDesc-list-item">
                <p class="label">{{ item.name }}</p>
                <p class="text">{{ item.content }}</p>
            </li>
        </ul>
        <template v-if="vipCardDetail.thresholdFee !== undefined">
            <div class="cardDesc-title">使用规则</div>
            <div class="cardDesc-list">
                <li class="cardDesc-list-item">
                    账户余额小于等于{{ vipCardDetail.thresholdFee }}元时不可使用
                </li>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    title() {
        return '详细说明';
    },
    asyncData({ store, route }) {
        return Promise.all([
            store.dispatch('getVipCardDescription', route.params.vipCardId)
        ]);
    },
    computed: {
        ...mapState([
            'vipCardDetail'
        ])
    }
};
</script>

<style lang="scss" scoped>
.cardDesc {
    margin-bottom: 1.5625rem;
    &-title {
        height: 0.94rem;
        font-size: 0.38rem;
        color: #666;
        padding: 0.38rem 0.5rem 0;
    }
    &-list {
        padding: 0.38rem 0.5rem;
        font-size: 0.38rem;
        background-color: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        &-item {
            display: flex;
            color: #333;
            .label {
                width: 1.56rem;
                color: #999;
                margin-right: 0.38rem;
            }
            .text {
                flex: 1;
            }
        }
        &-item + &-item {
            margin-top: 0.38rem;
        }
    }
}
</style>
