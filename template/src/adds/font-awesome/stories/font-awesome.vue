<template>
  <div class="font__list" @mouseout="hoverItem = ''">
    <div v-for="i in icons" :key="i" class="font__container" :style="{
      'color': hoverItem == i ? background : color,
      'background': hoverItem == i ? color : background 
      }">

      <div class="font__icon" @mouseover="hoverItem = i"  :title="i">
        <i class="fa" :class="i" :style="{ 'font-size': size + 'px'}"></i>
      </div>

      <div class="font__text">\{{i}}</div>
    </div>
  </div>
</template>
<script>
import icons from './icons'
export default {
  data() {
    return {
      hoverItem: ''
    }
  },
  props: ['size', 'color', 'background', 'search'],
  computed: {
    icons() {
      return icons.filter(
        i =>
          this.search === undefined ||
          this.search === '' ||
          i.indexOf(this.search) >= 0
      )
    }
  }
}
</script>
<style  scoped>
.font__list {
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
}

.font__container {
  border: 1px solid #ddd;
  min-width: 122px;
}

.font__icon {
  text-align: center;
  vertical-align: middle;
  margin: 0.5rem;
  padding: 0.5rem;
}

.font__text {
  font-size: 13px;
  // color: #adb5bd;
  max-width: 120px;
}

i.fa {
  vertical-align: middle;
  text-align: center;
}
</style>


