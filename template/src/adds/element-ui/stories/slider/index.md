# Sliders

http://element.eleme.io/#/en-US/component/slider#events

## Default value

```html
<el-slider v-model="value1"></el-slider>
```

## Custom initial value

```html
<el-slider v-model="value2"></el-slider>
```

```js
export default {
  data() {
    return {
      value2: 50
    }
  }
}
```

## Hide Tooltip

```html
<el-slider v-model="value3" :show-tooltip="false"></el-slider>
```

## Format Tooltip

```html
<el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
```

```js
  export default {
    data() {
      return {
        value4: 48
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
```

## Disabled

```html
 <el-slider v-model="value5" disabled></el-slider>
```

## Discrete values

```html
<el-slider v-model="value6" :step="10"></el-slider>
```

### Show stops

```html
<el-slider v-model="value7" :step="10" show-stops>
</el-slider>
```

## With input

```html
<el-slider v-model="value8" show-input>
```

## Range selection

```html
<el-slider v-model="value9" range show-stops :max="10">
```

## Vertical

```html
<el-slider v-model="value10" vertical height="200px">
```