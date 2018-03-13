<template>
  <div>
    <h3>Form</h3>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

    <h3>Inline</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>

    <h3>Align Position</h3>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>

    <h3>Validation</h3>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Sponsorship"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formInline: {
        user: '',
        region: ''
      },

      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },

      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          }
        ],
        region: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change'
          }
        ],
        resource: [
          {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change'
          }
        ],
        desc: [
          {
            required: true,
            message: 'Please input activity form',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style  scoped>
.el-form {
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
}
</style>

