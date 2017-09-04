<template lang="html">
    <div class="nextLevel">
        <div class="nextLevel-header">
            <i class="nextLevel-header-icon"></i>
            <div class="nextLevel-header-containt">
                <p class="next">下一等级：{{ vipCenterData.nextVipLevelName }}</p>
                <p class="tip">满足以下条件中的一个，即可自动审计</p>
            </div>
        </div>
        <div class="nextLevel-body">
            <div class="nextLevel-body-title">累计消费金额满￥{{ nextVipLevelInfo.thresholdFee }} (还差￥{{ nextVipLevelInfo.upgradeNeedFee }})</div>
            <div class="nextLevel-body-containt">
                <p class="title">以下类型的消费可参与累计：</p>
                <p class="text">1、住宿：正常入住、钟点房</p>
                <p class="text">2、餐饮：帅翔餐厅</p>
                <p class="text">3、娱乐：卡丁车、滑翔伞</p>
                <p class="text">4、商超</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    title() {
        return '升级条件';
    },
    asyncData({ store, route }) {
        return store.dispatch('getMember', route.params.orderId);
    },
    created() {
        this.getVipCenterData(this.personalCenter.vipUser.vipId).then(() => {
            this.getNextVipLevelInfo({
                vipId: this.personalCenter.vipUser.vipId,
                vipLevelId: this.vipCenterData.nextVipLevelId
            });
        });
    },
    computed: {
        ...mapState([
            'personalCenter',
            'vipCenterData',
            'nextVipLevelInfo'
        ])
    },
    methods: {
        ...mapActions([
            'getVipCenterData',
            'getNextVipLevelInfo'
        ])
    }
};
</script>

<style lang="scss" scoped>
.nextLevel {
    padding-bottom: 1.5625rem;
    &-header {
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        height: 2.25rem;
        background-image: linear-gradient(-180deg, #298dea 4%, #4bb0ff 100%);
        &-icon {
            width: 0.7344rem;
            height: 0.6875rem;
            background-image: url(~assets/images/nextLevel.png);
            background-size: cover;
        }
        &-containt {
            margin-left: 0.25rem;
            color: #fff;
            p.next {
                font-size: 0.4375rem;
            }
            p.tip {
                margin-top: 0.25rem;
                font-size: 0.375rem;
            }
        }
    }
    &-body {
        margin-top: 0.4063rem;
        border-top: 1px solid #e6e6e6;
        background-color: #fff;
        border-bottom: 1px solid #e6e6e6;
        &-title {
            height: 1.1875rem;
            font-size: 0.4375rem;
            line-height: 1.1875rem;
            color: #333;
            padding: 0 0.5rem;
            border-bottom: 1px solid #e6e6e6;
        }
        &-containt {
            padding: 0.5rem;
            font-size: 0.375rem;
            color: #999;
            line-height: 1.5;
            .title {
                margin-bottom: 0.375rem;
            }
        }
    }
}
</style>
