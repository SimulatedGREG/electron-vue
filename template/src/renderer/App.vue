<template>
  <div id="#app">
    {{#isEnabled plugins 'vue-router'}}
    <router-view></router-view>
    {{else}}
    <landing-page></landing-page>
    {{/isEnabled}}
  </div>
</template>

<script>
{{#isEnabled plugins 'vue-router'}}
{{else}}
  import LandingPage from '@/components/LandingPageView'
{{/isEnabled}}
{{#isEnabled plugins 'vuex'}}
  import store from '@/vuex/store'
{{/isEnabled}}
  export default {
{{#isEnabled plugins 'vue-router'}}
{{else}}
    components: {
      LandingPage
    }{{#isEnabled plugins 'vuex'}},{{/isEnabled}}
{{/isEnabled}}
{{#isEnabled plugins 'vuex'}}
    store
{{/isEnabled}}
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
</style>
