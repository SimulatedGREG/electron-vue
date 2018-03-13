import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import cssGrid from './cssgrid.vue'
import cssgridMD from './cssgrid.md'

storiesOf('CSS', module).add('CSS Grid', withDocs(cssgridMD, () => ({
  components: {cssGrid},
  template: `
 <css-grid/>
    `
})))
