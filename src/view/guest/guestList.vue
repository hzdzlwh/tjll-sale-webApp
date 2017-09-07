<template>
    <div class="guest-list">
        <div class="guestList" v-if="consumerList.length !== 0">
            <div class="guestItem" @click="jumpRoute('guestUpdate', { guestId: item.id })" v-for="item in consumerList">
                <div class="guestItem-name">{{ item.name }}</div>
                <div class="guestItem-phOrca">
                    <div><span class="guestItem-label">手机号</span><span>{{ item.phone }}</span></div>
                    <div class="right-travel">></div>
                </div>
                <div class="guestItem-phOrca">
                    <div><span class="guestItem-label">{{ item.idCardType | idCardType }}</span><span>{{ item.idCardNum }}</span></div>
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
        jumpRoute(name, params) {
            this.$router.push({ name, params });
        }
    }
};
</script>

<style lang='scss' scoped>
.right-travel{
    transform: scaleY(2) scaleX(1);
}
.guest-list {

}
.guestList{
    padding-bottom: 2.5rem;
    .guestItem{
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
        .guestItem-name{
            font-size:0.4375rem;
            color:#333;
            line-height:0.4375rem;
        }
        .guestItem-phOrca{
            display: flex;
            justify-content: space-between;
            .guestItem-label{
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
    padding: 0.5rem 0;
}
</style>
