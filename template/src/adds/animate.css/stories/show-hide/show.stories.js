import { storiesOf } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs/vue'
import { withReadme, withDocs } from 'storybook-readme'

import index from './index.vue'
import indexMD from './index.md'
import animations from '../animations'

const stories = storiesOf('Animate.css', module)
stories.addDecorator(withKnobs)

stories.add('Show Hide', withDocs(indexMD, withReadme(indexMD, function () {
  const groupId = 'GROUP-ID1'
  const showClass = select('Show Class', animations, groupId)
  const hideClass = select('Hide Class', animations, groupId)

  return {
    components: { index },
    template: `
    <index showClass="${showClass}" hideClass="${hideClass}"  />
    `
  }
})))
