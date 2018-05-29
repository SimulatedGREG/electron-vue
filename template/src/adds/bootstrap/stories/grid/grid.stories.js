import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import BDiv from '../b-div.vue'
import gridMD from './grid.md'

storiesOf('Bootstrap', module)
  .add('Grid', withDocs(gridMD, () => ({
    components: {BDiv},
    template: `
 <b-div class="red container p-4">
 
  <b-div class="blue row">
    <b-div class="blue col">
      One of three columns One of three columns One of three columns One of three columns One of three columns 
    </b-div>
    <b-div class="blue col-2">
      One of three columns
    </b-div>
    <b-div class="blue col">
      One of three columns
    </b-div>
  </b-div>

  <b-div class="blue row mt-2">
  <b-div class="blue col">
    1 of 2
  </b-div>
  <b-div class="blue col">
    2 of 2
  </b-div>

</b-div>
</b-div>
    `
  })))
