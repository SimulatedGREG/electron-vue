# Vue Plugins


electron-vue에는 `vue-cli`의 스캐폴딩 중 설치 할 수 있는 다음의 `vue` 플러그인이 포함되어 있습니다.

* [axios ](https://github.com/mzabriskie/axios)\(web requests\)
* [vue-electron](https://github.com/SimulatedGREG/vue-electron) \(Vue 객체에 붙은 electron APIs\)
* [vue-router](https://github.com/vuejs/vue-router) \(단일 페이지 애플리케이션 라우트\)
* [vuex](https://github.com/vuejs/vuex) \(유동적이고 직관적이며 정확한 애플리케이션 아키텍처\)

---

### [`axios`](https://github.com/mzabriskie/axios)

> 브라우저와 Node.js를위한 Promise 기반의 HTTP 클라이언트

`vue-resource`에 익숙하다면 대부분의 `axios` API가 거의 동일하기 때문에 익숙 할 것 입니다. `main` 프로세스 스크립트에서 `axios`을 쉽게 가져 오거나 `renderer` 프로세스에서 `this.$http` & `Vue.http`를 함께 사용할 수 있습니다. 개발 중에는 `webpack-dev-server`를 통해 요청이 전달되기 때문에 CORS 관련 이슈가 발생할 수 있음을 주의하세요. 작은 예비 수단으로 BrowserWindow configuration에서 [`webSecurity`](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions)를 ​​비활성화 할 수 있지만 개발 중에 비활성화하는 것을 잊미 마세요. 프로덕션에서 비활성화하는 것은 정말 권장하지 않습니다. 최종 애플리케이션에 심각한 보안 위험을 초래할 수 있습니다.

### [`vue-electron`](https://github.com/SimulatedGREG/vue-electron)

> electron API를 Vue 객체에 덧붙여 모든 components에 액세스 할 수 있도록하는 vue 플러그인

`this.$electron`으로 electron APIs에 접근할 수 있게 만든 간단한 `vue` 플러그인, 더 이상 모든 컴포넌트에서 `electron`을 import할 필요가 없습니다.

### [`vue-router`](https://github.com/vuejs/vue-router)

> `vue-router`는 [Vue.js](http://vuejs.org/) 공식 라우터 입니다. Vue.js와 통합된 `vue-router`를 사용하여 단일 페이지 애플리케이션을 쉽게 만들 수 있습니다.

제공되는 프로젝트 구조는 공식적으로 제공되는 `vuejs-templates/webpack` 보일러플레이트 설정과 비슷하기 때문에 낯설지 않을 것입니다.

### [`vuex`](https://github.com/vuejs/vuex)

> Vuex는 Vue.js 애플리케이션을 위한 **상태 관리 패턴 + 라이브러리** 입니다. 애플리케이션의 모든 components에 대한 중앙 집중식 저장소 역할을 하며 상태는 예측 가능한 방식으로만 변경 될 수 있습니다.

제공된 프로젝트 구조는 다소 모자라지만 `vuex` 모듈 패턴을 사용하여 데이터 저장소를 구성하는 데 도움이 됩니다. 특별한 `@/store/modules/index.js`로 `vuex` store에서 모든 모듈을 한 번에 가져와 봅시다.
