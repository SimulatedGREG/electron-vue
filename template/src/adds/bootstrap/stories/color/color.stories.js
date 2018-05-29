import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import color from './color.vue'
import colorMD from './color.md'

storiesOf('Bootstrap', module)
  .add('Color', withDocs(colorMD, () => ({
    components: {color},
    template: `
 <color/>
    `
  })))
