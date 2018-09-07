# 웹팩 설정

일렉트론-뷰는 `.electron-vue/` 디렉토리 내부에 위치한 세 개의 분리된 웹팩 설정 파일로 묶여져 있습니다.
`web` 출력을 선택적으로 사용하는 것 외에도,`main`과`renderer`는 설정에서 비슷합니다.
두 노드 모두`node@7` 기능을 대상으로 `babili-preset-env`를 사용하고 `babili`를 사용하고 모든 모듈을`externals`로 취급합니다.


### `.electron-vue/webpack.main.config.js`

일렉트론의`main` 과정을 목표로합니다. 이 구성은 다소 모자라지만 일반적인 'webpack` 사례를 포함합니다.

### `.electron-vue/webpack.renderer.config.js`

전자의 `renderer` 프로세스를 목표로합니다. 
이 설정은 여러분의 Vue 어플리케이션을 처리하기 때문에`vue-loader`와 공식 `vuejs-templates/webpack` 보일러플레이트(상용구)에서 사용 가능한 많은 다른 설정들을 포함합니다.

##### 화이트-리스팅 예제

이 설정에 대해 고려해야 할 중요한 점 중 하나는 특정 모듈을 웹 팩 `외부` 로 취급하지 않도록 허용 목록에 추가 할 수 있다는 것입니다. 
이 기능이 필요한 유스 케이스는 많지 않지만, 원시`* .vue` 컴포넌트를 제공하는 Vue UI 라이브러리의 경우, 
화이트리스트가 필요하므로 `vue-loader`가 이를 컴파일 할 수 있습니다. 
또 다른 유스 케이스는 `vue`를 설정하여 전체 컴파일러 + 런타임 빌드를 가져 오는 것과 같이 webpack의 별칭을 사용하는 것입니다. 
이 때문에 `vue`는 이미 허용 된 사이트 목록에 있습니다.

> `외부(external)란?` : webpack에의해 번들되어서는 안되지만, 대신 번들 결과에 의해 요청된 종속성을 나타냅니다. [참조](https://trustyoo86.github.io/webpack/2018/01/10/webpack-configuration.html)

### `.electron-vue/webpack.web.config.js`

브라우저용 `renderer` 프로세스 소스 코드를 빌드하는 것을 목표로합니다. 
이 설정은 웹 게시가 필요한 경우 강력한 출발 기반으로 제공됩니다. 
**electron-vue는 제공되는 것 이상으로 웹 출력을 지원하지 않습니다.** 
웹 출력과 관련된 문제는 지연되거나 닫힐 가능성이 큽니다.
