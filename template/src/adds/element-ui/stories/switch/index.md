# Switch

http://element.eleme.io/#/en-US/component/switch#switch

```html
<el-switch v-model="value1">
</el-switch>
<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
</el-switch>
```

```js
export default {
  data() {
    return {
      value1: true,
      value2: true
    }
  }
}
```

## Disabled

```html
<el-switch v-model="value3" disabled>
</el-switch>
```

```js
export default {
  data() {
    return {
      value3: true
    }
  }
}
```