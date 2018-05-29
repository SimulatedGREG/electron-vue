import { storiesOf } from '@storybook/vue'
import { withKnobs, text, color, number } from '@storybook/addon-knobs/vue'
import { withReadme, withDocs } from 'storybook-readme'

import index from './index.vue'
import indexMD from './index.md'

const stories = storiesOf('Element UI', module)
stories.addDecorator(withKnobs)

stories.add('Icons', withDocs(indexMD, withReadme(indexMD, function () {
  const groupId = 'GROUP-ID1'
  const search = text('Search', '', groupId)

  const size = number('Size (px)', 56, groupId)
  const col = color('Color', '#495057', groupId)
  const back = color('Background', '#fff', groupId)
  return {
    components: { index },
    template: `
    <index search="${search}" size="${size}" color="${col}" background="${back}"/>
    `
  }
})))
