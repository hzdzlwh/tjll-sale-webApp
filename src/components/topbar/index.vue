<template>
    <header class="title-bar">
        <i @click="goBack" class="go-back"></i>
        <p>{{ title }}</p>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'title'
        ])
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss">
    .title-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 1.25rem;
        line-height: 1.25rem;
        width: 100%;
        font-size: 0.4375rem;
        background:#4a6074;
        color: #fff;
        text-align: center;
        display: flex;
        justify-content: center;
        .go-back {
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -0.625rem;
            width: 1.25rem;
            height: 1.25rem;
            background-repeat: no-repeat;
            background-image: url(~assets/images/goBack.png);
            background-position: center;
        }
    }
</style>
