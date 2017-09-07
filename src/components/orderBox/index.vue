<template>
    <div class="wrap" @click="emit">
        <div class="list-item" :class="{ 'border-top': topBorder, 'border-bottom': bottomBorder }">
            <img class="list-item-img" :src="data.imgUrl" alt="bg">
            <div class="list-item-info">
                <div class="info-top">
                    <p class="info-top-title">{{ data.name }}</p>
                    <div class="info-top-price">
                        <p class="price-now">￥{{ data.price }}</p>
                        <p class="price-original">￥150.00</p>
                    </div>
                </div>
                <div class="info-bottom">
                    <p class="info-bottom-date">{{ data.startDate }} ~ {{ data.endDate }}</p>
                    <p class="info-bottom-count">1晚 {{ data.num }}{{ data.unit }}</p>
                </div>
            </div>
        </div>
        <div class="list-button" v-if="showButton">
            <router-link class="link-button" :to="{ name: '', params: {} }">自助选房</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        topBorder: {
            type: Boolean, // 控制订单box上边框
            default: true
        },
        bottomBorder: {
            type: Boolean, // 控制订单box下边框
            default: true
        },
        showButton: {
            type: Boolean, // 控制按钮显示
            default: true
        },
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        emit() {
            this.$emit('click');
        }
    }
};
</script>

<style scoped lang="scss">
.wrap{
    .list-item {
        display: flex;
        padding: 0.5rem 0.5rem;
        background: #fff;
        border-bottom: 1px solid #e6e6e6;
        &.border-top {
            border-top: 1px solid #e6e6e6;
        }
        &.border-bottom {
            border-bottom: 1px solid #e6e6e6;
        }
        .list-item-img {
            width: 1.6563rem;
            height: 1.6563rem;
            border-radius: 0.125rem;
        }
        .list-item-info {
            padding-left: 0.25rem;
            flex: 1;
            .info-top {
                display: flex;
                justify-content: space-between;
                .info-top-title {
                    font-size: 0.4375rem;
                    color: #333;
                }
                .info-top-price {
                    font-size: 0.4375rem;
                    text-align: right;
                    .price-now {
                        color: #333;
                    }
                    .price-original {
                        color: #bbb;
                        text-decoration: line-through;
                    }
                }
            }
            .info-bottom {
                &-date {
                    font-size: 0.3438rem;
                    color: #666;
                }
                &-count {
                    margin-top: 0.125rem;
                    font-size: 0.3438rem;
                    color: #999;
                }
            }
        }
        .list-item-price {

        }
    }
    .list-button {
        display: flex;
        justify-content: flex-end;
        padding: 0.25rem 0.5rem;
        .link-button {
            padding: 0.125rem 0.3125rem;
            text-align: center;
            border: 1px solid #999;
            border-radius: 0.0625rem;
            color: #999;
            text-decoration: none;
            font-size: 0.375rem;
        }
    }
}
</style>
