<template>
  <div>
    <h3>Alert</h3>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180">
      </el-table-column>
      <el-table-column prop="address" label="Address">
      </el-table-column>
    </el-table>

    <h3>Custom Loading</h3>
    <el-table v-loading="loading" element-loading-text="Loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180">
      </el-table-column>
      <el-table-column prop="address" label="Address">
      </el-table-column>
    </el-table>

    <h3>Full-screen loading (2 seconds)</h3>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">
      As a directive
    </el-button>

  </div>
</template>
<script>
import { setTimeout } from 'timers'

export default {
  data() {
    return {
      fullscreenLoading: false,
      tableData: [
        {
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        },
        {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        },
        {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }
      ],
      loading: true
    }
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    }
  }
}
</script>
<style >
.el-table {
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

