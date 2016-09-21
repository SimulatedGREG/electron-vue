import Vue from 'vue'
import LandingPageView from 'src/components/LandingPageView'

describe('LandingPageView.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      {{#if_eq vueVersion 'next'}}
      el: document.createElement('div'),
      render: h => h(LandingPageView)
      {{else}}
      components: { LandingPageView },
      template: `
        <div>
          <landing-page-view></landing-page-view>
        </div>
      `
      {{/if_eq}}
    }).$mount()
    expect(vm.$el.querySelector('h1').textContent).toContain('Welcome.')
  })
})
