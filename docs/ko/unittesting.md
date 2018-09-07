# 단위 테스트

electron-vue는 [Karma](https://karma-runner.github.io/1.0/index.html) 테스트 러너와 [Mocha](https://mochajs.org/) 테스트 프레임 워크 \( 단위 테스트를 위해 [Chai](http://chaijs.com/) \)와 함께.

Mocha와 Chai는 각각`karma-mocha`와`karma-chai`를 사용하여 통합되어 있으므로`expect`와 같은 모든 API는 테스트 파일에서 전 세계적으로 사용 가능합니다.

### 테스트 실행

```bash
# Begin Karma
npm run unit
```

### 파일 구조

```
my-project
├─ test
|  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ karma.conf.js
```

**대부분의 경우 **`index.js`**와 **`karma.conf.js`**를 무시하고 **`specs/`** 작성에만 집중할 수 있습니다.**

#### `specs/`

이 디렉토리 안에는 실제 테스트가 작성되는 곳이 있습니다. webpack의 힘으로 ES2015 및 지원되는 로더에 대한 모든 액세스 권한을 갖게됩니다.

#### `index.js`

이것은`karma-webpack`에 의해 사용되는 엔트리 파일입니다. 이 파일의 목적은 모든 테스트 및 소스 코드를 "한 번에"수집하는 것입니다.

#### `karma.conf.js`

여기서 스펙/커버리지 리포터와 함께 설정 한 실제 `karma` 설정을 찾을 수 있습니다. [karma 공식 문서](http://karma-runner.github.io/1.0/config/configuration-file.html)에 따라 추가로 사용자 정의 할 수 있습니다.


### Mocking 의존성

electron-vue는 기본적으로 [`inject-loader`](https://github.com/plasticine/inject-loader)가 설치되어 있습니다. Vue 구성 요소 파일 사용법은 [mock으로 테스트 한 `vue-loader` 문서](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html)를 참조하십시오.

