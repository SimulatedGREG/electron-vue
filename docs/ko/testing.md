# Testing

electron-vue는 `renderer` 프로세스에 대한 단위 테스팅과 end-to-end 테스트를 모두 지원하며 공식 `vuejs-templates/webpack` 보일러 플레이트에서 제공되는 테스트 설정에 크게 영향을 받습니다. 
`vue-cli` 스캐폴딩 중 테스트 지원 옵션을 선택 할 수 있습니다.

## [Unit testing](unittesting.md)

Karma + Mocha로 유닛 테스트 실행합니다.

```bash
npm run unit
```

## [End-to-end testing](end-to-end_testing.md)

Spectron + Mocha로 end-to-end 테스트 실행합니다.

```bash
npm run e2e
```

## 모든 테스트 실행

```bash
npm test
```

### CI 테스팅에 관하여

스캐폴딩 할 때 `electron-builder`를 빌드 도구로 사용하기로 결정했다면 `darwin`, `linux` 그리고 `win32` 용 Travis CI 및 AppVeyor에서 애플리케이션을 쉽게 테스트 할 수 있습니다. `.travis.yml` 와 `appveyor.yml` 둘 다 내부에서 주석 처리 된 섹션을 찾을 수 있고 곧바로 주석을 해제하여 테스트를 수행 할 수 있습니다. 자세한 내용은 [**Automated Deployments using CI**](/using-electron-builder.md#automated-deployments-using-ci)를 읽으세요.

