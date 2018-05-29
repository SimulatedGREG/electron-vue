import { storiesOf } from '@storybook/vue'
import { withKnobs, text, color, number } from '@storybook/addon-knobs/vue'
import { withReadme, withDocs } from 'storybook-readme'

import FontAwesome from './font-awesome.vue'
import indexMD from './readme.md'

const stories = storiesOf('Font Awesome', module)
stories.addDecorator(withKnobs)

stories.add('List', withDocs(indexMD, withReadme(indexMD, function () {
  const groupId = 'GROUP-ID1'
  const search = text('Search', '', groupId)

  const size = number('Size (px)', 56, groupId)
  const col = color('Color', '#495057', groupId)
  const back = color('Background', '#fff', groupId)
  return {
    components: { FontAwesome },
    template: `
    <font-awesome search="${search}" size="${size}" color="${col}" background="${back}"/>
    `
  }
})))
