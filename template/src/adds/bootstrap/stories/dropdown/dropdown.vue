<template>
<div>
<div class="dropdown" >
  <button class="btn btn-secondary dropdown-toggle bg-success" 
  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu " aria-labelledby="dropdownMenuButton"  >
    <a class="dropdown-item"  @click="log('Action')" >Action</a>
    <a class="dropdown-item"  @click="log('Another action')">Another action</a>
    <a class="dropdown-item"  @click="log('Something else here')">Something else here</a>
  </div>
</div>
</div>
</template>
<script>
export default {
  methods: {
    log(name) {
      console.log(name);
    }
  }
}
</script>
<style  scoped>
@import '../styles.css';
</style>


