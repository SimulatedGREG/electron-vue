<template>
  <div>
    <h3>Color Picker</h3>
    <el-color-picker v-model="color1"></el-color-picker>

    <h3>With Alpha</h3>
    <el-color-picker v-model="color3" show-alpha></el-color-picker>

    <h3>Sizes</h3>
    <el-color-picker v-model="color4"></el-color-picker>
    <el-color-picker v-model="color4" size="medium"></el-color-picker>
    <el-color-picker v-model="color4" size="small"></el-color-picker>
    <el-color-picker v-model="color4" size="mini"></el-color-picker>

  </div>
</template>
<script>
export default {
  data() {
    return {
      color1: '#409EFF',
      color3: '#402EFF',
      color4: '#10FEFF'      
    }
  }
}
</script>
<style >

</style>

