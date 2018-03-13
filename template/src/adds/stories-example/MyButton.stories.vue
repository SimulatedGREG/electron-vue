<template>
  <button class="button-styles color--red-1 button--40x40" @click="onClick">
    <b> </b>
    Example class of the control
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  data () {
    return {
      messages: ['Cat']
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
      console.log('button clicked')
    }
  }
}
</script>

<style>


.button-styles {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
  background: brown;
  color: #fff;
}
</style>
