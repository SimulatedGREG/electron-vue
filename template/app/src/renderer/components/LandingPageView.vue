<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
{{#isEnabled plugins 'vue-router'}}
    <current-page></current-page>
{{/isEnabled}}
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
{{#isEnabled plugins 'vue-router'}}
  import CurrentPage from './LandingPageView/CurrentPage'
{{/isEnabled}}
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  export default {
    components: {
{{#isEnabled plugins 'vue-router'}}
      CurrentPage,
{{/isEnabled}}
      Links,
      Versions
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
