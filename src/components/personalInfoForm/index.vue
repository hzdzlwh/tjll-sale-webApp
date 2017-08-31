<template>
    <div class="info-form">
        <div class="info-form-item" v-if="key === 'name'">
            <label class="form-label" for="name">姓名</label>
            <input class="form-input" :value="value.name" @input="onChange($event, 'name')" type="text" placeholder="请确保证与证件姓名一致">
        </div>
        <div class="info-form-item" v-if="key === 'phone'">
            <label class="form-label" for="telephone">手机号</label>
            <input class="form-input" :value="value.phone" @input="onChange($event, 'phone')" type="number" placeholder="请输入正确的手机号">
        </div>
        <template v-if="key === 'idCard'">
            <div class="info-form-item">
                <label class="form-label" for="certificate">证件类型</label>
                <select-box @select="onSelect" class="form-input" :selectList="cardList" :label="value.idCardType"></select-box>
                <i class="form-icon"></i>
            </div>
            <div class="info-form-item">
                <label class="form-label" for="certificate">证件号</label>
                <input class="form-input" :value="value.idCardNum" @input="onChange($event, 'idCardNum')" type="number" placeholder="请输入证件号">
            </div>
        </template>
        <template v-if="key === 'more'">
            <div class="info-form-item">
                <label class="form-label" for="gender">性别</label>
                <i class="form-icon"></i>
                <select-box @select="onGender" class="form-input" :selectList="genderList" :label="value.gender"></select-box>
            </div>
            <div class="info-form-item">
                <label class="form-label" for="birthday">生日</label>
                <input class="form-input" readonly :value="value.birthday" @input="onChange($event, 'idCardNum')" type="number" placeholder="2017-01-01">
                <i class="form-icon"></i>
            </div>
            <div class="info-form-item">
                <label class="form-label" for="email">邮箱</label>
                <input class="form-input" :value="value.email" @input="onChange($event, 'idCardNum')" type="number" placeholder="请输入邮箱地址">
            </div>
            <div class="info-form-item">
                <label class="form-label" for="area">地区</label>
                <input class="form-input" readonly :value="value.email" @input="onChange($event, 'idCardNum')" type="number" placeholder="请选择地区">
                <i class="form-icon"></i>
            </div>
        </template>
    </div>
</template>

<script>
/**
 * 旅客from组件
 * 使用v-model传入value
 * value格式是
 * {
 *    phone: '123456',
 *    idCardNum: '',
 *    name: '',
 *    idCardType: ''
 * }
 */
import { strLengthFormat } from '@/util/filters';
import selectBox from './selectBox';

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            idType: 0,
            formData: {},
            cardList: [
                { label: 0, value: '身份证' },
                { label: 1, value: '军官证' },
                { label: 2, value: '通行证' },
                { label: 3, value: '护照' },
                { label: 4, value: '其他' }
            ],
            genderList: [
                { label: 0, value: '男' },
                { label: 1, value: '女' }
            ]
        };
    },
    created() {
        this.init();
    },
    methods: {
        onChange($event, key) {
            switch (key) {
                case 'name':
                    $event.target.value = strLengthFormat($event.target.value, 20);
                    this.formData[key] = $event.target.value;
                    break;
                case 'phone':
                    $event.target.value = strLengthFormat($event.target.value, 11);
                    this.formData[key] = $event.target.value;
                    break;
                case 'idCardNum':
                    $event.target.value = strLengthFormat($event.target.value, 18);
                    this.formData[key] = $event.target.value;
                    break;
                default:
                    break;
            }
        },
        init() {
            this.formData = Object.assign({}, this.value);
        },
        onSelect({ label }) {
            this.formData.idCardType = label;
        },
        emitData() {
            this.$emit('input', this.formData);
        },
        onGender({ label }) {
            this.formData.gender = label;
        }
    },
    watch: {
        formData: {
            handler() {
                this.emitData();
            },
            deep: true
        }
    },
    computed: {
        key() {
            return this.$route.params.key;
        }
    },
    components: {
        selectBox
    }
};
</script>

<style scoped lang="scss">
    .info-form {
        background: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .info-form-item {
            position: relative;
            display: flex;
            padding: 0 0.5rem;
            height: 1.1875rem;
            line-height: 1.1875rem;
            font-size: 0.4375rem;
            .form-label {
                position: relative;
                width: 2.5rem;
                color: #333;
            }
            .form-input {
                flex: 1;
            }
            .select-list {
                position: absolute;
                left: 3rem;
                top: 1.1875rem;
                background: #fff;
                z-index: 10;
                border: 1px solid #d1dbe5;
                box-shadow: 0 0.0313rem 0.0625rem rgba(0,0,0,.12), 0 0 0.0938rem rgba(0,0,0,.04);
                width: 60%;
                padding: 0.1875rem 0;
                border-radius: 0.0625rem;
                overflow: hidden;
                &-item {
                    padding: 0 0.25rem;
                    height: 0.8438rem;
                    line-height: 0.8438rem;
                    font-size: 0.3438rem;
                    &.active {
                        background-color: #49a5f1;
                        color: #fff;
                    }
                }
            }
            .form-icon {
                position: absolute;
                right: 0.5rem;
                height: 100%;
                width: 0.25rem;
                background-image: url(~assets/images/next.png);
                background-position: center;
                background-repeat: no-repeat;
                background-size: 0.25rem 0.4375rem;
            }
        }
        .info-form-item + .info-form-item {
            border-top: 1px solid #e6e6e6;
        }
    }
    .info-control {
        padding: 0 0.5rem;
        height: 0.9375rem;
        line-height: 0.9375rem;
        .info-control-checkbox {
            display: flex;
            justify-content: flex-end;
            font-size: 0.375rem;
            color: #666;
            &.active {
                .icon {
                    background-color: #49a5f1;
                    background-image: url(~assets/images/choose.png);
                    background-size: 0.4375rem 0.3125rem;
                    background-position: center;
                    background-repeat: no-repeat;
                    border: none;
                }
            }
            .icon {
                margin-top: 0.1875rem;
                margin-right: 0.1875rem;
                height: 0.5625rem;
                width: 0.5625rem;
                border: 1px solid #999;
                background-color: #fff;
                border-radius: 0.125rem;
            }
        }
    }
    .info-title {
        padding: 0 0.5rem;
        color: #666;
        font-size: 0.375rem;
        height: 0.9375rem;
        line-height: 0.9375rem;
    }
    .info-section {
        background: #fff;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        .info-section-item {
            position: relative;
            padding: 0 0.5rem;
            display: flex;
            height: 1.1875rem;
            line-height: 1.1875rem;
            color: #333;
            font-size: 0.4375rem;
            .name {
                width: 1.5625rem;
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
        .info-section-item + .info-section-item {
            border-top: 1px solid #e6e6e6;
        }
    }
    .addinfo-confirm {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 2.1875rem;
        width: 100%;
        background: #fff;
        padding: 0.5rem;
        &-button {
            display: block;
            background: #49a5f1;
            height: 1.1875rem;
            width: 100%;
            border-radius: 0.125rem;
            color: #fff;
            font-size: 0.4375rem;
            line-height: 1.1875rem;
            text-align: center;
        }
    }
</style>
