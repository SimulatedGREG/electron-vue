import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'
import { withReadme, withDocs } from 'storybook-readme'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { specs, describe, it } from 'storybook-addon-specifications'

import {expect} from 'chai'

import MyButton from './MyButton.stories.vue'
import MyButtonMD from './MyButton.md'
import Welcome from './Welcome.stories.vue'

storiesOf('Welcome', module)
  .add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') }
  }))

const stories = storiesOf('Welcome/Examples', module)
stories.addDecorator(withKnobs)

stories
  .add('with text', () => ({
    components: { MyButton },
    template: '<div class="cd-border" @click="action">Hello Button </div>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('story Note', withNotes(`
  <h2>My notes on emojies</h2>
  <em>It's not all that important to be honest, but..</em>
  Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
`)(() => ({
    components: { MyButton },
    template: '<my-button > <b>Moj item a </b>Item </my-button>'
  })))
  .add('Knobs example', function () {
    const groupId = 'GROUP-ID1'
    const groupId2 = 'GROUP-ID2'
    const name = text('Name', 'Arunoda Susiripala', groupId)
    const bool = boolean('Bool', true, groupId)
    const num = number('Number', 1, groupId2)
    return {
      components: { MyButton },
      template: `<div class="m-1 p-2 border  border-blue-300"> <b>Example of:</b> ${name}, with ${bool}, and ${num}</div>`
    }
  })
  .add('With a documentation', withDocs(MyButtonMD, () => ({
    components: { MyButton },
    template: '<my-button class="p-5 border"   > Example </my-button>'
  })))
  .add('With readme', withReadme(MyButtonMD, () => ({
    components: { MyButton },
    template: '<my-button class="p-5 border"   > Example </my-button>'
  })))
  .add('Action click example', () => ({
    components: { MyButton },
    template: '<my-button class="p-5 border" @click.native.stop="log"  > Example with click </my-button>',
    methods: {
      log: action('log1')
    }
  }))

stories.add('Test example', function () {
  let story = {
    components: { MyButton },
    template: '<my-button class=\'border\'  @click.native.stop="log"  > Example with click </my-button>',
    methods: {
      log: action('log1')
    }
  }

  specs(() => describe('Hello World', function () {
    let Cmp = Vue.extend(MyButton)
    let vm = (new Cmp()).$mount()

    it('equals messages to ["Cat"]', () => {
      expect(vm.messages).to.eql(['Cat'])
    })
  }))

  return story
})
