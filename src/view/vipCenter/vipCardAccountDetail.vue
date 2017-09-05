<template lang="html">
    <div class="account">
        <div class="account-header">
            <p class="title">当前余额</p>
            <p class="money">{{ vipCardAccountDetail.balance }}个</p>
        </div>
        <template v-if="vipCardAccountDetail.recordList.length">
            <div class="account-title">账户明细</div>
            <ul class="account-bill">
                <li v-for="item in vipCardAccountDetail.recordList" class="account-bill-item">
                    <div class="left">
                        <div class="left-title">{{ item.name }}</div>
                        <div class="left-date">{{ item.time }}</div>
                    </div>
                    <div class="right" :class="{ green: item.price > 0, red: item.price < 0 }">
                        {{ item.price > 0 ? '+' : '-' }} {{ item.price }} 个
                    </div>
                </li>
            </ul>
        </template>
        <template v-else>
            <h1>暂时没有消费数据</h1>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    title() {
        return '虚拟币';
    },
    asyncData({ store, route }) {
        return store.dispatch('getMember', route.params.orderId);
    },
    created() {
        this.getVipCardAccountDetail({
            vipCardId: this.$route.params.vipCardId
        });
    },
    methods: {
        ...mapActions([
            'getVipCardAccountDetail'
        ])
    },
    computed: {
        ...mapState([
            'personalCenter',
            'vipCardAccountDetail'
        ])
    }
};
</script>

<style lang="scss" scoped>
@import "./detail.scss";
</style>
