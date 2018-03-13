import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import index from './index.vue'
import indexMD from './index.md'

storiesOf('Bootstrap', module)
  .add('Margin Size', withDocs(indexMD, () => ({
    components: {index},
    template: `<index/>`
  })))
