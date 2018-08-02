# NPM 스크립트

개발 프로세스와 관련된 중복 작업을 제거하려면 사용 가능한 NPM 스크립트 중 일부를 기록해 두십시오. 다음 명령은 프로젝트의 루트 디렉토리에서 실행해야합니다. 물론 `yarn run <command>`를 사용하여 아래 명령 중 하나를 실행할 수 있습니다.

### `npm run build`

프로덕션 및 패키지 용으로 앱을 빌드하십시오. 더 많은 정보는 [**Building Your App**](building_your_app.md) 섹션에서 찾을 수 있습니다.

### `npm run dev`

개발중인 앱을 실행합니다.

### `npm run lint`

Lint all your `src/`'s and `test/`'s JS & Vue component files.

모든 `src/` 와 `test/`의 JS & Vue 컴포넌트 파일을 문법체크합니다.

### `npm run lint:fix`

모든 `src/` 와 `test/`의 JS & Vue 컴포넌트 파일을 문법체크하고 이슈 해결을 시도합니다.

### `npm run pack`

`npm run pack : main` 과 `npm run pack : renderer`을 모두 실행하십시오. 이러한 명령을 사용할 수 있지만 `npm run build`가 이 단계를 처리 할 때 수동으로 수행해야하는 경우는 많지 않습니다.

### `npm run pack:main`

webpack을 실행하여 `main` 프로세스 소스 코드를 묶습니다.

### `npm run pack:renderer`

`renderer` 프로세스 소스 코드를 묶기 위해 webpack을 실행하십시오.

### `npm run unit`

카르마 + 재스민으로 유닛 테스트를 실행하십시오. [**Unit Testing**](unittesting.md)에 대한 추가 정보.

### `npm run e2e`

Spectron + Mocha로 엔드 투 엔드 테스트를 실행하십시오. [**엔드 - 투 - 엔드 테스팅**](end-to-end_testing.md)에 대한 추가 정보.

### `npm test`

Runs both `npm run unit` & `npm run e2e`. More information on [**Testing**](testing.md).

`npm run unit` 과 `npm run e2e`를 모두 실행합니다. [**Testing**](testing.md)에 대한 추가 정보.
