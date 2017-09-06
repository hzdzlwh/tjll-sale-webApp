<template>
  <div class="home">
    <carousel></carousel>
    <div class="process"></div>
  </div>
</template>

<script>
import carousel from './carousel';
export default {
    name: 'home',
    data() {
        return {
        };
    },
    components: {
        carousel
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
  position: relative;
  .process{
    width: 100%;
    height: 159px;
    position: absolute;
    top: 660px;
    z-index: 999;
    background: url('../assets/images/process.png');
  }
}
</style>
