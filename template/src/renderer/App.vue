<template>
  <div id="app">
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
  import LandingPage from '@/components/LandingPage'

{{/isEnabled}}
  export default {
    name: '{{ name }}'{{#isEnabled plugins 'vue-router'}}{{else}},{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
{{else}}
    components: {
      LandingPage
    }
{{/isEnabled}}
  }
</script>

<style>
  /* CSS */
</style>
