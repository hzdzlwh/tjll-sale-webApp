<template>
    <div class="room">
        <ul class="room-list">
            <li class="room-list-item">8801<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon"></li>
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
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            &-item {
                position: relative;
                padding: 0 0.593rem;
                height: 1.407rem;
                line-height: 1.407rem;
                font-size: 0.519rem;
                background: #fff;
                .choose-icon {
                    position: absolute;
                    right: 0.593rem;
                    top: 50%;
                    transform: translate3d(0, -50%, 0);
                    width: 0.63rem;
                    height: 0.444rem;
                }
            }
            .room-list-item + .room-list-item {
                border-top: 1px solid #e6e6e6;
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
