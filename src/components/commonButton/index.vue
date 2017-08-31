<template>
    <div class="common-button-wrap">
        <div @click="onClick" class="common-button" :class="[ className ]">
            {{ containt }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        containt: {
            type: String,
            default: '确定'
        },
        theme: {
            type: String,
            default: 'default'
        }
    },
    computed: {
        className() {
            return `common-button-${this.theme}`;
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="scss" scoped>
    .common-button-wrap {
       padding: 0 0.5rem;
       .common-button {
            height: 1.19rem;
            text-align: center;
            line-height: 1.19rem;
            font-size: 0.44rem;
            border-radius: 0.13rem;
       }
       .common-button-default {
            background:#ffffff;
            border:1px solid #999999;
            color: #999;
       }
       .common-button-info {
            background: #49a5f1;
            color: #fff;
       }
    }
</style>
