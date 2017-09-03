<template>
    <div class="dd-form" v-clickoutside="hiddenList">
        <label
         class="dd-form-label"
         :for="label"
        >
            {{ label }}
        </label>
        <input
         class="dd-form-containt"
         type="text"
         :placeholder="placeholder"
         readonly="true"
         :value="key"
         @click="toggleList"
        >
        <i class="dd-form-icon"></i>
        <transition name="fade">
            <ul v-show="showList" class="dd-form-select">
                <li
                 @click="updateValue(item.value)"
                 v-for="item in list"
                 class="select-item"
                 :class="{ active: item.value === value }"
                >
                    {{ item.key }}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Label',
            required: true
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        value: [String, Number],
        list: {
            type: Array,
            defalut() {
                return [];
            },
            required: true
        }
    },
    data() {
        return {
            showList: false
        };
    },
    computed: {
        key() {
            const result = this.list.filter((item) => item.value === this.value)[0];
            if (result !== undefined) return result.key;
            return '未选择';
        }
    },
    methods: {
        updateValue(value) {
            this.hiddenList();
            this.$emit('input', value);
        },
        hiddenList() {
            this.showList = false;
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./dd-form.scss";
</style>
