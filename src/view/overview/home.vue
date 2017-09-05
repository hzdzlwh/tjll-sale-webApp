<template>
<div>
<headNav></headNav>
<indexList></indexList>
</div>
</template>

<script>
export default {
    title() {
        return '首页';
    }
};
</script>

<style lang="css">
</style>
<script>
    import headNav from '@/components/nav';
    import indexList from '@/components/nav/indexList';
    
    export default {
        components: {
            headNav,
            indexList
        }
    };
</script>