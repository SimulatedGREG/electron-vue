<template>
  <div>
    <h3>Input</h3>
    <el-input placeholder="Please input" v-model="input"></el-input>

    <h3>Input Disabled</h3>
    <el-input placeholder="Please input" v-model="input1" :disabled="true">
    </el-input>

    <h3>Input Clearable</h3>
    <el-input placeholder="Please input" v-model="input10" clearable>
    </el-input>

    <h3>With Icon</h3>
    <el-input placeholder="Pick a date" suffix-icon="el-icon-date" v-model="input2">
    </el-input>

    <el-input placeholder="Type something" v-model="input23">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>

    <h3>Textarea</h3>
    <el-input type="textarea" :rows="2" placeholder="Please input" v-model="textarea">
    </el-input>

    <h3>Template slot</h3>
    <el-input placeholder="Please input" v-model="input3">
      <template slot="prepend">Http://</template>
    </el-input>

    <el-input placeholder="Please input" v-model="input4">
      <template slot="append">.com</template>
    </el-input>

    <h3>Input sizes</h3>
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

    <h3>Number</h3>
    <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>

    <h3>Number Size</h3>
    <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num1"></el-input-number>
    <el-input-number size="small" v-model="num1"></el-input-number>
    <el-input-number size="mini" v-model="num1"></el-input-number>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input10: '',
      input2: '',
      input23: '',

      input3: '',
      input4: '',

      input6: '',
      input7: '',
      input8: '',
      input9: '',

      textarea: '',
      num1: 0
    }
  }
}
</script>
<style >
.el-input {
  margin-bottom: 2rem;
  max-width: 300px;
}
</style>

