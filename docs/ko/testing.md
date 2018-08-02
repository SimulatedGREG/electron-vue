# 테스트하기

electron-vue supports both unit testing and end-to-end testing for the `renderer` process and is heavily inspired by the testing setup provided with the official `vuejs-templates/webpack` boilerplate. During `vue-cli` scaffolding you will have the option to include testing support.

electron-vue는 유닛 테스트와 렌더러 프로세스를위한 엔드 투 엔드 테스트를 모두 지원하며 공식`vuejs-templates / webpack` 보일러 플레이트에서 제공되는 테스트 설정에 크게 영향을받습니다. `vue-cli` 스캐 폴딩 중에 테스트 지원을 포함 할 수 있습니다.

## [Unit testing](unittesting.md)

Karma + Mocha로 유닛 테스트 실행

```bash
npm run unit
```

## [End-to-end testing](end-to-end_testing.md)

Spectron + Mocha로 엔드 투 엔드 테스트 실행

```bash
npm run e2e
```

## 모든 테스트 실행

```bash
npm test
```

### CI 테스트 주제

If your decided to use `electron-builder` as your build tool when scaffolding, then you can easily test your application on both Travis CI & AppVeyor for `darwin`, `linux`, and `win32`. Inside both `.travis.yml` and `appveyor.yml` you will find commented sections you can quickly un-comment to enable testing. Make sure to read up on [**Automated Deployments using CI**](/using-electron-builder.md#automated-deployments-using-ci)** **for further information.

스캐 폴딩 할 때 빌드 툴로`electron-builder`를 사용하기로 결정했다면,`darwin`,`linux`,`win32`의 Travis CI와 AppVeyor에서 어플리케이션을 쉽게 테스트 할 수 있습니다. `.travis.yml`과`appveyor.yml` 둘 다 안에 주석 처리 된 섹션을 찾을 수 있습니다. 자세한 내용은 [**CI**를 사용하는 자동 배포](/using-electron-builder.md#automated-deployments-using-ci)를 참조하십시오.