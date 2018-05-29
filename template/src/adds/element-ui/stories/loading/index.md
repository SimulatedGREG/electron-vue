# Loading

http://element.eleme.io/#/en-US/component/loading#loading

```html
<el-table v-loading="loading" :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="Date" width="180">
  </el-table-column>
  <el-table-column prop="name" label="Name" width="180">
  </el-table-column>
  <el-table-column prop="address" label="Address">
  </el-table-column>
</el-table>
```

```js
export default {
  data() {
    return {
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
  }
}
```

## Custom Loading

```html
<el-table v-loading="loading" element-loading-text="Loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)" :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="Date" width="180">
  </el-table-column>
  <el-table-column prop="name" label="Name" width="180">
  </el-table-column>
  <el-table-column prop="address" label="Address">
  </el-table-column>
</el-table>
```

## Full-screen loading

```html
<el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">
  As a directive
</el-button>
```

```js
import { setTimeout } from 'timers'

export default {
  data() {
    return {
      fullscreenLoading: false
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
```