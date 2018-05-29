# Time / Date

http://element.eleme.io/#/en-US/component/date-picker#datepicker

http://element.eleme.io/#/en-US/component/time-picker#timepicker

http://element.eleme.io/#/en-US/component/datetime-picker#datetimepicker

```html
<el-date-picker v-model="value1" type="date" placeholder="Pick a day">
</el-date-picker>
```

## Date Range

```html
<el-date-picker v-model="value6" type="daterange" range-separator="-" start-placeholder="Start date" end-placeholder="End date">
</el-date-picker>
```

## Week

```html
<el-date-picker v-model="value3" type="week" format="Week WW" placeholder="Pick a week">
</el-date-picker>
```

## Month

```html
<el-date-picker v-model="value4" type="month" placeholder="Pick a month">
</el-date-picker>
```

## Year

```html
<el-date-picker v-model="value5" type="year" placeholder="Pick a year">
</el-date-picker>
```

## Time

```html
<el-time-select v-model="value1" :picker-options="{
start: '08:30',
step: '00:15',
end: '18:30'
}" placeholder="Select time">
</el-time-select>
```

## Time - Selectable Range

```html
<el-time-picker v-model="value2" :picker-options="{
  selectableRange: '18:30:00 - 20:30:00'
}" placeholder="Arbitrary time">
</el-time-picker>
```

## Time Range

```html
<el-time-picker is-range v-model="value4" range-separator="-" start-placeholder="Start time" end-placeholder="End time">
</el-time-picker>
```

## Date/Time

```html
<el-date-picker v-model="value7" type="datetime" placeholder="Select date and time">
</el-date-picker>
```

## Date/Time Range

```html
<el-date-picker v-model="value8" type="datetimerange" range-separator="-" start-placeholder="Start date" end-placeholder="End date">
</el-date-picker>
```