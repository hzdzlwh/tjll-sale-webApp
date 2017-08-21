<template>
    <div class="wrap">
        <div class="list-item" :class="{ 'border-top': topBorder, 'border-bottom': bottomBorder }">
            <img class="list-item-img" src="~assets/images/Mask@1x.png" alt="bg">
            <div class="list-item-info">
                <div class="info-top">
                    <p class="info-top-title">西湖国宾馆</p>
                    <div class="info-top-price">
                        <p class="price-now">￥100.00</p>
                        <p class="price-original">￥150.00</p>
                    </div>
                </div>
                <div class="info-bottom">
                    <p class="info-bottom-date">2017-08-03~2017-08-04</p>
                    <p class="info-bottom-count">1晚 2间</p>
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
        }
    }
};
</script>

<style scoped lang="scss">
.wrap{
    .list-item {
        display: flex;
        padding: 0.593rem 0.593rem;
        background: #fff;
        border-bottom: 1px solid #e6e6e6;
        &.border-top {
            border-top: 1px solid #e6e6e6;
        }
        &.border-bottom {
            border-bottom: 1px solid #e6e6e6;
        }
        .list-item-img {
            width: 1.963rem;
            height: 1.963rem;
            border-radius: 0.148rem;
        }
        .list-item-info {
            padding-left: 0.296rem;
            flex: 1;
            .info-top {
                display: flex;
                justify-content: space-between;
                .info-top-title {
                    font-size: 0.519rem;
                    color: #333;
                }
                .info-top-price {
                    font-size: 0.519rem;
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
                    font-size: 0.407rem;
                    color: #666;
                }
                &-count {
                    margin-top: 0.148rem;
                    font-size: 0.407rem;
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
        padding: 0.296rem 0.593rem;
        .link-button {
            padding: 0.148rem 0.37rem;
            text-align: center;
            border: 0.019rem solid #999;
            border-radius: 0.074rem;
            color: #999;
            text-decoration: none;
            font-size: 0.444rem;
        }
    }
}
</style>
