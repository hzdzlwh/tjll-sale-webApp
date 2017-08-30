<template>
    <div id="app">
        <topbar></topbar>
        <router-view class="app-view"></router-view>
    </div>
</template>
<script>
import topbar from '@/components/topbar';

export default {
    name: 'app',
    components: {
        topbar
    }
};
</script>

<style lang="scss">
#app {
    height: 100%;
    width: 100%;
    background:#f7f9fa;
    padding-top: 1.25rem;
}
</style>
