<template>
    <div>
        <div class="gustList" v-if="consumerList.length !== 0">
            <div class="gustItem">
                <div class="gustItem-name">王广允</div>
                <div class="gustItem-phOrca">
                    <div><span class="gustItem-label">手机号</span><span>152*****182</span></div>
                    <div class="right-travel">></div>
                </div>
                <div class="gustItem-phOrca">
                    <div><span class="gustItem-label">身份证</span><span>4403***********111</span></div>
                </div>
            </div>
        </div>
        <h1 v-else>
            暂时没有常用旅客，请添加
        </h1>
        <div class="button-wrap" @click="jumpRoute('guestAdd')">
            <dd-button value="新增常用旅客" theme="info"></dd-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    title() {
        return '常用旅客';
    },
    asyncData({ store }) {
        return store.dispatch('getConsumerUser');
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState([
            'consumerList'
        ])
    },
    methods: {
        ...mapActions([
            'getConsumerUser'
        ]),
        jumpRoute(name) {
            this.$router.push({ name });
        }
    }
};
</script>

<style lang='scss' scoped>
.right-travel{
    transform: scaleY(2) scaleX(1);
}
.gustList{
    .gustItem{
        margin-top:0.390625rem;
        padding: 0.5rem 0.5rem 0.25rem;
        font-size:0.34375rem;
        color:#bbb;
        line-height:0.34375rem;
        background-color: #fff;
        cursor: pointer;
        div{
            margin-bottom: 0.25rem;
        }
        .gustItem-name{
            font-size:0.4375rem;
            color:#333;
            line-height:0.4375rem;
        }
        .gustItem-phOrca{
            display: flex;
            justify-content: space-between;
            .gustItem-label{
                display: inline-block;
                width: 1.40625rem;
            }

        }
    }
}
.button-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 32px 0;
}
</style>
