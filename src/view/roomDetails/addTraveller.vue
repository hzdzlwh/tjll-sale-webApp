<template>
    <div class="addTraveller">
        <div class="traveller-form">
            <div class="traveller-form-item">
                <label class="form-label" for="name">姓名</label>
                <input class="form-input" type="text" placeholder="请确保证与证件姓名一致">
            </div>
            <div class="traveller-form-item">
                <label class="form-label" for="telephone">手机号</label>
                <input class="form-input" v-model="tel" type="telephone" placeholder="请输入正确的手机号">
            </div>
            <div class="traveller-form-item">
                <label class="form-label" for="certificate">证件号</label>
                <input class="form-input" type="number" placeholder="请输入证件号">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tel: ''
        };
    },
    watch: {
        tel(value) {
            this.tel = value.slice(0, 11);
        }
    }
};
</script>

<style lang="scss">
.addTraveller {
    .traveller-form {
        background: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .traveller-form-item {
            display: flex;
            padding: 0 32px;
            height: 76px;
            line-height: 76px;
            font-size: 28px;
            .form-label {
                width: 160px;
                color: #333;
            }
            .form-input {
                flex: 1;
            }
        }
        .traveller-form-item + .traveller-form-item {
            border-top: 1px solid #e6e6e6;
        }
    }
}
</style>
