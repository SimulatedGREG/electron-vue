<template>
  <div id="app">
    {{#isEnabled plugins 'vue-router'}}
    <router-view></router-view>
    {{else}}
    <landing-page></landing-page>
    {{/isEnabled}}
  </div>
</template>

<script{{#if typescript}} lang="ts"{{/if}}>
  {{#if typescript}}import Vue, { ComponentOptions } from 'vue'{{/if}}
{{#isEnabled plugins 'vue-router'}}
{{else}}
  import LandingPage from '@/components/LandingPage{{#if typescript}}.vue{{/if}}'

{{/isEnabled}}
  export default {
    name: '{{ name }}'{{#isEnabled plugins 'vue-router'}}{{else}},{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
{{else}}
    components: {
      LandingPage
    }
{{/isEnabled}}
  }{{#if typescript}} as ComponentOptions<Vue>{{/if}}
  {{#if typescript}}

/*
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class DidItWork extends Vue {
    name = 'did-it-work'
  }
*/
  {{/if}}
</script>

<style>
  /* CSS */
</style>
