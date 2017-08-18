<template>
    <ul class="order-list">
        <li class="list-item">
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
        </li>
        <li class="list-item">
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
        </li>
        <li class="list-item">
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
        </li>
    </ul>
</template>

<script>
export default {
};
</script>

<style scoped lang="sass">
    .order-list
        border-top: 1px solid #ccc
        border-bottom: 1px solid #ccc

        .list-item
            display: flex
            padding: 10px 5px

            .list-item-img
                width: 50px
                height: 50px
                background: #000
                border-radius: 4px

            .list-item-info
                flex: 1

        .list-item + .list-item
            border-top: 1px solid #ccc


</style>
