<template>
  <div>
    <h3>Tag</h3>
    <el-tag>Tag One</el-tag>
    <el-tag type="success">Tag Two</el-tag>
    <el-tag type="info">Tag Three</el-tag>
    <el-tag type="warning">Tag Four</el-tag>
    <el-tag type="danger">Tag Five</el-tag>

    <h3>Removable</h3>
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" @close="close(tag)">
      \{{tag.name}}
    </el-tag>

    <h3>Sizes</h3>
    <el-tag>Default</el-tag>
    <el-tag size="medium">Medium</el-tag>
    <el-tag size="small">Small</el-tag>
    <el-tag size="mini">Mini</el-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        { name: 'Tag 1', type: '' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' }
      ]
    }
  },
  methods: {
    close(tag) {
      this.tags.splice(this.tags.indexOf(tag),1)
    }
  }
}
</script>
<style >
.el-tag {
  margin: 5px;
}
</style>

