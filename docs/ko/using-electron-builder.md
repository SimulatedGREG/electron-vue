# [`electron-builder`](https://github.com/electron-userland/electron-builder) 사용하기

`electron-builder`가 생성한 모든 빌드는 `build` 디렉토리에서 찾을 수 있습니다.

#### 빌드하기

```bash
npm run build
```

#### 압축 해제한 디렉토리 빌드하기

완전한 installer가 없는 간단한 실행 파일을 생성합니다. 빠른 테스트에 유용합니다.

```bash
npm run build:dir
```

### Default building configuration

Further customization can be made at `package.json` in accordance to `electron-builders`'s options found [here](https://github.com/electron-userland/electron-builder/wiki/Options).

```js
"build": {
  "productName": "ElectronVue",
  "appId": "org.simulatedgreg.electron-vue",
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  },
  "directories": {
    "output": "build"
  },
  "files": [
    "dist/electron",
    "node_modules/",
    "package.json"
  ],
  "mac": {
    "icon": "build/icons/icon.icns"
  },
  "win": {
    "icon": "build/icons/icon.ico"
  },
  "linux": {
    "icon": "build/icons"
  }
}
```

## CI를 이용한 자동화 된 배치

electron-vue의 `electron-builder` 구성을 사용하면 자동화된 배치를 위해 `appveyor.yml`와 `.travis.yml`도 제공됩니다. 두 설정 파일은 electron 애플리케이션 빌드와 artifacts를 Github release, Bintray 등에 푸시하는 설정 입니다. Travis CI는 `linux`와 `darwin` \(macOS\)을 빌드하는 데 사용되는 반면 AppVeyor는 `win32`를 빌드하는 데 사용됩니다. 두 서비스 모두 OSS 프로젝트에서 무료입니다.

#### Setting up Travis CI/AppVeyor

1. [Travis CI](https://travis-ci.org/getting_started) / [AppVeyor](https://www.appveyor.com/)에서 계정을 만드세요.
2. 여러분의 electron-vue 프로젝트가 있는 Github 저장소를 링크하세요.
3. [https://github.com/settings/tokens](https://github.com/settings/tokens) 방문하고 **Generate new token **을 누르세요.\(이 토큰은 Travis CI & AppVeyor 둘 다에 사용 될 수 있습니다.\)
   1. **Token description** 설정하세요.
   2. **public\_repo **스코프를 확인하세요.
   3. **Generate token**를 누르세요.
4. 나중에 새 토큰을 복사하고 저장하세요.
5. Travis CI / AppVeyor에서 원격 저장소 설정을 열고 새로운 **Environment Variable**를 추가하세요.
   1. 변수의 이름을 `GH_TOKEN`으로 설정하세요.
   2. 변수의 값을 방금 생성한 GitHub 액세스 토큰으로 설정하세요.
   3. 새로운 변수를 **저장**하고 암호화가 사용 가능한지 확인하세요.
   
이 지점에서, 모든 것이 설정되어야 합니다. Travis CI/AppVeyor는 기본적으로 `master` 브랜치에 대한 푸시를 감시합니다. 푸시가 이루어지면 Travis CI/AppVeyor는 원격 저장소를 서버에 복제하고 빌드 프로세스를 시작합니다. 최종 단계에서 `electron-builder`는 `GH_TOKEN` 환경 변수를 보고 초안 릴리스를 만들고 공개 GitHub 저장소에 artifacts를 업로드 합니다. 이 시점에서 초안 릴리스를 편집 한 다음이를 세상에 퍼블릭 할 수 있습니다. 릴리스를 퍼블리싱 한 후, `package.json`을 업데이트하여 향후 릴리스가 새 버전 번호로 표시되는지 확인하세요.

#### 자동 업데이트

애플리케이션에서 자동 업데이트를 수신하도록 설정하는 것은 멋진 기능이지만 [**Code Signing**](https://github.com/electron-userland/electron-builder/wiki/Code-Signing)이 필요하다는 것을 알고 있어야합니다. [여기](https://www.electron.build/code-signing)에 설명 된 `electron-builder` 요구 사항을 기반으로 몇 가지 환경 변수를 추가하여 Code Signing을 설정할 수 있습니다. 인증서를 설정하고 나면 `electron-updater` 를 설치하고 `src/main/index.js`의 하단 코드 덩어리를 주석해지하여 자동 업데이트를 활성화 할 수 있습니다.

대부분의 사람들과 같은 멋진 코드 서명 인증서가 없으면 GitHub API를 사용하여 새 릴리스를 확인할 수 있습니다. 새로운 릴리스가 발견되면 애플리케이션 내에서 새 빌드를 다운로드하고 설치할 수 있는 다운로드 페이지로 사용자를 안내하는 알림을 제공하세요.`electron-builder`가 제공하는 놀라운 설치 프로그램 덕분에 사용자는 현재 버전을 설치 제거 할 필요가 없으며 새 설치는 웹 저장소 또는 `userData` 파일을 계속 유지하면서 이전 버전을 대체합니다.

