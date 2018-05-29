# Progress

http://element.eleme.io/#/en-US/component/progress#progress

```html
<el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
```

## Linear

```html
<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
```

## Circular

```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
```
