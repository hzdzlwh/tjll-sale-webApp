<template>
    <section>
        <div class="room-section">
            <div class="room-section-title" @click="choseRoom('roomDetails_room')">
                <p class="info">房号</p>
                <p class="number">8801</p>
                <p class="button"></p>
            </div>
            <div class="room-section-main">
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
    </section>
</template>

<script>
export default {
    methods: {
        choseRoom(name) {
            this.$router.push({ name });
        }
    }
};
</script>

<style lang="scss" scoped>
    .room-section {
        background: #fff;
        font-size: 0.519rem;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        &-title {
            display: flex;
            padding: 0 0.593rem;
            height: 1.407rem;
            line-height: 1.407rem;
            border-bottom: 1px solid #e6e6e6;
            .info {
                width: 2.963rem;
                color: #999;
            }
            .number {
                flex: 1;
                color: #333;
            }
            .button {
                width: 1.741rem;
                text-align: right;
                background-image: url(~assets/images/tips@1x.png);
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        &-main {
            padding: 0 0.593rem;
            .people-item {
                display: flex;
                height: 1.407rem;
                line-height: 1.407rem;
                .info {
                    width: 2.963rem;
                    color: #999;
                }
                .main {
                    flex: 1;
                }
            }
            .button {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                width: 50px;
                text-align: right;
            }
        }
    }
</style>
