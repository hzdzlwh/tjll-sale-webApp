<template>
    <div class="center">
        <router-link :to="{ name: 'personalInfo', params: {} }" class="personal">
            <div class="personal-name">萧远山</div>
            <div class="personal-phone">{{ phone }}</div>
            <i class="next-icon"></i>
        </router-link>
        <div class="entry">
            <router-link :to="{ name: '', params: {} }" class="entry-item">
                <i class="item-icon item-icon-vip"></i>
                <p class="item-name">会员中心</p>
                <i class="item-next"></i>
            </router-link>
        </div>
        <ul class="table" v-if="personalCenter.isVip">
            <li
             v-for="item in personalCenter.vipUser.accountList"
             class="table-item"
             :class="[`status${item.type}`]">
                <i class="item-icon"></i>
                <ul class="item-info">
                    <li class="item-info-key">{{ item.accountName }}</li>
                    <li class="item-info-value">{{ item.balance }}</li>
                </ul>
            </li>
        </ul>
        <div class="entry">
            <router-link :to="{ name: 'myOrder', params: {} }" class="entry-item">
                <i class="item-icon item-icon-order"></i>
                <p class="item-name">我的订单</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: 'guestList', params: {} }" class="entry-item">
                <i class="item-icon item-icon-people"></i>
                <p class="item-name">常用旅客</p>
                <i class="item-next"></i>
            </router-link>
            <a href="tel:17777777777" class="entry-item">
                <i class="item-icon item-icon-phone"></i>
                <p class="item-name">联系我们</p>
                <i class="item-phone">17777777777</i>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    title() {
        return '个人中心';
    },
    asyncData({ store, route }) {
        return store.dispatch('getMember', route.params.orderId);
    },
    computed: {
        ...mapState([
            'phone',
            'personalCenter'
        ])
    }
};
</script>

<style lang="scss" scoped>
.center {
    padding-bottom: 3.125rem;
    .personal {
        position: relative;
        padding: 0.5rem;
        background-image:linear-gradient(-180deg, #298dea 4%, #4bb0ff 100%);
        color: #fff;
        display: block;
        &-name {
            font-size: 0.5625rem;
            margin-bottom: 0.25rem;
        }
        &-phone {
            font-size: 0.375rem;
        }
        .next-icon {
            top: 50%;
            right: 0.5rem;
            width: 0.25rem;
            height: 0.44rem;
            position: absolute;
            background-image: url(~assets/images/next-icon.png);
            transform: translateY(-50%);
            background-size: 0.25rem 0.44rem;
        }
    }
}
</style>
