<template>
    <ul class="order-list">
        <li class="list-item" v-for="order in orderList">
            <div class="list-item-head">
                <p class="date">{{ order.insuranceStart | dateFormat('YYYY-MM-DD') }} - {{ order.insuranceEnd | dateFormat('YYYY-MM-DD') }}</p>
                <p class="status">{{ order.orderState }}</p>
            </div>
            <div class="list-item-section" v-for="item in order.items">
                <img :src="item.imgUrl" height="60" width="60" alt="img" class="item-img">
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
                <span>共计{{ order.insuranceCount }}件商品</span>
                合计： ￥{{ order.amount }}
            </div>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { dateFormat } from '@/util/filters';
// import moment from 'moment';


export default {
    computed: {
        ...mapState([
            'orderList'
        ])
    },
    methods: {
        ...mapActions({
            getOrderList: 'getOrderList'
        })
    },
    created() {
        this.getOrderList({ campId: '54797361', phone: '17764526709', uuid: '876cb07810ac46f1b835072fd36941b3' }).then(() => {
            console.log(this.orderList);
        });
    },
    filters: {
        dateFormat
    }
};
</script>

<style lang="scss">
.order-list {
    .list-item {
        background: #fff;
        .list-item-head {
            display: flex;
            justify-content: space-between;
            height: 35px;
            line-height: 35px;
        }
        .list-item-section {
            display: flex;
            .item-info {
                flex: 1;
            }
            .item-count {
                text-align: right;
            }
        }
        .list-item-foot {
            text-align: right;
        }
    }
}
</style>
