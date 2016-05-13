<template>
  <h1>Welcome to Electron-Vue!</h1>
  <current-page></current-page>
  <versions></versions>
</template>

<script>
  import CurrentPage from './HomeView/CurrentPage'
  import Versions from './HomeView/Versions'

  export default {
    components: {
      CurrentPage,
      Versions
    }
  }
</script>
