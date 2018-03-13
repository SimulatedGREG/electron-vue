import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import BDiv from '../b-div.vue'
import indexMD from './index.md'

storiesOf('Bootstrap', module).add(
  'Breadcumb',
  withDocs(indexMD, () => ({
    components: { BDiv },
    template: `
    <b-div>
 
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav>

</b-div>
    `
  }))
)
