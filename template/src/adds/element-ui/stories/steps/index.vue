<template>
  <div>
    <h3>Steps</h3>
    <el-steps :active="active" finish-status="success">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">Next step</el-button>

    <h3>With Status</h3>
    <el-steps :active="1" finish-status="success">
      <el-step title="Done"></el-step>
      <el-step title="Processing"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>

    <h3>With Description</h3>
    <el-steps :active="2" align-center>
      <el-step title="Step 1" description="Some description"></el-step>
      <el-step title="Step 2" description="Some description"></el-step>
      <el-step title="Step 3" description="Some description"></el-step>
      <el-step title="Step 4" description="Some description"></el-step>
    </el-steps>

    <h3>With Icon</h3>
    <el-steps :active="1">
      <el-step title="Step 1" icon="el-icon-edit"></el-step>
      <el-step title="Step 2" icon="el-icon-upload"></el-step>
      <el-step title="Step 3" icon="el-icon-picture"></el-step>
    </el-steps>

    <h3>Vertical</h3>
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
      </el-steps>
    </div>

    <h3>Simple step bar</h3>
    <el-steps :space="200" :active="1" simple>
      <el-step title="Step 1" icon="el-icon-edit"></el-step>
      <el-step title="Step 2" icon="el-icon-upload"></el-step>
      <el-step title="Step 3" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>
  </div>

</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style>
.el-steps {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  display: block;
  max-width: 850px;
}
</style>


