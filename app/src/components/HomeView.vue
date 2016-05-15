<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <img src="https://raw.githubusercontent.com/SimulatedGREG/electron-vue/master/docs/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import CurrentPage from './HomeView/CurrentPage'
  import Links from './HomeView/Links'
  import Versions from './HomeView/Versions'

  export default {
    components: {
      CurrentPage,
      Links,
      Versions
    }
  }
</script>
