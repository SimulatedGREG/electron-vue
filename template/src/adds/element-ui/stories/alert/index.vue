<template>
  <div>
    <h3>Alert</h3>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    close-text="Gotcha"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </el-alert>

  </div>
</template>
<script>
export default {
}
</script>
<style >

.el-alert  {
  margin-bottom: 10px;
}

</style>

