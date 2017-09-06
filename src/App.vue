<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import topBar from './components/topBar'
export default {
  name: 'app',
  components: {
    topBar
  }
}
</script>

<style>
#app {
  
}
</style>
