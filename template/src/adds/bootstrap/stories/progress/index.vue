<template>
  <div class="progress">
    <div 
    :style="{ width: progress + '%' }"
    class="progress-bar" :class="classes" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</template>
<script>
export default {
  props: ['progress','classes']
}
</script>
<style >

@import '../styles.css';

</style>
