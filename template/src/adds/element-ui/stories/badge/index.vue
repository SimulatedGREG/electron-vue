<template>
  <div>
    <h3>Badge</h3>
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

    <h3>Min/Max value</h3>
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">comments</el-button>
    </el-badge>
    <el-badge :value="100" :max="10" class="item">
      <el-button size="small">replies</el-button>
    </el-badge>

    <h3>Custom Value</h3>
    <el-badge value="new" class="item">
      <el-button size="small">comments</el-button>
    </el-badge>
    <el-badge value="hot" class="item">
      <el-button size="small">replies</el-button>
    </el-badge>

    <h3>Dot value</h3>
    <el-badge is-dot class="item">query</el-badge>
    <el-badge is-dot class="item">
      <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
    </el-badge>
  </div>

</template>
<style scoped>
.item {
  margin: 15px;
}

/*** Yellow background for dropdowown class mark comes from bootstrap */
.mark {
  background-color: transparent !important;
}
</style>
