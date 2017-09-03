<template>
    <div class="dd-form">
        <label
         class="dd-form-label"
         :for="label"
        >
            {{ label }}
        </label>
        <input
         class="dd-form-containt"
         :type="type"
         :placeholder="placeholder"
         :readonly="readonly"
         :value="value"
         :maxlength="maxlength"
         @input="updateValue($event.target.value)"
         @click="onClick"
        >
        <i class="dd-form-icon" v-if="icon"></i>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: 'Label',
            required: true
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: Number,
            defalut: 9999
        },
        icon: {
            type: Boolean,
            defalut: false
        },
        value: {
            required: true
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
        onClick() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./dd-form.scss";
</style>
