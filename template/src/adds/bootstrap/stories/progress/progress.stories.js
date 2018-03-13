import { storiesOf } from '@storybook/vue'
import { withDocs } from 'storybook-readme'
import { withKnobs, number, select } from '@storybook/addon-knobs/vue'

import index from './index.vue'
import indexMD from './index.md'

const stories = storiesOf('Bootstrap', module)
stories.addDecorator(withKnobs)

stories.add(
  'Progress',
  withDocs(indexMD, function () {
    const groupId = 'GROUP-ID1'
    const num = number('Progress', 50, groupId)
    const sel = select(
      'color',
      [
        'bg-primary',
        'bg-secondary',
        'bg-success',
        'bg-danger',
        'bg-warning',
        'bg-info',
        'bg-light',
        'bg-dark',
        'bg-white'
      ],
      'a',
      groupId
    )
    return {
      components: { index },
      template: `<index classes="${sel}" :progress="${num}"/>`
    }
  })
)
