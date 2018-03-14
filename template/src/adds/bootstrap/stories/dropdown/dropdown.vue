<template>
  <div>
    <div class="dropdown" >
      <button class="btn btn-secondary dropdown-toggle bg-success" type="button" @click.stop="show = !show" @keyup.esc="show = false" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" :class="{'show': show}" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click="log('Action')">Action</a>
        <a class="dropdown-item" @click="log('Another action')">Another action</a>
        <a class="dropdown-item" @click="log('Something else here')">Something else here</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    log(name) {
      console.log(name)
      this.show = false
    }
  }
}
</script>
<style  scoped>
@import '../styles.css';
</style>


