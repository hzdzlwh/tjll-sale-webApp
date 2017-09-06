<template lang="html">
  <div class="card">
    <div class="card-title">请选择一个会员等级或会员卡作为默认会员方案</div>
    <ul class="card-list">
        <li class="card-list-item" @click="setVip(item.vipSchemeId)" v-for="item in GvipSchemeList">
            <p class="text">{{ item.vipSchemeName }}</p>
            <i class="icon" v-show="item.default"></i>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    title() {
        return '默认会员方案';
    },
    asyncData({ store, route }) {
        return store.dispatch('getMember', route.params.orderId);
    },
    created() {
        this.getVipCenterData(this.vipId).then(() => {
            this.getVipSchemeList(this.vipId);
        });
    },
    methods: {
        ...mapActions([
            'getVipSchemeList',
            'getVipCenterData',
            'setVipScheme'
        ]),
        setVip(vipSchemeId) {
            this.setVipScheme({ vipSchemeId, vipId: this.vipId }).then(() => {
                this.getVipCenterData(this.vipId);
            });
        }
    },
    computed: {
        ...mapState([
            'personalCenter'
        ]),
        ...mapGetters([
            'GvipSchemeList'
        ]),
        vipId() {
            return this.personalCenter.vipUser.vipId;
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    padding-bottom: 1.5625rem;
    &-title {
        height: 0.9375rem;
        font-size: 0.375rem;
        color: #666;
        padding: 0.375rem 0.5rem 0;
    }
    &-list {
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
        color: #333;
        font-size: 0.4375rem;
        line-height: 1.1875rem;
        &-item {
            padding: 0 0.5rem;
            height: 1.1875rem;
            display: flex;
            align-items: center;
            .text {
                flex: 1;
            }
            .icon {
                background-image: url(~assets/images/choose-icon@1x.png);
                width: 0.5313rem;
                background-size: cover;
                background-repeat: no-repeat;
                height: 0.375rem;
            }
        }
        &-item + &-item {
            border-top: 1px solid #e6e6e6;
        }
    }
}
</style>
