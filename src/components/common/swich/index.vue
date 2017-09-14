/*
* @Author: lxj
* @Date:   2017-07-18 15:30:17
* @Last Modified by:   lxj
* @Last Modified time: 2017-07-19 11:04:37
* @email: 783384903@qq.com
*/
<template>
    <label>
        <input class="dd-switch dd-switch-animbg" type="checkbox" :disabled='disabled' v-model="inputValue" :checked='inputValue'  >{{label}} </label>
</template>
<style lang='scss'>
@mixin borderRadius($radius:20px) {
    border-radius: $radius;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
}

$duration: .4s;
$checkedColor: #fff!important;
.dd-switch {
    width: 1.375rem;
    height: 0.84375rem;
    position: relative;
    border: 1px solid #4cd864;
    background-color: #4cd864!important;
    /*box-shadow: #dfdfdf 0 0 0 0 inset;*/
    @include borderRadius(0.75rem);
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    &:before {
        content: '✔';
        margin-top: 2px;
        margin-left: 0;
        color: #fff;
        width: 0.75rem;
        height: 0.75rem;
        text-align: center;
        line-height: 0.75rem;
        position: absolute;
        font-size: 0.375rem;
        top: 0px;
        right: 0;
        @include borderRadius(0.75rem);
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
    &:checked {
        /*border-color: $checkedColor;*/
        box-shadow: #e2e2e2 0 0 0 2px inset;
        border-color: #e2e2e2;
        background-color: $checkedColor;
        &:before {
            right: 0.5625rem;
            background-color: #fff;
            color:#999;
            content: ' ';
        }
    }
    &.dd-switch-animbg {
        transition: background-color ease $duration;
        &:before {
            transition: right 0.3s;
        }
        &:checked {
            /*box-shadow: #dfdfdf 0 0 0 0 inset;*/
            background-color: $checkedColor;
            transition: border-color $duration, background-color ease $duration;
            &:before {
                transition: right 0.3s;
            }
        }
    }
    &.dd-switch-anim {
        transition: border cubic-bezier(0, 0, 0, 1) $duration, cubic-bezier(0, 0, 0, 1) $duration;
        &:before {
            transition: right 0.3s;
        }
        &:checked {
            /*box-shadow: $checkedColor 0 0 0 16px inset;*/
            background-color: $checkedColor;
            transition: border ease $duration,  ease $duration, background-color ease $duration*3;
            &:before {
                transition: right 0.3s;
            }
        }
    }
}
</style>
<script>
export default {
    name: 'switch',
    props: {
        value: {
            type: [Number, Boolean],
            default: 0
        },
        label: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            inputValue: !this.value
            // 样式写反了=-=就这样补丁了
        };
    },
    watch: {
        // value(val) {
        //     this.inputValue = val;
        // },
        value(val) {
            this.inputValue = !val;
        },
        inputValue(val, newval) {
            const value = newval ? 1 : 0;
            this.$emit('input', value);
        }
    }
};
</script>
