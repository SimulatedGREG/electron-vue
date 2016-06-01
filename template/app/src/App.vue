<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html, body { height: 100%; }

  body {
    align-items: center;
    background: radial-gradient(
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

<template>
  {{#isEnabled plugins 'vue-router'}}
  <router-view></router-view>
  {{else}}
  uhh, the regular page
  {{/isEnabled}}
</template>

<script>
{{#isEnabled plugins 'vuex'}}
  import store from './vuex/store'
{{/isEnabled}}
  export default {
    {{#isEnabled plugins 'vuex'}}store{{/isEnabled}}
  }
</script>
