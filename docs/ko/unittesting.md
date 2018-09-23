# Unit Testing

electron-vue는 유닛 테스트를 위해 [Karma](https://karma-runner.github.io/1.0/index.html) 테스트 러너, \(Chai[Chai](http://chaijs.com/)와 함께\)[Mocha](https://mochajs.org/) 테스트 프레임워크를 사용합니다.

Mocha와 Chai는 각각 `karma-mocha`와 `karma-chai`를 사용하여 통합되므로 `expect`와 같은 모든 API는 테스트 파일 전역에서 사용할 수 있습니다.

### Running Tests

```bash
# Begin Karma
npm run unit
```

### File Structure

```
my-project
├─ test
|  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ karma.conf.js
```

대부분의 경우, index.js와 karma.conf.js 둘 다 무시하고 specs/ 작성에만 집중할 수 있습니다.

**대부분의 경우,** `index.js` **와** `karma.conf.js` **둘 다 무시하고** `specs/` **작성에만 집중 할 수 있습니다.**

#### `specs/`

이 디렉토리 안은 실제 테스트가 작성되는 곳이 있습니다. webpack의 힘으로 ES2015 및 지원되는 로더에 대한 모든 액세스 권한을 갖게됩니다.

#### `index.js`

`karma-webpack`에서 사용하는 엔트리 파일입니다. 이 파일의 목적은 모든 테스트 및 소스 코드를 "한 번에" 수집하는 것입니다.

#### `karma.conf.js`

여기서 spec/coverage 리포터와 함께 설정한 실제 `karma` 구성을 찾을 수 있습니다. 추가 사용자 정의는 [official karma documentation](http://karma-runner.github.io/1.0/config/configuration-file.html)를 따라 만들 수 있습니다.

### Mocking Dependencies

electron-vue는 기본적으로  [`inject-loader`](https://github.com/plasticine/inject-loader)가 설치되어 있습니다. 
Vue 컴포넌트 파일 사용법은 [`vue-loader` docs on testing with mocks](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html)를 참조하세요.

