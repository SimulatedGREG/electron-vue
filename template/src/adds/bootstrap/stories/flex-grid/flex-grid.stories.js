import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import BDiv from '../b-div.vue'
import flexGrid from './flex-grid.md'

storiesOf('Bootstrap', module)
  .add(
    'Flex Grid',
    withDocs(flexGrid, () => ({
      components: { BDiv },
      template: `
    <div>
    <h2>flex-wrap</h2>
  <b-div class="red d-flex flex-wrap" >
      <b-div class="blue p-2">Flex item 1</b-div>
      <b-div class="blue p-2">Flex item 2</b-div>
      <b-div class="blue p-2">Flex item 3</b-div>
      <b-div class="blue p-2">Flex item 4</b-div>
      <b-div class="blue p-2">Flex item 5</b-div>
      <b-div class="blue p-2">Flex item 6</b-div>
      <b-div class="blue p-2">Flex item 7</b-div>
      <b-div class="blue p-2">Flex item 8</b-div>
      <b-div class="blue p-2">Flex item 9</b-div>
      <b-div class="blue p-2">Flex item 10</b-div>
      <b-div class="blue p-2">Flex item 11</b-div>
</b-div>

<h2>flex-row</h2>
<b-div class="red mt-2 d-flex flex-row">
  <b-div class="blue p-2">Flex item 1</b-div>
  <b-div class="blue p-2">Flex item 2</b-div>
  <b-div class="blue p-2">Flex item 3</b-div>
</b-div>


<h2>flex-row-reverse</h2>
<b-div class="red mt-2 d-flex flex-row-reverse">
  <b-div class="blue p-2">Flex item 1</b-div>
  <b-div class="blue p-2">Flex item 2</b-div>
  <b-div class="blue p-2">Flex item 3</b-div>
</b-div>

</div>
    `
    }))
  )
