<template>
  <div>
    <h3>Slider</h3>
    <div class="block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Customized initial value</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Hide Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Format Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Disabled</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>

    <h3>Discrete values</h3>
    <div class="block">
      <span class="demonstration">Breakpoints not displayed</span>
      <el-slider v-model="value6" :step="10">
      </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">Breakpoints displayed</span>
      <el-slider v-model="value7" :step="10" show-stops>
      </el-slider>
    </div>

    <h3>With input box values</h3>
    <el-slider v-model="value8" show-input>
    </el-slider>

    <h3>Range selection</h3>
    <el-slider v-model="value9" range show-stops :max="10">
    </el-slider>

    <h3>Vertical</h3>
    <el-slider v-model="value10" vertical height="200px">
    </el-slider>

  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: [4, 8],
      value10: 34
    }
  }
}
</script>
<style >

</style>

