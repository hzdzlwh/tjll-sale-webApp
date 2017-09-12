<template>
    <section class="room-info">
        <div class="room-section">
            <div class="room-section-title" @click="chooseRoom('roomDetails_room')">
                <p class="info">房号</p>
                <p class="number">8801</p>
                <p class="icon">已入住</p>
            </div>
            <div class="room-section-main" v-for="item in roomDetail.list">
                <div class="people-item">
                    <div class="info">
                        入住人
                    </div>
                    <div class="main">
                        秋丽 445************624
                    </div>
                </div>
                <div class="people-item">
                    <div class="info">
                        入住人
                    </div>
                    <div class="main">
                        秋丽 445************624
                    </div>
                </div>
            </div>
        </div>
        <div class="room-section">
            <div class="room-section-title" @click="chooseRoom('roomDetails_room')">
                <p class="info">房号</p>
                <p class="number">自助选房</p>
                <p class="icon icon-choose"></p>
            </div>
            <div class="room-section-main">
                <div class="people-item">
                    <div class="info info-delete">
                        入住人
                    </div>
                    <div class="main">
                        秋丽 445************624
                    </div>
                </div>
                <div class="people-item">
                    <div class="info info-add" @click="handleTraveller('add')">
                        添加入住人
                    </div>
                </div>
            </div>
        </div>
        <div class="room-section">
            <div class="room-section-title" @click="chooseRoom('roomDetails_room')">
                <p class="info">房号</p>
                <p class="number">8801</p>
                <p class="icon icon-cancel">已入住</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    title() {
        return '房间详情';
    },
    data() {
        return {
        };
    },
    methods: {
        chooseRoom(name) {
            this.$router.push({ name });
        },
        handleTraveller(condition) {
            if (condition === 'add') {
                this.jumpRouter('roomDetails_addTraveller');
            }
        },
        jumpRouter(name) {
            this.$router.push({ name });
        }
    },
    computed: {
        ...mapState([
            'roomDetail'
        ])
    }
};
</script>

<style lang="scss" scoped>
.room-info{
    .room-section {
        background: #fff;
        font-size: 0.4375rem;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 0.4063rem;
        &-title {
            display: flex;
            padding: 0 0.5rem;
            height: 1.1875rem;
            line-height: 1.1875rem;
            border-bottom: 1px solid #e6e6e6;
            .info {
                width: 2.5rem;
                color: #999;
            }
            .number {
                flex: 1;
                color: #333;
            }
            .icon {
                padding-right: 0.0938rem;
                width: 1.4688rem;
                text-align: right;
                background-image: url(~assets/images/tips@1x.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: 1.4688rem 0.625rem;
                color: #fff;
                font-size: 0.3438rem;
                &.icon-cancel {
                    background-image: url(~assets/images/tips-gray@1x.png);
                }
                &.icon-choose {
                    background-image: url(~assets/images/left-icon@1x.png);
                    background-size: 0.25rem 0.4375rem;
                    background-position: center left;
                    transform: rotateZ(180deg);
                }
            }
        }
        &-main {
            .people-item {
                padding: 0 0.5rem;
                display: flex;
                height: 1.1875rem;
                line-height: 1.1875rem;
                .info {
                    width: 2.5rem;
                    color: #999;
                }
                .info-delete {
                    background-image: url(~assets/images/delete-icon@1x.png);
                    background-repeat: no-repeat;
                    background-position: center left;
                    background-size: 0.5rem 0.5rem;
                    text-indent: 0.625rem;
                }
                .info-add {
                    flex: 1;
                    background-image: url(~assets/images/add-icon@1x.png);
                    background-repeat: no-repeat;
                    background-position: center left;
                    background-size: 0.5rem 0.5rem;
                    text-indent: 0.625rem;
                }
                .main {
                    flex: 1;
                }
            }
            .people-item + .people-item {
                border-top: 1px solid #e6e6e6;
            }
            .button {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                width: 0.7813rem;
                text-align: right;
            }
        }
    }
}
</style>
