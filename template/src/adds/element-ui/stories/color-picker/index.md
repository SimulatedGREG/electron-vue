# Color Picker

http://element.eleme.io/#/en-US/component/color-picker#colorpicker

```html
<el-color-picker v-model="color1"></el-color-picker>
```

```js
export default {
  data() {
    return {
      color1: '#409EFF',
      color3: '#402EFF',
      color4: '#10FEFF'
    }
  }
}
```

## With Alpha

```html
<el-color-picker v-model="color3" show-alpha></el-color-picker>
```

## Sizes

```html
<el-color-picker v-model="color4"></el-color-picker>
<el-color-picker v-model="color4" size="medium"></el-color-picker>
<el-color-picker v-model="color4" size="small"></el-color-picker>
<el-color-picker v-model="color4" size="mini"></el-color-picker>
```