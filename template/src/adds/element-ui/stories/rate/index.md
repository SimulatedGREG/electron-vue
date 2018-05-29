# Rate

http://element.eleme.io/#/en-US/component/rate#rate

```html
<el-rate v-model="value1"></el-rate>
```

## Colors

```html
<el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>
```

## Text

```html
<el-rate v-model="value3" :texts="['oops', 'disappointed', 'normal', 'good', 'great']" show-text>
</el-rate>
```

## Icons

```html
<el-rate v-model="value4" :icon-classes="['el-icon-tickets', 'el-icon-circle-close', 'el-icon-circle-check']" void-icon-class="el-icon-remove-outline" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>
```

## Read Only

```html
<el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value} points">
</el-rate>
```