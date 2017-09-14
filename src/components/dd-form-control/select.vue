<template>
    <div class="dd-form" v-clickoutside="hiddenList">
        <label
         class="dd-form-label"
         :for="label"
        >
            {{ label }}
        </label>
        <div
         class="dd-form-containt"
         :placeholder="placeholder"
         @click="toggleList"
        >
        {{ key }}
        </div>
        <i class="dd-form-icon"></i>
        <transition name="fade">
            <div v-show="showList" class="scrollWrap" ref="scrollWrap">
                <ul class="dd-form-select">
                    <li
                     @click="updateValue(item.value)"
                     v-for="item in list"
                     class="select-item"
                     :class="{ active: item.value === value }"
                    >
                        {{ item.key }}
                    </li>
                </ul>
            </div>
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
    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
@import "./dd-form.scss";
</style>
