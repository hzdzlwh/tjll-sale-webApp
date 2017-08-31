<template>
    <div class="form-input" v-clickoutside="closeList">
        <input @click="toggleLsit" class="select-input" type="text" readonly :value="value | labelToValue(selectList)">
        <transition name="fade">
            <ul v-show="showList" class="select-list">
                <li v-for="item in selectList" @click="choseList(item)" :label="item.label" class="select-list-item" :class="{ active: item.label === value }">{{ item.value }}</li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        selectList: {
            type: Array,
            required: true
        },
        label: {
            type: Number,
            defalut: 0
        }
    },
    data() {
        return {
            showList: false,
            value: this.label || 0
        };
    },
    methods: {
        toggleLsit() {
            this.showList = !this.showList;
        },
        choseList({ label, value }) {
            this.showList = false;
            this.value = label;
            this.$emit('select', { label, value });
        },
        closeList() {
            this.showList = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.form-input {
    position: relative;
}
.select-list {
    position: absolute;
    left: 0;
    top: 1.1875rem;
    background: #fff;
    z-index: 10;
    border: 1px solid #d1dbe5;
    box-shadow: 0 0.0313rem 0.0625rem rgba(0,0,0,.12), 0 0 0.0938rem rgba(0,0,0,.04);
    width: 100%;
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
</style>

