<template lang="html">
    <div class="cardDetail">
        <div class="card-wrap">
            <div class="card">
                <ul class="left">
                    <li class="left-name">{{ cardDetail.name }}</li>
                    <li class="left-number">{{ cardDetail.cardNum }}</li>
                    <li class="left-date">办理日期： {{ cardDetail.creationTime }}</li>
                </ul>
                <p class="right">
                    ￥{{ cardDetail.balance }}
                </p>
            </div>
        </div>
        <div class="entry">
            <router-link :to="{ name: 'vipCardAccountDetail', params: {} }" class="entry-item">
                <p class="item-label">会员卡余额明细</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: 'vipCardDesc', params: {} }" class="entry-item">
                <p class="item-label">详细说明</p>
                <i class="item-next"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    title() {
        return '会员卡详情';
    },
    asyncData({ store, route }) {
        return Promise.all([
            store.dispatch('getVipCardDescription', route.params.vipCardId),
            store.dispatch('getMember', route.params.orderId)
        ]);
    },
    created() {
        this.getVipCardList({
            vipId: this.personalCenter.vipUser.vipId
        }).then(() => {
            this.getCardDetail(this.$route.params.vipCardId);
        });
    },
    methods: {
        ...mapActions([
            'getVipCardList'
        ]),
        ...mapMutations([
            'getCardDetail'
        ])
    },
    computed: {
        ...mapState([
            'personalCenter',
            'vipCardList',
            'vipCardDetail',
            'cardDetail'
        ])
    }
};
</script>

<style lang="scss" scoped>
.cardDetail {
    padding-bottom: 1.5625rem;
    .card-wrap {
        padding: 0.5rem;
        .card {
            background-image:linear-gradient(90deg, #f2bd64 0%, #ffcb76 100%);
            border-radius: 0.25rem;
            height: 3.2031rem;
            display: flex;
            padding: 0.375rem;
            color: #fff;
            .left {
                display: flex;
                flex-direction: column;
                flex: 1;
                &-name {
                    font-size: 0.5rem;
                }
                &-number {
                    margin-top: 0.1875rem;
                    font-size: 0.375rem;
                    flex: 1;
                }
                &-date {
                    font-size: 0.3438rem;
                }
            }
            .right {
                font-size: 0.4375rem;
            }
        }
    }
    .entry {
        &-description {
            padding: 0.5rem;
            border-top: 1px solid #e6e6e6;
            color: #999;
            line-height: 1.5;
            .title {
                margin-bottom: 0.375rem;
            }
        }
    }
}
</style>
