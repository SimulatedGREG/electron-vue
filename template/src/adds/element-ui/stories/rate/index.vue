<template>
  <div>
    <h3>Rate</h3>
    <el-rate v-model="value1"></el-rate>

    <h3>Colors</h3>
    <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>

    <h3>Text</h3>
    <el-rate v-model="value3" :texts="['oops', 'disappointed', 'normal', 'good', 'great']" show-text>
    </el-rate>

    <h3>Icons</h3>
    <el-rate v-model="value4" :icon-classes="['el-icon-tickets', 'el-icon-circle-close', 'el-icon-circle-check']" void-icon-class="el-icon-remove-outline" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>

    <h3>Read Only</h3>
    <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value} points">
    </el-rate>

  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 3,
      value3: 2,
      value4: 3,
      value5: 2.5
    }
  }
}
</script>
<style >

</style>

