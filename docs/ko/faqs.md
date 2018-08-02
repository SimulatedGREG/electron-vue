# FAQs

* [`npm run dev`를 실행 한 후 왜 일렉트론 애플리케이션이 비어 있습니까?](#why-is-my-electron-app-blank-after-running-npm-run-dev)
* [일렉트론 응용 프로그램에서 파일 탐색기가 나타나는 이유는 무엇입니까?](#why-does-my-electron-app-show-a-file-explorer)
* [`vue-devtools`/`devtron`이 누락 된 이유는 무엇입니까?](#why-is-vue-devtoolsdevtron-missing)
* [정적 자산은 어디에 두어야합니까?](#where-do-i-put-static-assets)
* [`npm run lint`가 오류로 끝나는 이유는 무엇입니까?](#why-did-npm-run-lint-end-with-an-error)
* [웹 브라우저에서 내 앱을로드 할 수없는 이유는 무엇입니까?](#why-cant-i-load-my-app-in-a-web-browser)
* [`jquery`를 어떻게 가져 옵니까?](#how-do-import-jquery)
* [`main` 프로세스를 어떻게 디버그 할 수 있습니까?](#how-can-i-debug-the-main-process)

---

## `npm run dev`를 실행 한 후 왜 일렉트론 애플리케이션이 비어 있습니까?

#### TL;DR

`webpack-dev-server`를 조작 할 수있는 개인 **프록시** 설정이 없는지 확인하십시오.

## 일렉트론 응용 프로그램에서 파일 탐색기가 나타나는 이유는 무엇입니까?

#### TL;DR

`src/renderer`에  오류\(s\)가 있습니다. 콘솔을 점검하고, 오류를 수정 한 다음,`Command Or Control+R`을 사용하여 일렉트론을 새로 고칩니다.

##### Long answer

오류\(s\)가 `src/renderer`에 존재하면, 이것은 처음 실행될 때 ESLint와 충돌을 일으킵니다. 차례로 `HtmlWebpackPlugin`이 `index.html`을 만들지 못하게하는 INVALID 웹팩`renderer.js`가 생성됩니다. `webpack-dev-server`는`index.html` 서비스를받을 준비가되어 있지 않기 때문에 서버는 파일 탐색기로 돌아갑니다.

## `vue-devtools`/`devtron`이 누락 된 이유는 무엇입니까?

처음 시작할 때 개발자 도구 패널을 닫았다가 다시 열어야합니다. 또한 터미널 검사에서 설치 중에 발생할 수있는 오류 메시지가 있는지 확인하십시오.

## 정적 자산은 어디에 두어야합니까?

[**Using Static Assets**](/using-static-assets.md)

## `npm run lint`가 오류로 끝나는 이유는 무엇입니까?

eslint의 기본 속성은 linting 에러를 콘솔에 출력하는 것이며, 발견 된 경우 스크립트는 0이 아닌 exit \(npm 에러를 생성합니다\)로 끝납니다. 이것은 정상적인 동작입니다.

## 웹 브라우저에서 내 앱을로드 할 수없는 이유는 무엇입니까?

[\#195](https://github.com/SimulatedGREG/electron-vue/issues/195)

## `jquery`를 어떻게 가져 옵니까?

`부트 스트랩 (bootstrap)`을 사용하고 싶다면, 바로 거기에서 멈춰야 할 것입니다. 동일한 환경에서`vue`와`jquery`를 모두 사용하는 것은 나쁜 습관이고 두 프레임 워크가 서로 충돌하게됩니다. 자바 스크립트 기능을 위해`vue`를 사용하는`부트 스트랩 (bootstrap)` 대안을 사용하는 것이 좋습니다. 몇 가지 권장 사항은 [`bootstrap-vue`](https://github.com/bootstrap-vue/bootstrap-vue)와 [`vue-strap`] (https://github.com/yuche/vue-strap) . 어떤 이유로 든`jquery`를 사용해야 만합니다.`ProvidePlugin`에 관한`webpack`의 문서에서 지침을 찾거나 [\#192](https://github.com/SimulatedGREG/electron-vue/issues/192)를 참조하십시오. .

## `main` 프로세스를 어떻게 디버그 할 수 있습니까?

`electron @ ^ 1.7.2`을 사용하는 경우 Chrome을 열고 `chrome://inspect`로 이동 한 다음 응용 프로그램이 개발 모드에서 실행되는 동안 원격 일렉트론 프로세스를 열 수 있습니다.

[Electron Documentation](https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md)

