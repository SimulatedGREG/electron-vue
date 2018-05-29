# Select

http://element.eleme.io/#/en-US/component/select#select

```html
<el-select v-model="value2" placeholder="Select">
  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
  </el-option>
</el-select>
```

```js
export default {
  data() {
    return {
   options2: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      value2: '',
    }
  }
}
```

## Disabled

```html
<el-select v-model="value3" disabled placeholder="Select">
  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
  </el-option>
</el-select>
```

## Custom template

```html
<el-select v-model="value4" placeholder="Select">
  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
  </el-option>
</el-select>
```

## Grouping

```html
<el-select v-model="value5" placeholder="Select">
  <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
    <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-option-group>
</el-select>
```

```js
export default {
  data() {
    return {
      options3: [
        {
          label: 'Popular cities',
          options: [
            {
              value: 'Shanghai',
              label: 'Shanghai'
            },
            {
              value: 'Beijing',
              label: 'Beijing'
            }
          ]
        },
        {
          label: 'City name',
          options: [
            {
              value: 'Chengdu',
              label: 'Chengdu'
            },
            {
              value: 'Shenzhen',
              label: 'Shenzhen'
            },
            {
              value: 'Guangzhou',
              label: 'Guangzhou'
            },
            {
              value: 'Dalian',
              label: 'Dalian'
            }
          ]
        }
      ],
      value5: '',
    }
  }
}
```

## Filtering

```html
 <el-select v-model="value5" filterable placeholder="Select">
<el-option
  v-for="item in options2"
  :key="item.value"
  :label="item.label"
  :value="item.value">
</el-option>
</el-select>
```

## Create new

```html
<el-select
v-model="value6"
multiple
filterable
allow-create
default-first-option
placeholder="Choose tags for your article">
<el-option
  v-for="item in options2"
  :key="item.value"
  :label="item.label"
  :value="item.value">
</el-option>
</el-select>
``
```
