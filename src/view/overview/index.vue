<template>
    <div class="overview">
        <router-view></router-view>
        <footerbar></footerbar>
    </div>
</template>

<script>
import footerbar from '@/components/footerbar';

export default {
    components: {
        footerbar
    }
};
</script>

<style lang="scss">
.overview {
    padding-bottom: 1.5625rem;
    // height: 100%;
}
</style>
