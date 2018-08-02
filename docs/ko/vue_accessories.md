# Vue 플러그인

electron-vue에는 `vue-cli` 뼈대구축 중에 설치할 수있는 다음과 같은`vue` 플러그인이 있습니다 ...

* [axios ](https://github.com/mzabriskie/axios)\(웹 요청\)
* [vue-electron](https://github.com/SimulatedGREG/vue-electron) \(Vue 객체에 일렉트론의 API 첨부\)
* [vue-router](https://github.com/vuejs/vue-router) \(단일 페이지 응용 프로그램 경로\)
* [vuex](https://github.com/vuejs/vuex) \(flux에 영감을받는 애플리케이션 아키텍처\)

---

### [`axios`](https://github.com/mzabriskie/axios)

> Promise based HTTP client for the browser and node.js

If you are familiar with `vue-resource`, then `axios` will feel very familiar as most of the API is nearly identical. You can easily import `axios` in your `main` process scripts or use with `this.$http` & `Vue.http` in the `renderer` process. Please note that during development you may run into issues with CORS since requests are passed through `webpack-dev-server`. As a small workaround, you can disable [`webSecurity`](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions) within the BrowserWindow configuration, but please do remember to only disable this during development. Disabling this in production is highly not recommended and can create a serious security risk for your final application!

`vue-resource`에 익숙하다면, 대부분의 API가 거의 동일하기 때문에 `axios`는 매우 익숙 할 것입니다.
`main` 프로세스 스크립트에서`axios` 파일을 쉽게 import하거나`renderer` 프로세스에서`this. $ http` &`Vue.http`와 함께 사용할 수 있습니다. 
개발 중에는`webpack-dev-server`를 통해 요청이 전달되기 때문에 CORS 관련 문제가 발생할 수 있습니다. 
작은 해결 방법으로 BrowserWindow 구성에서 [`webSecurity`](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions)를 비활성화 할 수 있지만 개발 중에는 비활성화하는 것을 잊지 마십시오.
프로덕션 환경에서이 기능을 비활성화하면 권장하지 않으므로 최종 응용 프로그램에 심각한 보안 위험이 발생할 수 있습니다!

### [`vue-electron`](https://github.com/SimulatedGREG/vue-electron)

> The vue plugin that attaches electron APIs to the Vue object, making them accessible to all components.

필요한 모든 컴포넌트에 더 이상 매번 `electron`으로 가져올 필요가없이 `$this`로 쉽게 일렉트론 API에 액세스 할 수있게 해주는 간단한 `vue` 플러그인입니다.

### [`vue-router`](https://github.com/vuejs/vue-router)

> `vue-router` is the official router for [Vue.js](http://vuejs.org/). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

제공된 프로젝트 구조는 공식 `vuejs-templates/webpack` 보일러 플레이트에 제공된 설정에 익숙해야합니다.

### [`vuex`](https://github.com/vuejs/vuex)

> Vuex is a **state management pattern + library **for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

제공된 프로젝트 구조는 다소 모자라지만`vuex` 모듈 패턴을 사용하여 데이터 저장소를 구성하는 데 도움을줍니다.
여분의 `@/store/modules/index.js`는 `vuex` 스토어에서 모든 모듈을 한 번에 가져옵니다.