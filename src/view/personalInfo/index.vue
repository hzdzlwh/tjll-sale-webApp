<template>
    <div class="personalInfo">
        <div class="entry">
            <router-link :to="{ name: '', params: {} }" class="entry-item">
                <p class="item-label">姓名</p>
                <p class="item-name">王广允</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: '', params: {} }" class="entry-item">
                <p class="item-label">手机号</p>
                <p class="item-name">{{ '17764526709' | coverFormat }}</p>
            </router-link>
            <router-link :to="{ name: '', params: {} }" class="entry-item">
                <p class="item-label">身份证</p>
                <p class="item-name">{{ '330182199412120015' | coverFormat }}</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: '', params: {} }" class="entry-item">
                <p class="item-label">更多信息</p>
                <p class="item-name"></p>
                <i class="item-next"></i>
            </router-link>
        </div>
        <div class="change-password">
            <router-link class="change-password-button" :to="{ name: '', params: {} }">
                修改密码
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.personalInfo {
    padding: 0.41rem 0 1.56rem;
    height: 100%;
    .change-password {
        padding: 0 36px;
        font-size: 28px;
        color: #999;
        &-button {
            display: block;
            background: #ffffff;
            border: 1px solid #999999;
            border-radius: 8px;
            width: 100%;
            height: 76px;
            text-align: center;
            line-height: 76px;
        }
    }
}
</style>

