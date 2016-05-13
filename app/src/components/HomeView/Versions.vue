<template>
  <p>
    You are using Electron v{{ versions['atom-shell'] }} with node v{{ versions.node }} on {{ platform }}
  </p>
</template>

<script>
  import os from 'os'

  export default {
    data () {
      return {
        platform: os.platform(),
        versions: process.versions
      }
    }
  }
</script>
