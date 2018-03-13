<template>
  <div>
    <h3>Text align</h3>

    <div class="red">
      <p class="text-left">Left aligned text on all viewport sizes.</p>
      <p class="text-center">Center aligned text on all viewport sizes.</p>
      <p class="text-right">Right aligned text on all viewport sizes.</p>
    </div>

    <h3>Text truncate</h3>
    <div class="row red" style="width:200px;">
      <div class="text-truncate">
        Praeterea iter est quasdam res quas ex communi.
      </div>
    </div>

    <h3>Text format</h3>
    <div class="red ">
      <p class="text-lowercase">Lowercased text. </p>
      <p class="text-uppercase">Uppercased text.</p>
      <p class="text-capitalize">CapiTaliZed text.</p>

      <p class="font-weight-bold">Bold text.</p>
      <p class="font-weight-normal">Normal weight text.</p>
      <p class="font-weight-light">Light weight text.</p>
      <p class="font-italic">Italic text.</p>

    </div>

  </div>
  </div>
</template>
<style  scoped>
@import '../styles.css';
</style>

