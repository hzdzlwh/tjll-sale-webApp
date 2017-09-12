<template lang="html">
    <div class="card">
        <div class="card-list">
            <router-link :to="{ name:'vipCardDetail', params: { vipCardId: item.id, card: item } }" :key="item.cardNum" v-for="item in usableList" class="card-list-item">
                <ul class="left">
                    <li class="left-name">{{ item.name }}</li>
                    <li class="left-number">{{ item.cardNum }}</li>
                </ul>
                <p class="right">
                    ￥{{ item.balance }}
                </p>
            </router-link>
        </div>
        <template v-if="disableList.length !== 0">
            <div class="card-title">已挂失</div>
            <div class="card-list">
                <router-link :to="{ name:'vipCardDetail', params: { vipCardId: item.id, card: item } }" :key="item.cardNum" v-for="item in disableList" class="card-list-item disable">
                    <ul class="left">
                        <li class="left-name">{{ item.name }}</li>
                        <li class="left-number">{{ item.cardNum }}</li>
                    </ul>
                    <p class="right">
                        ￥{{ item.balance }}
                    </p>
                </router-link>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    title() {
        return '会员卡';
    },
    asyncData({ store, route }) {
        return store.dispatch('getMember', route.params.orderId);
    },
    created() {
        this.getVipCardList({
            vipId: this.personalCenter.vipUser.vipId
        });
    },
    methods: {
        ...mapActions([
            'getVipCardList'
        ])
    },
    computed: {
        ...mapState([
            'personalCenter',
            'vipCardList'
        ]),
        usableList() {
            return this.vipCardList.filter(item => item.status === 0);
        },
        disableList() {
            return this.vipCardList.filter(item => item.status !== 0);
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    padding-bottom: 1.5625rem;
    padding-top: 0.4063rem;
    &-list {
        padding: 0.5rem;
        background-color: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .disable {
            background-image: linear-gradient(90deg, #b3b3b3 0%, #d6d6d6 100%) !important;
        }
        &-item {
            display: block;
            background-image: linear-gradient(90deg, #f2bd64 0%, #ffcb76 100%);
            border-radius: 0.25rem;
            height: 1.875rem;
            display: flex;
            padding: 0 0.5rem;
            color: #fff;
            .left {
                display: flex;
                justify-content: center;
                flex-direction: column;
                flex: 1;
                &-name {
                    font-size: 0.5rem;
                }
                &-number {
                    margin-top: 0.1875rem;
                    font-size: 0.375rem;
                }
            }
            .right {
                font-size: 0.4375rem;
                line-height: 1.875rem;
            }
            &:nth-of-type(even) {
                background-image: linear-gradient(90deg, #eb7d7d 0%, #ff9d9d 100%);
            }
        }
        &-item + &-item {
            margin-top: 0.375rem;
        }
    }
    &-title {
        height: 0.9375rem;
        font-size: 0.375rem;
        color: #666;
        padding: 0.375rem 0.5rem 0;
    }
}
</style>
