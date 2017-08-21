<template>
    <section class="room-section">
        <div class="room-section-title" @click="choseRoom('roomDetails_room')">
            <p class="info">房号</p>
            <p class="number">8801</p>
            <p class="button">></p>
        </div>
        <div class="room-section-main">
            <div class="info">
                <span>入住人</span>
            </div>
            <div class="people">
                <div class="people-info">
                    ○ 秋丽 445************624
                </div>
                <div class="people-info">
                    ○ 吴浩楠 445************624
                </div>
            </div>
            <div class="button">
                <span class="button-icon">+</span>
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
        &-title {
            display: flex;
            height: 30px;
            line-height: 30px;
            border-bottom: 1px solid rgba(204, 204, 204, 1);
            .info {
                width: 80px;
            }
            .number {
                flex: 1;
            }
            .button {
                width: 50px;
                text-align: right;
            }
        }
        &-main {
            display: flex;
            .info {
                display: flex;
                align-items: center;
                width: 80px;
            }
            .people {
                display: flex;
                flex-direction: column;
                flex: 1;
                .people-info {
                    height: 30px;
                    line-height: 30px;
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
