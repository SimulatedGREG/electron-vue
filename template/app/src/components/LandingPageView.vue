<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <img src="{{#if_eq vueVersion '2.x'}}./{{/if_eq}}LandingPageView/assets/logo.png" alt="electron-vue">
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
  import CurrentPage from './LandingPageView/CurrentPage'{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}
{{/isEnabled}}
  import Links from './LandingPageView/Links'{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}
  import Versions from './LandingPageView/Versions'{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}

  export default {
    components: {
{{#isEnabled plugins 'vue-router'}}
      CurrentPage,
{{/isEnabled}}
      Links,
      Versions{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}},{{/if_eq}}{{/if}}
    },
    name: 'landing-page'{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}},{{/if_eq}}{{/if}}
  }{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}
</script>
