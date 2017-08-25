<template>
    <header class="title-bar">
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
    }
</style>
