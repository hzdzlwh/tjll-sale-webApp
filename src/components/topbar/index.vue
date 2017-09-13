<template>
    <header class="title-bar">
        <i v-if="showGoBack" @click="goBack" class="go-back"></i>
        <p @click="log">{{ title }}</p>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'title'
        ]),
        showGoBack() {
            if (!this.$route.name) return true;
            return !this.$route.name.includes('overview');
        }
    },
    methods: {
        goBack() {
            const render = this.$route.query.render;
            const params = this.$route.params;
            if (render) {
                this.$router.push({ name: render, params });
            } else {
                this.$router.go(-1);
            }
        },
        log() {
            console.log();
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
        z-index: 100;
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
            background-size: 0.25rem 0.44rem;
        }
    }
</style>
