<template>
    <div class="my-order">
        <nav class="topbar">
            <ul class="nav-list">
                <li @click="handleState('all')" class="nav-list-item" :class="{ active: status === 'all'  }">全部</li>
                <li @click="handleState(-1)" class="nav-list-item" :class="{ active: status == -1  }">等待付款</li>
                <li @click="handleState(2)" class="nav-list-item" :class="{ active: status == 2  }">等待出行</li>
                <li @click="handleState(3)" class="nav-list-item" :class="{ active: status == 3  }">出行中</li>
                <li @click="handleState(5)" class="nav-list-item" :class="{ active: status == 5  }">旅途结束</li>
                <li @click="handleState(1)" class="nav-list-item" :class="{ active: status == 1  }">已取消</li>
            </ul>
            <span class="line"></span>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    title() {
        return '我的订单';
    },
    data() {
        return {
        };
    },
    methods: {
        handleState(orderStatus) {
            this.$router.push({ name: 'myOrder_list', params: { orderStatus }, query: { render: 'overview_center' } });
        }
    },
    computed: {
        status() {
            return this.$route.params.orderStatus;
        }
    }
};
</script>

<style lang="scss">
.my-order {
    padding-top: 1.0625rem;
    .topbar {
        position: fixed;
        left: 0;
        top: 1.25rem;
        width: 100%;
        background-color: #fff;
        // overflow: hidden;
        .line {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 100%;
            background-color: #e6e6e6;
        }
        .nav-list {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
            &-item {
                position: relative;
                display: inline-block;
                padding: 0 0.375rem;
                text-align: center;
                height: 1.0625rem;
                transition: border .2s ease-in;
                font-size: 0.375rem;
                line-height: 1.0625rem;
                z-index: 1;
            }
            .active {
                color: #098AE8;
                border-bottom: 1px solid #098AE8;
            }
        }
    }
}

</style>
