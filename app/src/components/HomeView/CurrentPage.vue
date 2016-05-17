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
</style>

<template>
  <p>
    You are currently at <code>`{{ route.path }}`</code> on the <code>`{{ route.name }}`</code> view.
  </p>
</template>

<script>
  export default {
    data () {
      return { route: this.$router._currentRoute }
    }
  }
</script>
