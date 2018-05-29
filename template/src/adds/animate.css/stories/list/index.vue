<template>
  <div class="animate__list" @mouseout="hoverItem = ''">
    <div v-for="a in animations" :key="a" @mouseover="hoverItem = a" @click="animated">
      <h1 class="animated infinitive" :class="[a==hoverItem ? a : '']" :style="{ 'font-size': size + 'px', 'color':  color,  'background': background }">\{{a}}</h1>
    </div>
  </div>
</template>
<script>
import animations from '../animations'
export default {
  data() {
    return {
      show: false,
      hoverItem: ''
    }
  },
  props: ['size', 'color', 'background', 'search'],
  computed: {
    animations() {
      return animations.filter(
        i =>
          this.search === undefined ||
          this.search === '' ||
          i.indexOf(this.search) >= 0
      )
    }
  },
  methods: {
    animated() {}
  }
}
</script>
  
</template>
<style  scoped>
.animate__list {
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
}

h1 {
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}
</style>

