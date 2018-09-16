# 프로젝트 구조

electron-vue 프로젝트 구조는 Electron App을 만들 때와  조금 다릅니다. 이전에 공식 [`vuejs-templates/webpack`](https://github.com/vuejs-templates/webpack) 설정을 사용했다면, 구조가 매우 유사하다고 느낄 것 입이다. 
이 섹션의 문서는 보일러 플레이트가 작동하는 방법의 개요와 애플리케이션을 빌드 할 때의 차이점을 설명하려고합니다. 이번 섹션의 문서는 보일러플레이트가 어떻게 작동하는지에 대한 일반적인 개요와 애플리케이션을 만들 때의 차이점을 설명합니다.

### 단일 `package.json` 설정

예전에는 두 개의 `package.json` 설정이 필요 했지만 [@electron-userland](https://github.com/electron-userland)의 노력 덕분에 [`electron-packager`](https://github.com/electron-userland/electron-packager)와 [`electron-builder`](https://github.com/electron-userland/electron-builder) 둘 다 지금은 완전히 단일 `package.json` 설정을 지원합니다.

#### `dependencies`

dependencies는 최종 프로덕션 앱에 **포함 됩니다**. 그러므로 애플리케이션에 특정 모듈이 필요하다면 여기에 설치하세요!

#### `devDependencies`

devDependencies는 최종 프로덕션 앱에 **포함되지 않습니다**. 여기에는 빌드 스크립트, `webpack` loaders 등과 같은 개발을 위해 특별히 필요한 모듈을 설치할 수 있습니다.

#### Native NPM Modules 설치하기

우리는 네이티브 npm 모듈이 electron을 고려하여 빌드되었는지 확인해야합니다. 그러기 위해 우리는 [`electron-rebuild`]를 사용 할 수 있습니다.(https://github.com/electron/electron-rebuild), 그러나 더 간단하게하기 위해, 많은 작업을 처리하는 [`electron-builder`](https://github.com/electron-userland/electron-builder) 빌드 도구를 사용하는 것을 더욱 추천합니다.

### `main` 프로세스에 관해서

개발 중에 `src/main/index.dev.js`를 주목 했을 수도 있습니다. 이 파일은 특별히 개발 용으로 사용되며 dev-tools를 설치하는 데 사용됩니다. 이 파일은 수정할 필요가 없지만 개발 요구를 확장하는 데 사용할 수 있습니다. 빌드가 끝나면 `webpack`은 `src/main/index.js`와 함께 번들을 생성하여 엔트리 파일로 만듭니다.