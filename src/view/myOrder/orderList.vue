<template>
    <ul class="order-list">
        <li class="list-item">
            <div class="list-item-head">
                <p class="date">2017-08-21 - 2017-08-21</p>
                <p class="status">已失效</p>
            </div>
            <div class="list-item-section">
                <img src="~assets/images/Mask@1x.png" alt="img" class="item-img">
                <div class="item-info">
                    <p class="item-info-name">集装箱</p>
                    <p class="item-info-date">2017-08-23 - 2017-08-23</p>
                </div>
                <div class="item-count">
                    <p>￥0.01</p>
                    <p>x1</p>
                </div>
            </div>
            <div class="list-item-foot">
                <span>共计1件商品</span>
                合计： ￥0.01
            </div>
        </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            getOrderList: 'getOrderList'
        })
    },
    created() {
        this.getOrderList({ campId: '54797361', phone: '17764526709', uuid: '' });
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
