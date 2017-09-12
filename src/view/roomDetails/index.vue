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
import { mapState } from 'vuex';

export default {
    title() {
        return '房间详情';
    },
    asyncData({ store, route }) {
        return store.dispatch('getOrderDetail', route.params.orderId);
    },
    components: {
        orderBox
    },
    mounted() {
    },
    computed: {
        ...mapState([
            'getOrderDetail'
        ]),
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
