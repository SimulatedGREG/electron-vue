<template>
  <button @click="$root.notify({title: 'electron', body: 'hello', onActivate: ()=> {test()}})">notify</button>
</template>
<script>
  export default {
    data () {
      return {count: 1}
    },
    methods: {
      test () {
        console.log(this.count++)
      }
    }
  }
</script>
