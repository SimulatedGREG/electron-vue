# Webpack Configurations

electron-vue에는 `.electron-vue/` 디렉토리에 위치한 별도의 webpack 설정 파일이 세개가 있습니다. `web` 출력의 선택적 사용을 제외하고, `main`과 `renderer`는 비슷한 설정 입니다. 둘 다 모든 모듈을 `externals`로 처리하고 babil을 사용하며 `node@7` 기능을 타겟으로 `babel-preset-env`을 사용합니다.

### `.electron-vue/webpack.main.config.js`

electron의 `main` 프로세스가 타겟입니다. 이 구성은 다소 모자라지만 일반적인 `webpack` 관례를 포함합니다.

### `.electron-vue/webpack.renderer.config.js`

electron의 `renderer` 프로세스가 타겟입니다. 이 configurationd은 Vue 애플리케이션을 다룹니다. 그래서 `vue-loader`와 공식 `vuejs-templates/webpack` 보일러플레이트에서 사용 가능한 많은 configurations를 포함합니다.

##### White-listing Externals

이 설정에 대해 고려해야 할 중요한 점 중 하나는 webpack `externals`로 취급하지 않는 특정 모듈을 whitelist에 추가 할 수 있다는 점입니다. 이 기능이 필요한 use case는 많지 않지만 가공하지 않는 `*.vue` components를 제공하는 Vue UI 라이브러리의 경우 허용목록(whitelist)에 있어야합니다. 그래야 `vue-loader`은 컴파일 할 수 있습니다. 또 다른 use case는 전체 컴파일러 + 런타임 빌드를 가져오기 위해 vue를 설정하는 것과 같은 webpack `alias`을 사용하는 것입니다. 이 때문에 `vue`는 이미 허용목록에 있습니다.

### `.electron-vue/webpack.web.config.js`

브라우저를 위한 `renderer` 프로세스 소스 코드 빌드가 타겟입니다. 이 config은 웹 배포가 필요한 경우 강력한 시작 기반을 제공합니다. **electron-vue은 제공되던 웹 출력을 더 이상 지원하지 않습니다.** 웹 출력과 관련된 문제는 지연되거나 닫힐 가능성이 높습니다.