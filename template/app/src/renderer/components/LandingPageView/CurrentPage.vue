<template>
  <p>
    You are currently at <code>`\{{ $route.path }}`</code> on the <code>`\{{ $route.name }}`</code> view.
  </p>
</template>

<script>
  export default {
    created{{#if_eq eslintConfig 'standard'}} {{/if_eq}}() {
      // Set $route values that are not preset during unit testing
      if (process.env.NODE_ENV === 'testing') {
        this.$route = {
          name: 'landing-page',
          path: '/landing-page'{{#if_eq eslintConfig 'airbnb'}},{{/if_eq}}
        }{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}
      }
    }{{#if_eq eslintConfig 'airbnb'}},{{/if_eq}}
  }{{#if_eq eslintConfig 'airbnb'}};{{/if_eq}}
</script>

<style scoped>
  code {
    background-color: rgba(40, 56, 76, .5);
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    padding: 3px 6px;
    margin: 0 3px;
    vertical-align: bottom;
  }

  p { line-height: 24px; }
</style>
