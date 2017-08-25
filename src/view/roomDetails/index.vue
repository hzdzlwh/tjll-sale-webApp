<template>
    <div class="room">
        <header class="room-head" v-show="routeName !== 'roomDetails_addTraveller'">
            <order-box :showButton="false" :data="{}"></order-box>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import orderBox from '@/components/orderBox';

export default {
    title() {
        return '房间详情';
    },
    components: {
        orderBox
    },
    mounted() {
    },
    computed: {
        routeName() {
            return this.$route.name;
        }
    }
};
</script>

<style lang="scss" scoped>
    .room {
        padding: 0.4063rem 0 2.5938rem;
        .room-head {
            background-color: #fff;
            margin-bottom: 0.4063rem;
        }
    }
</style>
