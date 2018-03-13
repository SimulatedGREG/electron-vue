# Buttons

http://element.eleme.io/#/en-US/component/button

```html
  <div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</div>
````

## Plain Buttons

```html
  <div style="margin: 20px 0">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>
```

## Round Buttons

```html
  <div>
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>
```

## Disabled Buttons

```html
  <div>
  <el-button disabled>Default</el-button>
  <el-button type="primary" disabled>Primary</el-button>
  <el-button type="success" disabled>Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</div>

<div style="margin-top: 20px">
  <el-button plain disabled>Plain</el-button>
  <el-button type="primary" plain disabled>Primary</el-button>
  <el-button type="success" plain disabled>Success</el-button>
  <el-button type="info" plain disabled>Info</el-button>
  <el-button type="warning" plain disabled>Warning</el-button>
  <el-button type="danger" plain disabled>Danger</el-button>
</div>
```

## Icon buttons

```html
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
  <el-button type="primary" icon="el-icon-search">Search</el-button>
  <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```

## Button grup

```html
  <el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
  <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
```

## Loading button

```html
  <el-button type="primary" :loading="true">Loading</el-button>
```

## Sizes

```html
  <div>
  <el-button>Default</el-button>
  <el-button size="medium">Medium</el-button>
  <el-button size="small">Small</el-button>
  <el-button size="mini">Mini</el-button>
</div>
<div style="margin-top: 20px">
  <el-button round>Default</el-button>
  <el-button size="medium" round>Medium</el-button>
  <el-button size="small" round>Small</el-button>
  <el-button size="mini" round>Mini</el-button>
</div>
```
