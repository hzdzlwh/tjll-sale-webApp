<template>
    <div class="room">
        <ul class="room-list">
            <li class="room-list-item">8801</li>
            <li class="room-list-item">8801</li>
            <li class="room-list-item">8801</li>
            <li class="room-list-item">8801</li>
        </ul>
        <router-link class="confirm" :to="{ name: 'roomDetails_info' }">确定</router-link>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
    .room {
        .room-list {
            &-item {
                height: 30px;
                line-height: 30px;
                background: #fff;
                border-bottom: 1px solid rgba(228, 228, 228, 1);
            }
        }
        .confirm {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            text-decoration: none;
            background-color: rgba(22, 153, 222, 1);
        }
    }
</style>
