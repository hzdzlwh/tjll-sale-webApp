<template>
    <div class="room">
        <header class="room-head">
            <order-box :showButton="false"></order-box>
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

<style lang="scss" scoped>
    .room {
        padding: 0.481rem 0 1.407rem;
        .room-head {
            margin-bottom: 0.481rem;
            background-color: #fff;
        }
    }
</style>
