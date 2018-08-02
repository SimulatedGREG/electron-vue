# 엔드 - 투 - 엔드 테스트

electron-vue는 [Spectron](http://electron.atom.io/spectron/)과 [Mocha](https://mochajs.org/)\([Chai](http://chaijs.com/)와 함께)엔드 - 투 - 엔드 테스트 프레임 워크를 사용합니다. 
Mocha & Chai API는 `expect`,`should` 및`assert`를 포함하여 전 세계적으로 사용 가능합니다.

### 테스트 실행

```bash
# Begin Mocha
npm run e2e
```

##### Note

종단 간 테스트를 실행하기 전에 `npm run pack`을 호출하여 Spectron이 테스트 중에 소비 할 수있는 생산 빌드를 만듭니다.

### 파일 구조

```
my-project
├─ test
|  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ utils.js
```

**대부분의 경우 **`index.js`**를 무시하고 **`specs/`**작성에만 집중할 수 있습니다.**

#### `specs/`

Inside this directory is where actual tests are written. Thanks to the power of `babel-register`, you have full access to ES2015.

이 디렉토리 안에는 실제 테스트가 작성되는 곳이 있습니다. `babel-register`의 힘으로 ES2015를 완벽하게 이용할 수 있습니다.

#### `index.js`

이 파일은 모카 (Mocha)의 주요 입력 항목으로 작동하며 테스트를 위해`specs /`로 작성된 모든 테스트를 수집합니다.

#### `utils.js`

Here you will find generic functions that could be of use throughout your `specs/`. Base functions include a `beforeEach` and `afterEach` that handle the electron creation/destruction process.

여기에 `specs/`에서 사용할 수있는 일반적인 함수가 있습니다. 기본 함수는 일렉트론 생성/파괴 프로세스를 처리하는`beforeEach`와`afterEach`를 포함합니다.

### Spectron 의 주제

Spectron은 [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)와 [WebDriverIO](http://webdriver.io/)를 모두 사용해 DOM 요소를 조작 하는 [electron](http://electron.atom.io)의 공식 테스트 프레임 워크입니다.  

#### WebDriverIO 사용하기

Spectron [documentation](https://github.com/electron/spectron#client)에 명시된 바와 같이 [WebDriverIO API](http://webdriver.io/api.html)에 액세스하려면 `this.app.client`를 통해 액세스 할 수 있습니다. 단일 일렉트론-vue는 Mocha를 사용하기 때문에 `this`의 문맥은 `afterEach`,`beforeEach`,`it`에서 공유됩니다. 이 때문에 ES2015 화살표 함수는 `this`의 컨텍스트가 덮어 쓰여지므로 특정 상황에서 사용할 수 없다는 것을 알아 두는 것이 중요합니다. ([more info](https://mochajs.org/#arrow-functions) \).