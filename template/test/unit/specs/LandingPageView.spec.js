import Vue from 'vue'
import LandingPageView from 'renderer/components/LandingPageView'

describe('LandingPageView.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(LandingPageView)
    }).$mount()

    expect(vm.$el.querySelector('h1').textContent).to.contain('Welcome.')
  })
})
