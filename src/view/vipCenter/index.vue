<template>
    <div class="vipCenter">
        <router-link :to="{ name: 'nextLevel' }" class="vipCenter-header">
            <i v-if="personalCenter.isVip" class="vip-tip">
                <img src="~assets/images/v-icon.png" alt="v">
                <p>{{ vipCenterData.vipLevel }}</p>
            </i>
            <p class="vipCenter-header-text">下一等级：{{ vipCenterData.nextVipLevelName }}</p>
            <i class="item-next"></i>
        </router-link>
        <div class="vipCenter-title">我的权益</div>
        <div class="entry">
            <div v-for="item in vipCenterData.discountList" class="entry-item">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-text">{{ item.content }}</p>
            </div>
        </div>
        <div class="vipCenter-title">我的钱包</div>
        <div class="entry">
            <div  @click="jumpRoute(item.type)" v-for="item in vipCenterData.accountList" :to="{ name: 'myOrder', params: {} }" class="entry-item">
                <p class="item-name">{{ item.accountName }}</p>
                <p class="item-text">{{ item.balance }}</p>
                <i class="item-next"></i>
            </div>
        </div>
        <div class="vipCenter-title">设置</div>
        <div class="entry">
            <div class="entry-item">
                <p class="item-name">默认会员方案</p>
                <p class="item-text">至尊星耀</p>
                <i class="item-next"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    title() {
        return '个人中心';
    },
    asyncData({ store, route }) {
        return store.dispatch('getMember', route.params.orderId);
    },
    computed: {
        ...mapState([
            'personalCenter',
            'vipCenterData'
        ])
    },
    created() {
        this.getVipCenterData(this.personalCenter.vipUser.vipId);
    },
    methods: {
        ...mapActions([
            'getVipCenterData'
        ]),
        jumpRoute(type) {
            let name;
            switch (type) {
                case 0:
                    name = 'accountDetail';
                    break;
                case 1:
                    name = 'virDetail';
                    break;
                case 2:
                    name = 'vipCardList';
                    break;
                case 3:
                    name = 'accountDetail';
                    break;
                default:
                    break;
            }
            this.$router.push({ name });
        }
    }
};
</script>

<style lang="scss" scoped>
.vipCenter {
    padding-bottom: 1.875rem;
    .vipCenter-header {
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.25rem;
        background-image: linear-gradient(-180deg, #298dea 4%, #4bb0ff 100%);
        .vip-tip {
            display: inline-block;
            font-size: 0.375rem;
            color: #3392e9;
            background-color: #ffebb8;
            border-radius: 1.5625rem;
            display: flex;
            height: 0.4688rem;
            line-height: 0.4688rem;
            padding: 0 0.1875rem;
            align-items: center;
            img {
                height: 0.3594rem;
                width: 0.3594rem;
                vertical-align: top;
            }
            p {
                flex: 1;
                min-width: 0.8rem;
                text-align: center;
            }
        }
        .item-next {
            margin-left: 0.25rem;
            width: 0.25rem;
            height: 0.4375rem;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(~assets/images/next-icon.png);
        }
        &-text {
            color: #fff;
            font-size: 24px;
            flex: 1;
            text-align: right;
        }
    }
    &-title {
        height: 0.9375rem;
        font-size: 0.375rem;
        color: #666;
        padding: 0.375rem 0.5rem 0;
    }
    .entry {
        margin-bottom: 0;
    }
}
</style>
