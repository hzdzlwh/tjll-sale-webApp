<template>
    <div class="my-order">
        <nav class="topbar">
            <ul class="nav-list">
                <li class="nav-list-item active">全部</li>
                <li class="nav-list-item">出行中</li>
                <li class="nav-list-item">等待付款</li>
                <li class="nav-list-item">等待出行</li>
                <li class="nav-list-item">旅途结束</li>
                <li class="nav-list-item">已取消</li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
    },
    computed: {
        // navActive() {
        // }
    }
};
</script>

<style lang="scss">
.my-order {
    padding-top: 46px;
    .topbar {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        .nav-list {
            width: 100%;
            height: 100%;
            font-size: 0;
            overflow-y: hidden;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
            &-item {
                position: relative;
                display: inline-block;
                padding: 12px 14px;
                font-size: 14px;
                border-bottom: 1px solid rgb(215, 215, 215);
                transition: border .2s ease-in;
                &.active {
                    border-bottom: 1px solid #178ce6;
                }
            }
        }
    }
}

</style>
