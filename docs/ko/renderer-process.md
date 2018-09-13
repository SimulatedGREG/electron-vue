# Renderer Process

> Electron는 웹 페이지를 표시하는 데 Chromium을 사용하므로 Chromium의 다중 프로세스 아키텍처도 사용됩니다. Electron의 각 웹 페이지는 렌더러 프로세스라고하는 자체 프로세스에서 실행됩니다.
>
> 일반 브라우저에서 웹 페이지는 일반적으로 샌드박스 환경에서 실행되며 기본 리소스에 대한 액세스가 허용되지 않습니다. 그러나 Electron 사용자는 웹페이지에서 운영체제와 상호작용하는 Node.js API를 사용 할 수 있습니다.

[**Electron 문서**](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process)**에서**

---

## `vue`와 `vuex`에 관하여

### vue components

Vue components에 익숙하지 않은 경우, [이걸](http://vuejs.org/v2/guide/single-file-components.html) 읽어 주세요. components를 사용하면 대규모의 복잡한 애플리케이션을 보다 구조화 할 수 있습니다. 각 component에는 자체 CSS, 템플릿 및 JavaScript 기능을 캡슐화하는 기능이 있습니다.

Components `src/renderer/components`에 저장됩니다. child components를 만들 때 parent component의 이름이 있는 새 폴더 안에 배치하는 것이 일반적인 구조 관례 입니다. 이 관례는 특히 다른 경로로 조정할 때 특히 유용합니다.

```
src/renderer/components
├─ ParentComponentA
│  ├─ ChildComponentA.vue
│  └─ ChildComponentB.vue
└─ ParentComponentA.vue
```

### vue routes

`vue-router` 대한 자세한 내용은 [여기](https://github.com/vuejs/vue-router)를 클릭하세요. 간단히 말해, Electron 애플리케이션을 만들 때, 단일 페이지 애플리케이션을 만드는 것이 훨씬 실용적이므로 `vue-router`를 사용하는 것이 좋습니다. 많은 수의 BrowserWindows를 관리하고 모든 정보를 교환하고 싶습니까? 아마도 그렇지 않을 겁니다.

Routes는 `src/renderer/router/index.js`에 저장되며 다음과 같이 정의 됩니다.

```js
{
  path: '<routePath>',
  name: '<routeName>',
  component: require('@/components/<routeName>View')
}
```

`<routePath>`와 `<routeName>`은 둘 다 변수 입니다. 이러한 routes는 `src/renderer/App.vue`에서 `<router-view>` 지시문을 사용하여 components 트리에 연결됩니다.

##### Notice

`vue-router`를 사용하는 경우, [**HTML5 History Mode**](http://router.vuejs.org/en/essentials/history-mode.html)를 사용하지 마세요. 이 모드는 http 프로토콜을 통해 파일을 제공하기 위한 것이고 프로덕션 빌드에서 Electron이 파일을 제공하는 `file` 프로토콜에서는 제대로 작동하지 않습니다. 디폴트 `hash` 모드는 필요한 것 입니다.

### vuex modules

`vuex`를 설명하는 것은 쉬운 일이 아니기 때문에 어떤 문제를 해결하려고하고 있는지, 어떻게 작동 하는지를 더 잘 이해하기 위해 [이걸](https://vuex.vuejs.org/guide/) 읽어 보시기 바랍니다.

electron-vue는 `vuex`의 모듈 구조를 이용하여 여러 데이터 stores를 만들고 `src/renderer/store/modules`에 저장합니다.

여러 데이터 저장소를 보유하면 조직에 적합 할 수 있지만 각각을 가져와야하는 것은 귀찮습니다. 그러나 `src/renderer/store/modules/index.js`가 우리를 위해 더러운 작업을하기 때문에 무서워하지 마세요! 이 작은 스크립트는 `src/renderer/store/index.js`가 모든 모듈을 한 번에 가져올 수 있도록합니다. 모든 것이 이해가되지 않는다면, 주어진 Counter.js 모듈을 쉽게 복제 할 수 있다는 것을 알면 "마술처럼" 로드 될 것 입니다.
