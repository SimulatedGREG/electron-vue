<template>
  <div>
    <h3>Radio</h3>
    <div>
      <el-radio v-model="radio1" label="1">Option A</el-radio>
      <el-radio v-model="radio1" label="2">Option B</el-radio>
    </div>
    <div>
      <el-radio disabled v-model="radio1" label="disabled">Option A</el-radio>
      <el-radio disabled v-model="radio1" label="selected and disabled">Option B</el-radio>
    </div>
    <h3>Radio Group </h3>
    <div>
      <el-radio-group v-model="radio3">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" size="medium">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio5" size="small">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington" disabled></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio6" disabled size="mini">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </div>

    <h3>Radio with borders </h3>
    <div>
      <el-radio v-model="radio7" label="1" border>Option A</el-radio>
      <el-radio v-model="radio7" label="2" border>Option B</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio v-model="radio8" label="1" border size="medium">Option A</el-radio>
      <el-radio v-model="radio8" label="2" border size="medium">Option B</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio9" size="small">
        <el-radio label="1" border>Option A</el-radio>
        <el-radio label="2" border disabled>Option B</el-radio>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio10" size="mini" disabled>
        <el-radio label="1" border>Option A</el-radio>
        <el-radio label="2" border>Option B</el-radio>
      </el-radio-group>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: '1',
      radio3: 'New York',
      radio4: 'New York',
      radio5: 'New York',
      radio6: 'New York',
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: '1'
    }
  }
}
</script>
