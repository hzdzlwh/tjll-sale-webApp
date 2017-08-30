<template>
    <div class="addTraveller">
        <div class="traveller-form">
            <div class="traveller-form-item">
                <label class="form-label form-label-required" for="name">姓名</label>
                <input class="form-input" :value="value.name" @input="onChange($event, 'name')" type="text" placeholder="请确保证与证件姓名一致">
            </div>
            <div class="traveller-form-item">
                <label class="form-label" for="telephone">手机号</label>
                <input class="form-input" :value="value.phone" @input="onChange($event, 'phone')" type="number" placeholder="请输入正确的手机号">
            </div>
            <div class="traveller-form-item">
                <label class="form-label form-label-required" for="certificate">证件类型</label>
                <input @click="toggleBox" class="form-input" type="text" readonly :value="value.idCardType | idCardType">
                <i class="form-icon"></i>
                <transition name="fade">
                    <ul v-show="showBox" class="select-list" @click="selectType">
                        <li label="0" class="select-list-item" :class="{ active: value.idCardType === '0' }">身份证</li>
                        <li label="1" class="select-list-item" :class="{ active: value.idCardType === '1' }">军官证</li>
                        <li label="2" class="select-list-item" :class="{ active: value.idCardType === '2' }">通行证</li>
                        <li label="3" class="select-list-item" :class="{ active: value.idCardType === '3' }">护照</li>
                        <li label="4" class="select-list-item" :class="{ active: value.idCardType === '4' }">其他</li>
                    </ul>
                </transition>
            </div>
            <div class="traveller-form-item">
                <label class="form-label form-label-required" for="certificate">证件号</label>
                <input class="form-input" :value="value.idCardNum" @input="onChange($event, 'idCardNum')" type="number" placeholder="请输入证件号">
            </div>
        </div>
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
            showBox: false,
            formData: {}
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
            if (!this.value.idCardType) {
                this.formData.idCardType = 0;
            }
        },
        toggleBox() {
            this.showBox = !this.showBox;
        },
        selectType($event) {
            const idType = $event.target.getAttribute('label');
            this.formData.idCardType = idType;
            this.showBox = false;
        }
    },
    watch: {
        formData: {
            handler() {
                this.$emit('input', this.formData);
            },
            deep: true
        }
    }
};
</script>

<style lang="scss">
</style>
