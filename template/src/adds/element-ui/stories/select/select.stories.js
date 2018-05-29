import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'

import index from './index.vue'
import indexMD from './index.md'
const stories = storiesOf('Element UI', module)

stories.add('Select', withDocs(indexMD, function () {
  return {
    components: { index },
    template: `
    <index/>
    `
  }
}))
