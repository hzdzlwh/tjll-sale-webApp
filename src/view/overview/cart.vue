<template>
    <div class="cart">
        <template v-if="shoppingCartCount > 0">
            <ul class="cart-list">
                <li class="cart-list-item" v-for="item in cartList">
                    <div class="select active"></div>
                    <img class="product" :src="item.item.imgUrl" alt="">
                    <div class="container">
                        <div class="container-title">
                            <p>{{ item.item.itemName }}</p>
                            <span class="container-title-icon" v-show="item.item.discount">{{ item.item.discount }}</span>
                        </div>
                        <div class="container-date">{{ item.item.startDate }}~<span v-if="item.item.type === 0">{{item.item.endDate}}</span></div>
                    </div>
                    <div class="control">
                        <div class="control-total">
                            <p class="control-total-label">
                                合计:
                            </p>
                            <p class="control-total-count">
                                ￥{{ item.item.price * item.item.num }}
                            </p>
                        </div>
                        <div class="control-content">
                            <div @click="decrease(item.cartId, item.item.num)" class="control-content-decrease"></div>
                            <div class="control-content-count">{{ item.item.num }}</div>
                            <div @click="increase(item.cartId, item.item.num)" class="control-content-increase"></div>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- <div class="cart-box">
                <div class="cart-box-total">
                    <div class="all active">全选</div>
                    <div class="total">
                        <div class="total-label">总计:</div>
                        <div class="total-price">￥99999</div>
                    </div>
                </div>
                <div class="cart-box-buy">购买</div>
            </div> -->
        </template>
        <h1 v-else>购物车是空的，请快去挑选喜爱的商品吧</h1>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    title() {
        return '购物车';
    },
    data() {
        return {
        };
    },
    asyncData({ store }) {
        return store.dispatch('getCart');
    },
    computed: {
        ...mapState([
            'cartList',
            'shoppingCartCount'
        ])
    },
    methods: {
        ...mapActions([
            'getCart',
            'setCartCount',
            'getCartCount'
        ]),
        increase(cartId, num) {
            num ++;
            this.setCartCount({ cartId, num }).then(() => {
                this.getCart();
                this.getCartCount();
            });
        },
        decrease(cartId, num) {
            num --;
            this.setCartCount({ cartId, num }).then(() => {
                this.getCart();
                this.getCartCount();
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.cart {
    padding-bottom: 1.25rem;
    height: 100%;
    position: relative;
    &-list {
        border-bottom: 1px solid #e6e6e6;
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.3125rem;
            height: 2.125rem;
            .select {
                width: 0.5rem;
                height: 0.5rem;
                margin-right: 0.25rem;
                background-image: url(~assets/images/unchose.png);
                background-size: cover;
                &.active {
                    background-image: url(~assets/images/chose.png);
                }
            }
            .product {
                width: 1.5625rem;
                height: 1.5625rem;
            }
            .container {
                padding-left: 0.25rem;
                flex: 1;
                line-height: 0.7813rem;
                &-title {
                    font-size: 0.4375rem;
                    color: #666;
                    display: flex;
                    align-items: center;
                    p {
                        white-space: nowrap;
                        width: 50%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &-icon {
                        padding: 0 0.0625rem;
                        margin-left: 0.375rem;
                        font-size: 0.3438rem;
                        background-color: #f27979;
                        color: #fff;
                        border-radius: 0.0313rem;
                        height: 0.5625rem;
                        line-height: 0.5625rem;
                    }
                }
                &-date {
                    font-size: 0.375rem;
                    color: #999;
                }
            }
            .control {
                height: 1.5625rem;
                display: flex;
                flex-direction: column;
                padding-left: 0.0938rem;
                &-total {
                    height: 0.7813rem;
                    line-height: 0.7813rem;
                    display: flex;
                    &-label {
                        font-size: 0.375rem;
                        color: #999;
                    }
                    &-count {
                        font-size: 0.4375rem;
                        color: #178ce6;
                    }
                }
                &-content {
                    font-size: 28px;
                    color: #333;
                    height: 50px;
                    line-height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &-increase {
                        height: 32px;
                        width: 32px;
                        background-image: url(~assets/images/increase.png);
                        background-size: cover;
                    }
                    &-decrease {
                        height: 32px;
                        width: 32px;
                        background-image: url(~assets/images/decrease.png);
                        background-size: cover;
                    }
                }
            }
        }
        &-item + &-item {
            border-top: 1px solid #e6e6e6;
        }
    }
    &-box {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        height: 80px;
        line-height: 80px;
        &-total {
            padding-left: 32px;
            flex: 1;
            display: flex;
            .all {
                margin-right: 0.25rem;
                background-image: url(~assets/images/unchose.png);
                background-size: cover;
                width: 100px;
                background-size: 32px 32px;
                background-repeat: no-repeat;
                background-position: left center;
                padding-left: 42px;
                font-size: 28px;
                color: #666;
                &.active {
                    background-image: url(~assets/images/chose.png);
                }
            }
            .total {
                margin-left: 56px;
                flex: 1;
                display: flex;
                &-label {
                    font-size: 24px;
                    color: #999;
                }
                &-price {
                    font-size: 32px;
                    color: #178ce6;
                }
            }
        }
        &-buy {
            font-size: 32px;
            color: #fff;
            background-color: #178ce6;
            width: 160px;
            text-align: center;
        }
    }
}
</style>
