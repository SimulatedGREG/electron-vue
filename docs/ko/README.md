![](../images/logo.png)

> vue로 구축 된 electron 애플리케이션을 만들기 위한 보일러 플레이트

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

## 개요

이 프로젝트의 목적은 vue를 사용하여 Electron 앱을 수동으로 설정해야 할 필요성을 없애는 것 입니다. electron-vue은 스캐폴딩(발판)을 위한 `vue-cli`, `vue-loader`이 있는 `webpack`, `electron-packager` 또는 `electron-builder`, `vue-router`, `vuex` 등과 같이 가장 많이 사용되는 플러그인을 사용합니다.

#### Check out the detailed documentation [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

이 보일러플레이트에서 찾을 수있는 것...

* **단일** `package.json` 설정으로된 기본 프로젝트 구조(다른 프로젝트는 두개 package.json 파일로 구성되어 있습니다.)
* 상세한 [문서](https://simulatedgreg.gitbooks.io/electron-vue/content/)
*  [vue-cli](https://github.com/vuejs/vue-cli)를 사용한 프로젝트 스캐폴딩
* Vue 플러그인을 사용한 준비가 되어 있습니다. \([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex)\)\*
* 설치된 [vue-devtools](https://github.com/vuejs/vue-devtools) 과 개발을 위한 [devtron](https://github.com/electron/devtron) 도구 
* [electron-packager](https://github.com/electron-userland/electron-packager) 또는 [electron-builder](https://github.com/electron-userland/electron-builder)를 사용하여 애플리케이션을 쉽게 패키징 할 수 있는 기능\*
* [electron-builder](https://github.com/electron-userland/electron-builder)를 이용한 자동화 배포를 위한 `appveyor.yml` 과  `.travis.yml`\*
* 브라우저 용 웹 출력 기능
* 편리한 [NPM scripts](https://simulatedgreg.gitbooks.io/electron-vue/content/en/npm_scripts.html)
* 핫 모듈 교체로 [webpack](https://github.com/webpack/webpack) 과 [vue-loader](https://github.com/vuejs/vue-loader) 사용
* electron의 메인 프로세스에서 작업 할 때 프로세스 재시작
* [vue-loader](https://github.com/vuejs/vue-loader/)를 사용한 HTML/CSS/JS 전처리기 지원
* 기본적으로 [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/)으로된 ES6 
* [`babili`](https://github.com/babel/babili)를 사용하여 ES5로 완전히 내릴 필요성을 제거
* ESLint \([`standard`](https://github.com/feross/standard) 와 [`airbnb-base`](https://github.com/airbnb/javascript) 지원\)\*
* \(Karma + Mocha 로\) 단위 테스팅 *
* \(Spectron + Mocha 로\) End-to-end 테스팅 \*

\* vue-cli 스캐폴딩 중 사용자 정의 가능

### 시작하기

이 보일러플레이트는 [vue-cli](https://github.com/vuejs/vue-cli)를 위한 템플릿으로 제작되었으며 최종 스캐폴드 앱을 사용자 정의 할 수 있는 옵션을 포함하고 있습니다. `node@^7` 이상의 노드를 사용해야 합니다. 또한 electron-vue는 의존성을 훨씬 잘 처리하고 `yarn clean`으로 최종 빌드 크기를 줄일 수 있는 [`yarn`](https://yarnpkg.org) 패키지 매니저를 공싱적으로 추천합니다.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

##### Windows 사용자 입니까?

electron 및 기타 의존성에 필요한 모든 빌드 도구가 있는 지 확인하려면 [**A Note for Windows Users**](https://simulatedgreg.gitbooks.io/electron-vue/content/ko/getting_started.html#a-note-for-windows-users)를 확인하세요.

##### Vue 1을 사용하고 싶나요?

 `1.0` 브랜치를 가리키기만 하세요. Please note that electron-vue는 `vue@^1`의 사용을 공식적으로 권장하지 않습니다. 따라서 프로젝트 구조, 기능 및 문서는 이러한 변경 사항을 반영합니다.([**legacy documentation**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs)).

```bash
vue init simulatedgreg/electron-vue#1.0 my-project
```

### 다음 단계

[documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/)를 면밀히 살펴보세요. 이 문서에서 구성, 프로젝트 구조, 앱 빌드에 대한 유용한 정보가 있습니다. 또한 편리한 [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/en/faqs.html) 섹션도 있습니다.


## electron-vue로 만듬
electron-vue로 만들어진 몇 가지 놀라운 프로젝트를 살펴보세요. 여러분의 프로젝트가 목록에 추가를 원하시면 언제든지 pull request를 보내 주시기 바랍니다.

* [**Surfbird**](https://github.com/surfbirdapp/surfbird): A Twitter client built on Electron and Vue
* [**Lulumi-browser**](https://github.com/qazbnm456/lulumi-browser): Lulumi-browser is a light weight browser coded with Vue.js 2 and Electron
* [**Space-Snake**](https://github.com/ilyagru/Space-Snake): A Desktop game built with Electron and Vue.js.
* [**Forrest**](https://github.com/stefanjudis/forrest): An npm scripts desktop client
* [**miikun**](https://github.com/hiro0218/miikun): A Simple Markdown Editor
* [**Dakika**](https://github.com/raj347/Dakika): A minute taking application that makes writing minutes a breeze
* [**Dynamoc**](https://github.com/ieiayaobb/dynamoc): Dynamoc is a GUI client for dynamodb-local, dynalite and AWS dynamodb
* [**Dockeron**](https://github.com/dockeron/dockeron): A dockeron project, built on Electron + Vue.js for Docker
* [**Easysubs**](https://github.com/matiastucci/easysubs): Download subtitles in a very fast and simple way
* [**adminScheduler**](https://github.com/danieltoorani/adminScheduler): An application leveraging electron for cross platform compatibility, Vue.js for lightning fast UI and full-calendar.io to deliver a premium calendar interface.
* [**Backlog**](https://github.com/czytelny/backlog): Simple app for storing TODOs, ideas or backlog items. You can organize them with boards. Sleek flow. Built with Electron + Vue.js + iView
* [**Opshell**](https://github.com/ricktbaker/opshell): Ops tool to make life easier working with AWS instances.
* [**GitHoard**](https://github.com/jojobyte/githoard): Hoard git repositories with ease.
* [**Data-curator**](https://github.com/ODIQueensland/data-curator): Share usable open data.
* [**Bookmark**](https://github.com/mrgodhani/bookmark): Desktop app to manage bookmarked links using Atom Electron and Vue.js
* [**Uber Run**](https://github.com/break-enter/uberrun): Simple automation desktop app to download and organize your tax invoices from Uber.
* [**Netsix**](https://github.com/pulsardev/netsix): Share videos with your friends in a real peer-to-peer manner using WebRTC.
* [**code-notes**](https://github.com/lauthieb/code-notes): A simple code snippet manager for developers built with Electron & Vue.js.
* [**Pomotroid**](https://github.com/Splode/pomotroid): A simple and visually-pleasing Pomodoro timer
* [**MarkText**](https://github.com/marktext/marktext): Mark Text is a realtime Markdown Editor.
* [**vue-design**](https://github.com/L-Chris/vue-design): the best website visualization builder with Vue and Electron
* [**ImapSync Client**](https://github.com/ridaamirini/ImapSyncClient): It's only an Internet Message Access Protocol Synchronization Client
* [**Hve**](https://github.com/hellohve/hve): A static blog client tool you may like.
* [**MarkdownFox**](https://github.com/lx4r/markdownfox): A simple Markdown viewer with auto update and PDF export.
* [**Cleaver**](https://getcleaver.com/): Cleaver helps you provision servers ready for deploying your web apps with zero downtime - for free!
