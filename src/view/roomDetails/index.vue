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
        padding: 0.4063rem 0 2.5938rem;
        .room-head {
            background-color: #fff;
        }
    }
</style>
