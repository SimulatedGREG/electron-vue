# Table

http://element.eleme.io/#/en-US/component/table#table

```html
<el-table :data="tableData" style="width: 100%" stripe border>
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
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  }
}
```

## Custom row class

```html
<el-table :data="tableData" style="width: 100%" border :row-class-name="tableRowClassName">
  <el-table-column prop="date" label="Date" width="180">
  </el-table-column>
  <el-table-column prop="name" label="Name" width="180">
  </el-table-column>
  <el-table-column prop="address" label="Address">
  </el-table-column>
</el-table>
```

```js
methods: {
  tableRowClassName({ row, rowIndex }) {
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  },
```

## Sort

```html
<el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
  <el-table-column prop="date" label="Date" sortable width="180">
  </el-table-column>
  <el-table-column prop="name" label="Name" width="180">
  </el-table-column>
  <el-table-column prop="address" label="Address" :formatter="formatter">
  </el-table-column>
</el-table>
```

## Filter

```html
<el-table :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="Date" sortable width="180" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]" :filter-method="filterHandler">
  </el-table-column>
  <el-table-column prop="name" label="Name" width="180">
  </el-table-column>
  <el-table-column prop="address" label="Address" :formatter="formatter">
  </el-table-column>
  <el-table-column prop="tag" label="Tag" width="100" :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]" :filter-method="filterTag" filter-placement="bottom-end">
    <template slot-scope="scope">
      <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
    </template>
  </el-table-column>
</el-table>
```

```js
filterHandler(value, row, column) {
  const property = column['property']
  return row[property] === value
}
```

## Expandable

```html
<el-table :data="tableData3" style="width: 100%">
  <el-table-column type="expand">
    <template slot-scope="props">
      <p>State: {{ props.row.state }}</p>
      <p>City: {{ props.row.city }}</p>
      <p>Address: {{ props.row.address }}</p>
      <p>Zip: {{ props.row.zip }}</p>
    </template>
  </el-table-column>
  <el-table-column label="Date" prop="date">
  </el-table-column>
  <el-table-column label="Name" prop="name">
  </el-table-column>
</el-table>
```

```js
export default {
  data() {
    return {
  tableData3: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }
      ]
    }
  }
}
```