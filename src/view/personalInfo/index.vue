<template>
    <div class="personalInfo">
        <div class="entry">
            <router-link :to="{ name: 'fixInfo', params: { key: 'name' } }" class="entry-item">
                <p class="item-label">姓名</p>
                <p class="item-name">{{ user.name || '未填写' }}</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: 'fixInfo', params: { key: 'phone' } }" class="entry-item">
                <p class="item-label">手机号</p>
                <p class="item-name">{{ user.phone || '未填写' | coverFormat }}</p>
            </router-link>
            <router-link :to="{ name: 'fixInfo', params: { key: 'idCard' } }" class="entry-item">
                <p class="item-label">身份证</p>
                <p class="item-name">{{ user.phone || '未填写' | coverFormat }}</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: 'fixInfo', params: { key: 'more' } }" class="entry-item">
                <p class="item-label">更多信息</p>
                <p class="item-name"></p>
                <i class="item-next"></i>
            </router-link>
        </div>
         <common-button class="fixInfo-button" containt="修改密码"></common-button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    title() {
        return '个人资料';
    },
    asyncData({ store }) {
        return store.dispatch('getUser');
    },
    computed: {
        ...mapState([
            'user'
        ])
    }
};
</script>

<style lang="scss" scoped>
.personalInfo {
    padding: 0.41rem 0 1.56rem;
    height: 100%;
    .change-password {
        padding: 0 0.56rem;
        font-size: 0.44rem;
        color: #999;
        &-button {
            display: block;
            background: #ffffff;
            border: 1px solid #999999;
            border-radius: 0.13rem;
            width: 100%;
            height: 1.19rem;
            text-align: center;
            line-height: 1.19rem;
        }
    }
}
</style>

