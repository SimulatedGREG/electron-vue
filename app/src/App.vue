<style lang="scss">
  body {
    background-color: ghostwhite;
    font-family: Helvetica, sans-serif;
  }
</style>

<template>
  <router-view></router-view>
</template>

<script>
  import store from './vuex/store'

  export default {
    store
  }
</script>
