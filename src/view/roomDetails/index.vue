<template>
    <div class="room">
        <header class="room-head">
            <order-box :topBorder="false"></order-box>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import orderBox from '@/components/orderBox';

export default {
    components: {
        orderBox
    }
};
</script>

<style lang="scss">
    .room {
        padding-top: 10px;
        .room-head {
            margin-bottom: 10px;
        }
    }
</style>
