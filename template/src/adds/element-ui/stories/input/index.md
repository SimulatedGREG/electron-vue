# Input

http://element.eleme.io/#/en-US/component/input#input

```html
<el-input placeholder="Please input" v-model="input"></el-input>
```

```js
export default {
  data() {
    return {
      input: ''
    }
  }
}
```

## Input Disabled

```html
<el-input placeholder="Please input" v-model="input" :disabled="true">
</el-input>
```

```js
export default {
  data() {
    return {
      input: ''
    }
  }
}
```

## Input Clearable

```html
<el-input placeholder="Please input" v-model="input" clearable>
</el-input>
```

```js
export default {
  data() {
    return {
      input: ''
    }
  }
}
```

## With Icon

```html
<el-input placeholder="Pick a date" suffix-icon="el-icon-date" v-model="input">
</el-input>

<el-input placeholder="Type something" v-model="input2">
  <i slot="prefix" class="el-input__icon el-icon-search"></i>
</el-input>
```

```js
export default {
  data() {
    return {
      input: '',
      input2: ''
    }
  }
}
```

## Textarea

```html
<el-input type="textarea" :rows="2" placeholder="Please input" v-model="textarea">
</el-input>
```

```js
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
```

## Template slot

```html
<el-input placeholder="Please input" v-model="input">
  <template slot="prepend">Http://</template>
</el-input>

<el-input placeholder="Please input" v-model="input2">
  <template slot="append">.com</template>
</el-input>
```

```js
export default {
  data() {
    return {
      input: '',
      input2: ''
    }
  }
}
```


## Input sizes

```html
  <el-input
placeholder="Please Input"
v-model="input6">
</el-input>
<el-input
size="medium"
placeholder="Please Input"
v-model="input7">
</el-input>
<el-input
size="small"
placeholder="Please Input"
v-model="input8">
</el-input>
<el-input
size="mini"
placeholder="Please Input"
v-model="input9">
</el-input>
```

```js
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
```

## Number

```html
<el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
```

```js
export default {
  data() {
    return {
      num1: 0
    }
  }
}
```

## Number Size

```html
<el-input-number v-model="num1"></el-input-number>
<el-input-number size="medium" v-model="num1"></el-input-number>
<el-input-number size="small" v-model="num1"></el-input-number>
<el-input-number size="mini" v-model="num1"></el-input-number>
```

```js
export default {
  data() {
    return {
      num1: 0
    }
  }
}
```