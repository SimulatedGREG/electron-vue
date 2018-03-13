# Steps

http://element.eleme.io/#/en-US/component/steps

```html
<el-steps :active="active" finish-status="success">
  <el-step title="Step 1"></el-step>
  <el-step title="Step 2"></el-step>
  <el-step title="Step 3"></el-step>
</el-steps>
```

```js
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
```

## With Status

```html
<el-steps  :active="1" finish-status="success">
  <el-step title="Done"></el-step>
  <el-step title="Processing"></el-step>
  <el-step title="Step 3"></el-step>
</el-steps>
```

## With Description

```html
<el-steps :active="2" align-center>
  <el-step title="Step 1" description="Some description"></el-step>
  <el-step title="Step 2" description="Some description"></el-step>
  <el-step title="Step 3" description="Some description"></el-step>
  <el-step title="Step 4" description="Some description"></el-step>
</el-steps>
```

## With Icon

```html
<el-steps :active="1">
  <el-step title="Step 1" icon="el-icon-edit"></el-step>
  <el-step title="Step 2" icon="el-icon-upload"></el-step>
  <el-step title="Step 3" icon="el-icon-picture"></el-step>
</el-steps>
```

## Vertical

```html
<div style="height: 300px;">
  <el-steps direction="vertical" :active="1">
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>
</div>
```

## Simple step bar

```html
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
```