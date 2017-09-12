<template>
    <footer class="footerbar">
        <router-link :to="{ name: 'overview_home', params: {} }" class="footerbar-item">
            <i class="footerbar-item-icon home"></i>
            <p class="footerbar-item-name">首页</p>
        </router-link>
        <router-link :to="{ name: 'overview_cart', params: {} }" class="footerbar-item">
            <i class="footerbar-item-icon cart"></i>
            <p class="footerbar-item-name">购物车</p>
            <span class="badge" v-show="shoppingCartCount > 0">{{ shoppingCartCount }}</span> 
        </router-link>
        <router-link :to="{ name: 'overview_center', params: {} }" class="footerbar-item">
            <i class="footerbar-item-icon center"></i>
            <p class="footerbar-item-name">个人中心</p>
        </router-link>
    </footer>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    created() {
        this.getCartCount();
    },
    methods: {
        ...mapActions([
            'getCartCount'
        ])
    },
    computed: {
        ...mapState([
            'shoppingCartCount'
        ])
    }
};
</script>

<style lang="scss">
    .footerbar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        background-color: #fff;
        border-top: 1px solid #e6e6e6;
        &-item {
            flex: 1;
            text-align: center;
            height: 1.56rem;
            font-size: 0.31rem;
            // color: #4ea6ee;
            color: #999;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            &-icon {
                width: 0.66rem;
                height: 0.66rem;
                background-size: cover;
                background-repeat: no-repeat;
                margin-bottom: 0.13rem;
                &.home {
                    background-image: url(~assets/images/home.png);
                }
                &.cart {
                    background-image: url(~assets/images/cart.png);
                }
                &.center {
                    background-image: url(~assets/images/center.png);
                }
            }
        }
        &-item + &-item {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: -0.31rem;
                height: 0.63rem;
                width: 1px;
                background-color: #e6e6e6;
            }
        }
    }
.badge {
    background-color: #f44336;
    border-radius: 100%;
    position: absolute;
    color: #fff;
    width: 26px;
    height: 26px;
    font-size: 18px;
    text-align: center;
    line-height: 26px;
    left: 50%;
    margin-left: 8px;
    top: 12px;
}
</style>
