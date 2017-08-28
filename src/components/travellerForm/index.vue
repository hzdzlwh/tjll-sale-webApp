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
                <div class="form-input">身份证</div>
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
 * value格式必须是
 * {
 *    phone: '123456',
 *    idCardNum: '',
 *    name: '',
 *    idCardType: ''
 * }
 */
export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        onChange($event, key) {
            const formData = Object.assign({}, this.value);
            formData[key] = $event.target.value;
            this.$emit('input', formData);
        }
    }
};
</script>

<style lang="scss">
</style>
