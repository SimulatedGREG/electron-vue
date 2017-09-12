<template>
  <div>
    <div class="title">Information</div>
    <div class="items">
{{#isEnabled plugins 'vue-router'}}
      <div class="item">
        <div class="name">Path:</div>
        <div class="value">\{{ path }}</div>
      </div>
      <div class="item">
        <div class="name">Route Name:</div>
        <div class="value">\{{ name }}</div>
      </div>
{{/isEnabled}}
      <div class="item">
        <div class="name">Vue.js:</div>
        <div class="value">\{{ vue }}</div>
      </div>
      <div class="item">
        <div class="name">Electron:</div>
        <div class="value">\{{ electron }}</div>
      </div>
      <div class="item">
        <div class="name">Node:</div>
        <div class="value">\{{ node }}</div>
      </div>
      <div class="item">
        <div class="name">Platform:</div>
        <div class="value">\{{ platform }}</div>
      </div>
    </div>
  </div>
</template>

<script{{#if typescript}} lang="ts"{{/if}}>
  {{#if typescript}}
  import Vue, { ComponentOptions } from 'vue'

  {{/if}}
  export default {
    data () {
      return {
        electron: process.versions.electron,
        {{#isEnabled plugins 'vue-router'}}
        name: 'landing-page',
        {{/isEnabled}}
        node: process.versions.node,
        {{#isEnabled plugins 'vue-router'}}
        path: '/',
        {{/isEnabled}}
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }{{#if typescript}} as ComponentOptions<Vue>{{/if}}
  {{#if typescript}}

/*
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class SystemInformation extends Vue {
    electron = process.versions.electron
    name = 'landing-page'
    node = process.versions.node
    path = '/'
    platform = require('os').platform()
    vue = require('vue/package.json').version
  }
*/
  {{/if}}
</script>

<style scoped>
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
