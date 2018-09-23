# 시작하기

## 스캐폴딩

이 보일러플레이트는 [vue-cli](https://github.com/vuejs/vue-cli) 템플릿으로 제작되었으며 최종 스캐폴드 된 애플리케이션을 사용자 정의 하는 옵션을 포함합니다. `node@^7` 또는 그 이상의 버전을 사용해야합니다. 또한 electron-vue는 의존성을 훨씬 잘 처리하고 `yarn clean`으로 최종 빌드 크기를 줄일 수 있는  [`yarn`](https://yarnpkg.org) 패키지 매니저를 공식적으로 추천합니다.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

#### electron에 관해서

선택사항이지만 프로젝트를 스캐폴딩 후에 electron 버전을 잠그는 것을 권장합니다.이렇게하면 같은 프로젝트에서 작업하는 다른 개발자가 다른 버전으로 개발하는 것을 방지 할 수 있습니다. Electron은 릴리스를 자주 사용하므로 기능이 항상 변경 될 수 있습니다. [More Info](http://electron.atom.io/docs/tutorial/electron-versioning/).

#### Windows 사용자를 위한 노트

`node-gyp`에 대한 `npm install` 중에 오류가 발생하면 시스템에 적절한 빌드 도구가 설치되어 있지 않을 가능성이 높습니다. 빌드 도구에는 Python 및 Visual Studio와 같은 항목이 포함됩니다. [@felixrieseberg](https://github.com/felixrieseberg)에게 감사드립니다. 이 프로세스를 단순화하는 데 도움이 되는 몇 가지 패키지가 있습니다.

우리가 점검해야 할 첫 번째 항목은 npm 버전이 구식이 아닌지 확인하는 것입니다. [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade)를 사용하여 수행 할 수 있습니다. 만약 yarn을 사용한다면, 여러분은 이러한 확인을 건너뛸 수 있습니다.

완료되면 필요한 빌드 도구를 이어서 설정할 수 있습니다. [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools)를 사용하면 대부분의 더러운 작업이 완료됩니다. 전역으로 설치하면 Visual C ++ 패키지, Python 등을 차례로 설치하게 됩니다.

이 시점에서 성공적으로 설치해야하지만, 그렇지 않은 경우에는 Visual Studio를 새로 설치해야합니다. 이는 electron-vue의 문제가 아님에 주의하세요. \(Windows는 때로는 어려울 수 있습니다. ¯\\\_\(ツ\)\_/¯\).
