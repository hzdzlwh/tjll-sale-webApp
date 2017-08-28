<template>
    <div class="addTraveller">
        <div class="traveller-form">
            <div class="traveller-form-item">
                <label class="form-label form-label-required" for="name">姓名</label>
                <input class="form-input" type="text" placeholder="请确保证与证件姓名一致">
            </div>
            <div class="traveller-form-item">
                <label class="form-label" for="telephone">手机号</label>
                <input class="form-input" v-model="tel" type="number" placeholder="请输入正确的手机号">
            </div>
            <div class="traveller-form-item">
                <label class="form-label form-label-required" for="certificate">证件类型</label>
                <div class="form-input">身份证</div>
            </div>
            <div class="traveller-form-item">
                <label class="form-label form-label-required" for="certificate">证件号</label>
                <input class="form-input" v-model="id" type="number" placeholder="请输入证件号">
            </div>
        </div>
        <div class="traveller-control">
            <div class="traveller-control-checkbox active">
                <div class="icon"></div>
                保存为常客
            </div>
        </div>
        <p class="traveller-title">选择常客</p>
        <ul class="traveller-section">
            <li class="traveller-section-item active">
                <p class="name">秋丽</p>
                <p class="id">330111111111111111<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon"></p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    title() {
        return '入住人';
    },
    data() {
        return {
            tel: '',
            id: ''
        };
    },
    watch: {
        tel(value) {
            if (value.length > 10) {
                this.tel = value.substring(0, 11);
            }
        },
        id(value) {
            if (value.length > 17) {
                this.id = value.substring(0, 18);
            }
        }
    }
};
</script>

<style lang="scss">
</style>
