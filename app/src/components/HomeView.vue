<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <img src="HomeView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
    <natives></natives>
  </div>
</template>

<script>
  import CurrentPage from './HomeView/CurrentPage'
  import Links from './HomeView/Links'
  import Versions from './HomeView/Versions'
  import Natives from './HomeView/Natives'

  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
      Natives
    }
  }
</script>
