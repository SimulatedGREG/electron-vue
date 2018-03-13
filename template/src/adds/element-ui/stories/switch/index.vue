<template>
  <div>
    <h3>Switch</h3>
    <el-switch v-model="value1">
    </el-switch>
    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>

    <h3>Disabled</h3>
    <el-switch v-model="value3" disabled>
    </el-switch>

  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true
    }
  }
}
</script>
<style >
</style>

