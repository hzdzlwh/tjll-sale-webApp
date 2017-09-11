<template>
    <ul class="order-list">
        <li class="list-item" @click="openDetail(order.orderId)" v-for="order in orderList">
            <div class="list-item-head">
                <p class="date">
                    {{ order.date | dateFormat('YYYY-MM-DD') }}
                </p>
                <p class="status">{{ order.orderState | orderState }}</p>
            </div>
            <div class="list-item-section" v-for="item in order.items">
                <img :src="item.imgUrl" alt="img" class="item-img">
                <div class="item-info">
                    <p class="item-info-name">{{ item.name }}</p>
                    <p class="item-info-date">{{ item.startDate | dateFormat('YYYY-MM-DD') }} - {{ item.startDate | dateFormat('YYYY-MM-DD') }}</p>
                </div>
                <div class="item-count">
                    <p>￥{{ item.price }}</p>
                    <p>x{{ item.num }}</p>
                </div>
            </div>
            <div class="list-item-section" v-for="item in order.items">
                <img :src="item.imgUrl" alt="img" class="item-img">
                <div class="item-info">
                    <p class="item-info-name">{{ item.name }}</p>
                    <p class="item-info-date">{{ item.startDate | dateFormat('YYYY-MM-DD') }} - {{ item.startDate | dateFormat('YYYY-MM-DD') }}</p>
                </div>
                <div class="item-count">
                    <p>￥{{ item.price }}</p>
                    <p>x{{ item.num }}</p>
                </div>
            </div>
            <div class="list-item-foot">
                <span>共计 {{ order.goodsNum }} 件商品</span>
                合计： ￥{{ order.amount }}
            </div>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    asyncData({ store, route }) {
        return store.dispatch('getOrderList', route.params.orderStatus);
    },
    computed: {
        ...mapState([
            'orderList',
            'uuid',
            'phone',
            'campId'
        ])
    },
    methods: {
        ...mapActions({
            getOrderList: 'getOrderList'
        }),
        openDetail(orderId) {
            this.jumpRouter('orderDetails', { orderId });
        },
        jumpRouter(name, params) {
            this.$router.push({ name, params });
        }
    }
};
</script>

<style lang="scss">
.order-list {
    .list-item {
        background: #fff;
        margin-top: 26px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .list-item-head {
            padding: 0 32px;
            display: flex;
            justify-content: space-between;
            height: 52px;
            line-height: 52px;
            font-size: 22px;
            color: #999;
        }
        .list-item-section {
            background: #f7f7f7;
            padding: 12px 32px;
            display: flex;
            .item-img {
                height: 100px;
                width: 100px;
            }
            .item-info {
                padding-left: 16px;
                flex: 1;
                font-size: 22px;
                line-height: 50px;
                &-name {
                    color: #333;
                }
                &-date {
                    color: #999;
                }
            }
            .item-count {
                font-size: 22px;
                text-align: right;
                line-height: 1.4;
            }
        }
        .list-item-section + .list-item-section {
            margin-top: 16px;
        }
        .list-item-foot {
            padding: 0 32px;
            text-align: right;
            font-size: 22px;
            height: 52px;
            line-height: 52px;
        }
    }
}
</style>
