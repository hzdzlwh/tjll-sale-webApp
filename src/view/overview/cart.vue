<template>
    <div class="cart">
        <template v-if="shoppingCartCount > 0">
            <ul class="cart-list">
                <li class="cart-list-item" :key="index" v-for="(item, index) in cartList">
                    <div class="select" @click="selectProduct(item)" :class="{ active: active[index] }"></div>
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
            <div class="cart-box">
                <div class="cart-box-total">
                    <div class="all" @click="selectAll" :class="{ active: all }">全选</div>
                    <div class="total">
                        <div class="total-label">总计:</div>
                        <div class="total-price">￥{{ totalPrice }}</div>
                    </div>
                </div>
                <div class="cart-box-buy">购买</div>
            </div>
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
            select: []
        };
    },
    asyncData({ store }) {
        return store.dispatch('getCart');
    },
    computed: {
        ...mapState([
            'cartList',
            'shoppingCartCount'
        ]),
        active() { // active 维护数组
            const arr = [];
            this.cartList.forEach(item => {
                const res = this.select.findIndex(el => el.cartId === item.cartId);
                if (res !== -1) {
                    arr.push(true);
                } else {
                    arr.push(false);
                }
            });
            return arr;
        },
        all() { // 是否全部选中
            if (this.cartList.length === 0) return false;
            const res = this.select.length === this.cartList.length;
            return res;
        },
        totalPrice() {  // 总价
            let totalPrice = 0;
            this.select.forEach(el => {
                totalPrice += el.item.price * el.item.num;
            });
            totalPrice.toFixed(2);
            return totalPrice;
        }
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
                this.refreshSelect();
            });
        },
        decrease(cartId, num) {
            num --;
            this.setCartCount({ cartId, num }).then(() => {
                this.getCart();
                this.getCartCount();
                this.refreshSelect();
            });
        },
        selectProduct(item) { // 选择商品
            const res = this.select.findIndex((element) => element.cartId === item.cartId);
            console.log(res);
            if (res === -1) {
                this.select.push(item);
            } else {
                this.select.splice(res, 1);
            }
        },
        selectAll() { // 选中全部
            if (this.all) {
                this.select = [];
            } else {
                this.select = [].concat(this.cartList);
            }
        },
        refreshSelect() {
            this.select.forEach((item, index) => {
                const cartId = item.cartId;
                const res = this.cartList.find(el => el.cartId === cartId);
                this.select[index] = res;
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
        border-bottom: 0.02rem solid #e6e6e6;
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.31rem;
            height: 2.13rem;
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
                width: 1.56rem;
                height: 1.56rem;
            }
            .container {
                padding-left: 0.25rem;
                flex: 1;
                line-height: 0.78rem;
                &-title {
                    font-size: 0.44rem;
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
                        padding: 0 0.06rem;
                        margin-left: 0.38rem;
                        font-size: 0.34rem;
                        background-color: #f27979;
                        color: #fff;
                        border-radius: 0.03rem;
                        height: 0.56rem;
                        line-height: 0.56rem;
                    }
                }
                &-date {
                    font-size: 0.31rem;
                    color: #999;
                }
            }
            .control {
                height: 1.56rem;
                display: flex;
                flex-direction: column;
                margin-left: 0.09rem;
                width: 2.5rem;
                &-total {
                    height: 0.78rem;
                    line-height: 0.78rem;
                    display: flex;
                    justify-content: space-between;
                    &-label {
                        font-size: 0.38rem;
                        color: #999;
                    }
                    &-count {
                        font-size: 0.44rem;
                        color: #178ce6;
                    }
                }
                &-content {
                    font-size: 0.44rem;
                    color: #333;
                    height: 0.78rem;
                    line-height: 0.78rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: 2.5rem;
                    &-increase {
                        height: 0.5rem;
                        width: 0.5rem;
                        background-image: url(~assets/images/increase.png);
                        background-size: cover;
                    }
                    &-decrease {
                        height: 0.5rem;
                        width: 0.5rem;
                        background-image: url(~assets/images/decrease.png);
                        background-size: cover;
                    }
                    &-count {
                        width: 1.25rem;
                        text-align: center;
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
        height: 1.25rem;
        line-height: 1.25rem;
        &-total {
            padding-left: 0.5rem;
            flex: 1;
            display: flex;
            .all {
                margin-right: 16px;
                background-image: url(~assets/images/unchose.png);
                background-size: cover;
                width: 1.56rem;
                background-size: 0.5rem 0.5rem;
                background-repeat: no-repeat;
                background-position: left center;
                padding-left: 0.66rem;
                font-size: 0.44rem;
                color: #666;
                &.active {
                    background-image: url(~assets/images/chose.png);
                }
            }
            .total {
                margin-left: 0.88rem;
                flex: 1;
                display: flex;
                &-label {
                    font-size: 0.38rem;
                    color: #999;
                }
                &-price {
                    font-size: 0.5rem;
                    color: #178ce6;
                }
            }
        }
        &-buy {
            font-size: 0.5rem;
            color: #fff;
            background-color: #178ce6;
            width: 2.5rem;
            text-align: center;
        }
    }
}
</style>
