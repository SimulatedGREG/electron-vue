import Vue from 'vue'
import LandingPageView from 'src/components/LandingPageView'

describe('LandingPageView.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      components: { LandingPageView },
      template: `
        <div>
          <landing-page-view></landing-page-view>
        </div>
      `
    }).$mount()

    expect(vm.$el.querySelector('h1').textContent).to.contain('Welcome.')
  })
})
