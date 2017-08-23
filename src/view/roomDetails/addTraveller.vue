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
                position: relative;
                width: 160px;
                color: #333;
                text-indent: 22px;
                &.form-label-required {
                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 22px;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-size: 11px 10px;
                        background-position: center left;
                        background-image: url(~assets/images/star@1x.png);
                    }
                }
            }
            .form-input {
                flex: 1;
            }
        }
        .traveller-form-item + .traveller-form-item {
            border-top: 1px solid #e6e6e6;
        }
    }
    .traveller-control {
        padding: 0 32px;
        height: 60px;
        line-height: 60px;
        .traveller-control-checkbox {
            display: flex;
            justify-content: flex-end;
            font-size: 24px;
            color: #666;
            &.active {
                .icon {
                    background-color: #49a5f1;
                    background-image: url(~assets/images/choose.png);
                    background-size: 28px 20px;
                    background-position: center;
                    background-repeat: no-repeat;
                    border: none;
                }
            }
            .icon {
                margin-top: 12px;
                margin-right: 12px;
                height: 36px;
                width: 36px;
                border: 1px solid #999;
                background-color: #fff;
                border-radius: 8px;
            }
        }
    }
    .traveller-title {
        padding: 0 32px;
        color: #666;
        font-size: 24px;
        height: 60px;
        line-height: 60px;
    }
    .traveller-section {
        background: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .traveller-section-item {
            position: relative;
            padding: 0 32px;
            display: flex;
            height: 76px;
            line-height: 76px;
            color: #333;
            font-size: 28px;
            .name {
                width: 100px;
            }
            .id {
                flex: 1;
            }
            .choose-icon {
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translate3d(0, -50%, 0);
                width: 0.5313rem;
                height: 0.375rem;
            }
        }
        .traveller-section-item + .traveller-section-item {
            border-top: 1px solid #e6e6e6;
        }
    }
}
</style>
