<template>
    <footer class="footerbar">
        <router-link :to="{ name: 'overview_home', params: {} }" class="footerbar-item">
            <i class="footerbar-item-icon home"></i>
            <p class="footerbar-item-name">首页</p>
        </router-link>
        <router-link :to="{ name: 'overview_cart', params: {} }" class="footerbar-item">
            <i class="footerbar-item-icon cart"></i>
            <p class="footerbar-item-name">购物车</p>
        </router-link>
        <router-link :to="{ name: 'overview_center', params: {} }" class="footerbar-item">
            <i class="footerbar-item-icon center"></i>
            <p class="footerbar-item-name">个人中心</p>
        </router-link>
    </footer>
</template>

<script>
export default {
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
</style>
