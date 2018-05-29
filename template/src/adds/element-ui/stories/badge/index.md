# Badge

http://element.eleme.io/#/en-US/component/badge#badge

<span style="color:red">If you are using bootstrap, please modify (yellow) background for .mark class in dropdown items.</span>

```html
<el-badge :value="12" class="item">
  <el-button size="small">comments</el-button>
</el-badge>

<el-badge :value="3" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me
    <i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      comments
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      replies
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```

## Min/Max value

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
```

## Custom Value

```html
<el-badge value="new" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
```

## Dot value

```html
<el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>
```