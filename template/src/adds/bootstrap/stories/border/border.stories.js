import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import border from './border.vue'
import borderMD from './border.md'

storiesOf('Bootstrap', module)
  .add('Border', withDocs(borderMD, () => ({
    components: {border},
    template: `
 <border/>
    `
  })))
