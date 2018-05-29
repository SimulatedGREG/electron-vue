<template>
  <div>
    <h3>\{{ show ? ' Visible ' : ' Hidden ' }}</h3>
    <button @click="show = !show">\{{ show ? 'Hide class' : 'Show class' }}</button>
    <transition name="custom-classes-transition" :enter-active-class="'animated ' + showClass" :leave-active-class="'animated ' + hideClass">
      <p v-show="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>

    <h3>\{{ show ? ' Hidden ' : ' Visible ' }}</h3>

    <button @click="show = !show">\{{ show ? 'Show class' : 'Hide class' }}</button>
    <transition name="custom-classes-transition" :enter-active-class="'animated ' + showClass" :leave-active-class="'animated ' + hideClass">
      <p v-show="!show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>

  </div>
</template>

<script>
export default {
  props: ['showClass', 'hideClass'],
  data() {
    return {
      show: false
    }
  }
}
</script>


<style class="scss" scoped>
button {
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background: #ddd;
  color: white;
}
</style>
