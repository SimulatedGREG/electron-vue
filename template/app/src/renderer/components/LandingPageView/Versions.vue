<template>
  <p>
    You are using electron v\{{ versions['atom-shell'] }} with node v\{{ versions.node }} on the \{{ platform }} platform.
  </p>
</template>

<script>
  import os from 'os'{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}

  export default {
    data{{#if eslint}}{{#if_eq eslintConfig 'standard'}} {{/if_eq}}{{/if}}() {
      return {
        platform: os.platform(),
        versions: process.versions{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}},{{/if_eq}}{{/if}}
      }{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}
    }{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}},{{/if_eq}}{{/if}}
  }{{#if eslint}}{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}{{/if}}
</script>
