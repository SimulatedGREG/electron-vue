import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import BDiv from '../b-div.vue'
import indexMD from './index.md'

storiesOf('Bootstrap', module).add(
  'Badge',
  withDocs(indexMD, () => ({
    components: { BDiv },
    template: `
    <b-div>
 
 <h1>Example heading
    <span class="badge badge-secondary">New</span>
  </h1>

  <h3>Button</h3>
  <div>
    <button type="button" class="btn btn-primary">
      Profile
      <span class="badge badge-light">9</span>
      <span class="sr-only">unread messages</span>
    </button>
  </div>
  <h3>Colors</h3>
  <span class="badge badge-pill badge-primary">Primary</span>
  <span class="badge badge-pill badge-secondary">Secondary</span>
  <span class="badge badge-pill badge-success">Success</span>
  <span class="badge badge-pill badge-danger">Danger</span>
  <span class="badge badge-pill badge-warning">Warning</span>
  <span class="badge badge-pill badge-info">Info</span>
  <span class="badge badge-pill badge-light">Light</span>
  <span class="badge badge-pill badge-dark">Dark</span>

</b-div>
    `
  }))
)
