import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import dropdown from './dropdown.vue'
import indexMD from './index.md'

storiesOf('Bootstrap', module).add(
  'Dropdown',
  withDocs(indexMD, () => ({
    components: { dropdown },
    template: `
    <dropdown/>
    `
  }))
)
