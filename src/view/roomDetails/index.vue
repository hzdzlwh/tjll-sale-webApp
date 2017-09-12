<template>
    <div class="room">
        <header class="room-head" v-show="routeName !== 'roomDetails_addTraveller'">
            <order-box :showButton="false" :data="item"></order-box>
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
    async asyncData({ store, route }) {
        const data = await store.dispatch('getOrderDetail', route.params.orderId);
        console.log(data);
        return store.dispatch('getRoomDetail', { orderId: route.params.orderId, saveId: route.params.saveId });
    },
    components: {
        orderBox
    },
    mounted() {
    },
    computed: {
        ...mapState([
            'orderDetails'
        ]),
        routeName() {
            return this.$route.name;
        },
        item() {
            const saveId = parseInt(this.$route.params.saveId);
            return this.orderDetails.items.filter((item) => item.saveId === saveId)[0];
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
