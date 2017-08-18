<template>
    <div class="list-item" :class="{ 'border-top': topBorder, 'border-bottom': bottomBorder }">
        <div class="list-item-img"></div>
        <div class="list-item-info">
            <p class="info-title">西湖国宾馆</p>
            <p class="info-date">2017-08-03~2017-08-04</p>
            <p class="info-count">1晚2间</p>
        </div>
        <div class="list-item-price">
            <p class="price-now">￥100.00</p>
            <p class="price-original">￥150.00</p>
            <p class="chose-room">自助选房</p>
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
        }
    }
};
</script>

<style scoped lang="scss">
    .list-item {
        display: flex;
        padding: 10px 5px;
        background: #fff;
        &.border-top {
            border-top: 1px solid rgba(204, 204, 204, 1);
        }
        &.border-bottom {
            border-bottom: 1px solid rgba(204, 204, 204, 1);
        }
        .list-item-img {
            width: 50px;
            height: 50px;
            background: #000;
            border-radius: 4px;
        }
        .list-item-info {
            flex: 1;
        }
        .list-item-price {
            .price-original {
                text-decoration: line-through;
            }
        }
    }
</style>
