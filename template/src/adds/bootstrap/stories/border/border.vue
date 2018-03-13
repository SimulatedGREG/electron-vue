<template>
  <div>
    <h1>Border</h1>

    <h3>border -/top/right/bottom/left </h3>
    <div class="my-2">

      <span class="border"> </span>
      <span class="border-top"></span>
      <span class="border-right"></span>
      <span class="border-bottom"></span>
      <span class="border-left"></span>
    </div>

    <h3>Border 0/top-0/right-0/bottom-0/lef-0 </h3>
    <div class="my-2 red border-all">
      <span class="border-0"></span>
      <span class="border-top-0"></span>
      <span class="border-right-0"></span>
      <span class="border-bottom-0"></span>
      <span class="border-left-0"></span>
    </div>

    <h3>Border border-primary/secondary/success/danger/warning/info/light/dark/white </h3>
    <div class="my-2 red">
      <span class="border border-primary"></span>
      <span class="border border-secondary"></span>
      <span class="border border-success"></span>
      <span class="border border-danger"></span>
      <span class="border border-warning"></span>
      <span class="border border-info"></span>
      <span class="border  border-light"></span>
      <span class="border border-dark"></span>
      <span class="border border-white"></span>
    </div>
    <h3>Border rounded/-top/-right/-bottom/-left/circle/-0</h3>
    <div class="my-2 red">
      <span src="#" alt="#" class="rounded" />
      <span src="#" alt="#" class="rounded-top" />
      <span src="#" alt="#" class="rounded-right" />
      <span src="#" alt="#" class="rounded-bottom" />
      <span src="#" alt="#" class="rounded-left" />
      <span src="#" alt="#" class="rounded-circle" />
      <span src="#" alt="#" class="rounded-0" />
    </div>
  </div>

</template>
<style  scoped>

@import '../styles.css';

span {
  display: inline-block; /* or inline-block */
  width: 5rem;
  height: 5rem;
  margin: 0.25rem;
  background-color: #f5f5f5;
}

.border-all * {
  border: 1px solid red;
}


</style>

