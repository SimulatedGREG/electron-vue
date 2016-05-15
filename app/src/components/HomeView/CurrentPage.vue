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
