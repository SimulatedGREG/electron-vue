<template>
  <div>
    <h3>Time / Date</h3>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
    </el-date-picker>

    <h3>Date Range</h3>
    <el-date-picker v-model="value6" type="daterange" range-separator="-" start-placeholder="Start date" end-placeholder="End date">
    </el-date-picker>

    <h3>Week</h3>
    <el-date-picker v-model="value3" type="week" format="Week WW" placeholder="Pick a week">
    </el-date-picker>

    <h3>Month</h3>
    <el-date-picker v-model="value4" type="month" placeholder="Pick a month">
    </el-date-picker>

    <h3>Year</h3>
    <el-date-picker v-model="value5" type="year" placeholder="Pick a year">
    </el-date-picker>

    <h3>Time</h3>
    <el-time-select v-model="value1" :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }" placeholder="Select time">
    </el-time-select>

    <h3>Time - Selectable Range</h3>
    <el-time-picker v-model="value2" :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }" placeholder="Arbitrary time">
    </el-time-picker>

    <h3>Time Range</h3>
    <el-time-picker is-range v-model="value4" range-separator="-" start-placeholder="Start time" end-placeholder="End time">
    </el-time-picker>

    <h3>Date/Time</h3>
    <el-date-picker v-model="value7" type="datetime" placeholder="Select date and time">
    </el-date-picker>

    <h3>Date/Time Range</h3>
    <el-date-picker v-model="value8" type="datetimerange" range-separator="-" start-placeholder="Start date" end-placeholder="End date">
    </el-date-picker>

  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      value6: 0,
      value8: 0,
      value7: ''
    }
  }
}
</script>
<style >

</style>

