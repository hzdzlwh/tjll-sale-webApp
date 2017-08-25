<template>
    <div class="room-wrap">
        <ul class="room-list">
            <li class="room-list-item">8801<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon"></li>
            <li class="room-list-item">8801</li>
            <li class="room-list-item">8801</li>
        </ul>
        <div class="room-confirm">
            <div class="room-confirm-link" :to="{ name: 'roomDetails', params: {} }">确定</div>
        </div>
    </div>
</template>

<script>
export default {
    title() {
        return '自助选房';
    }
};
</script>

<style lang="scss" scoped>
    .room-wrap {
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
        .room-confirm {
            position: fixed;
            left: 0;
            bottom: 0;
            padding: 0 0.5rem;
            width: 100%;
            height: 2.1875rem;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            &-link {
                width: 100%;
                height: 1.1875rem;
                background-color: #49a5f1;
                border-radius: 0.125rem;
                font-size: 0.4375rem;
                color: #fff;
                text-decoration: none;
                line-height: 1.1875rem;
                text-align: center;
            }
        }
    }
</style>
