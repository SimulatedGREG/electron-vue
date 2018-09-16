# NPM Scripts

개발 프로세스에 대한 중복 작업을 제거하려면, 사용 가능한 NPM 스크립트 중 일부를 기록해 두세요. 다음 명령은 프로젝트의 루트 디렉토리에서 실행해야합니다. `yarn run <command>`를 사용하여 아래 명령어 중 하나를 실행할 수도 있습니다.

### `npm run build`

프로덕션과 패키지 용 앱을 빌드 합니다. 더 자세한 정보는 [**Building Your App**](building_your_app.md) 섹션을 참조하세요.

### `npm run dev`

개발 중인 앱을 실행합니다.

### `npm run lint`

모든 `src/`와 `test/`의 JS & Vue component 파일을 Lint 합니다.

### `npm run lint:fix`

모든 `src/`와 `test/`의 JS & Vue component 파일을 Lint하고 문재 해결을 시도합니다.

### `npm run pack`

`npm run pack:main` & `npm run pack:renderer` 둘 다 실행합니다. 이러한 명령어를 사용 할 수 있지만, `npm run build`로 이 단계를 처리 할 때 수동으로 수행하는 경우는 많지 않습니다.

### `npm run pack:main`

`main` 프로세스 소스 코드를 번들하기 위해 webpack을 실행합니다.

### `npm run pack:renderer`

`renderer` 프로세스 소스 코드를 번들하기 위해 webpack을 실행합니다.

### `npm run unit`

Karma와 Jasmine로 단위 테스트를 실행합니다. 자세한 내용은 [**Unit Testing**](unittesting.md)를 참조하세요.

### `npm run e2e`

Spectron + Mocha로 end-to-end 테스트를 실행합니다. 자세한 내용은 [**End-to-end Testing**](end-to-end_testing.md)를 참조하세요.

### `npm test`

`npm run unit` & `npm run e2e` 둘 다 실행합니다. 자세한 내용은 [**Testing**](testing.md)을 참조하세요.
