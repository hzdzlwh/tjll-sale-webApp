<template>
    <div class="room">
        <ul class="room-list">
            <li class="room-list-item">8801<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon"></li>
            <li class="room-list-item">8801</li>
            <li class="room-list-item">8801</li>
        </ul>
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
                padding: 0 0.5rem;
                height: 1.1875rem;
                line-height: 1.1875rem;
                font-size: 0.4375rem;
                background: #fff;
                .choose-icon {
                    position: absolute;
                    right: 0.5rem;
                    top: 50%;
                    transform: translate3d(0, -50%, 0);
                    width: 0.5313rem;
                    height: 0.375rem;
                }
            }
            .room-list-item + .room-list-item {
                border-top: 1px solid #e6e6e6;
            }
        }
    }
</style>
