<template>
    <div class="personalInfo">
        <div class="entry">
            <dd-form-input
            readonly
            label="姓名"
            icon
            :value="user.name"
            placeholder="未填写"
            @click="jumpRoute('fixInfo', 'name')"
            >
            </dd-form-input>
            <dd-form-input
            readonly
            label="手机号"
            :value="user.phone"
            placeholder="未填写"
            >
            </dd-form-input>
            <dd-form-input
            readonly
            label="身份证"
            icon
            :value="user.idCardNum"
            placeholder="未填写"
            @click="jumpRoute('fixInfo', 'idCard')"
            >
            </dd-form-input>
            <dd-form-input
            readonly
            label="更多信息"
            icon
            :value="user.idCardNum"
            placeholder="未填写"
            @click="jumpRoute('fixInfo', 'more')"
            >
            </dd-form-input>
        </div>
         <dd-button class="fixInfo-button" value="修改密码"></dd-button>
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
    },
    methods: {
        jumpRoute(name, key) {
            this.$router.push({ name, params: { key } });
        }
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
